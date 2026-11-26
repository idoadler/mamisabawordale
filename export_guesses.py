"""Export the guesses that firebase.js stores in Firestore to CSV files.

Setup (once):
  1. Firebase console -> Project settings -> Service accounts ->
     "Generate new private key". Save the file in this folder as
     serviceAccount.json (it is git-ignored; never commit it).
  2. pip install -r requirements.txt

Run:
  python export_guesses.py
  python export_guesses.py --key path/to/key.json --out-dir exports

Writes:
  guesses.csv          one row per stored guess
  guesses_summary.csv  one row per day: players, guesses, common words
"""
import argparse
import csv
import os
import sys
from collections import Counter, defaultdict

import firebase_admin
from firebase_admin import credentials, firestore

COLLECTION = "mamiSaba"  # must match collection(db, 'mamiSaba') in firebase.js


def fetch_guesses(key_path):
    firebase_admin.initialize_app(credentials.Certificate(key_path))
    db = firestore.client()
    rows = []
    for doc in db.collection(COLLECTION).stream():
        data = doc.to_dict()
        rows.append({
            "day": data.get("day", ""),
            "sessionId": data.get("sessionId", ""),
            "guessed": data.get("guessed", ""),
            "word": data.get("word", ""),
            "docId": doc.id,
        })
    # Within a day, keep each player's guesses together and in order.
    rows.sort(key=lambda r: (str(r["day"]), str(r["sessionId"]), _num(r["guessed"])))
    return rows


def _num(value):
    try:
        return int(value)
    except (TypeError, ValueError):
        return 0


def summarize(rows):
    by_day = defaultdict(list)
    for r in rows:
        by_day[r["day"]].append(r)

    summary = []
    for day in sorted(by_day):
        day_rows = by_day[day]
        # Guesses per player = the highest guess number seen for that session.
        per_player = defaultdict(int)
        for r in day_rows:
            per_player[r["sessionId"]] = max(per_player[r["sessionId"]], _num(r["guessed"]))
        first_words = Counter(r["word"] for r in day_rows if _num(r["guessed"]) == 1)
        all_words = Counter(r["word"] for r in day_rows)
        summary.append({
            "day": day,
            "players": len(per_player),
            "guesses": len(day_rows),
            "avg_guesses_per_player": round(sum(per_player.values()) / len(per_player), 2),
            "top_first_guesses": _top(first_words),
            "top_words": _top(all_words),
        })
    return summary


def _top(counter, n=5):
    return ", ".join(f"{word} ({count})" for word, count in counter.most_common(n))


def write_csv(path, rows, fields):
    # utf-8-sig so Excel shows the Hebrew correctly.
    with open(path, "w", newline="", encoding="utf-8-sig") as f:
        writer = csv.DictWriter(f, fieldnames=fields)
        writer.writeheader()
        writer.writerows(rows)


def main():
    # The Windows console defaults to cp1252, which can't print Hebrew.
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--key", default="serviceAccount.json", help="service account key file")
    parser.add_argument("--out-dir", default=".", help="folder for the CSV files")
    args = parser.parse_args()

    if not os.path.exists(args.key):
        parser.error(f"key file not found: {args.key} (see setup steps at the top of this file)")

    rows = fetch_guesses(args.key)
    if not rows:
        print(f"No documents found in '{COLLECTION}'.")
        return

    os.makedirs(args.out_dir, exist_ok=True)
    guesses_path = os.path.join(args.out_dir, "guesses.csv")
    summary_path = os.path.join(args.out_dir, "guesses_summary.csv")
    write_csv(guesses_path, rows, ["day", "sessionId", "guessed", "word", "docId"])
    summary = summarize(rows)
    write_csv(summary_path, summary, list(summary[0].keys()))

    print(f"{len(rows)} guesses over {len(summary)} days")
    print(f"  {guesses_path}")
    print(f"  {summary_path}")
    print("\nLast 7 days:")
    for s in summary[-7:]:
        print(f"  {s['day']}: {s['players']} players, avg {s['avg_guesses_per_player']} guesses, "
              f"top first guesses: {s['top_first_guesses']}")


if __name__ == "__main__":
    main()
