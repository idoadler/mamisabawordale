import re
from collections import Counter
from datetime import datetime

def calculate_word_index(launch_date, today, fake_days):
    # Calculate the number of days from the launch date to today
    difference_in_days = (today - launch_date).days
    # Adjust by the fake days and calculate the word index
    word_index = difference_in_days + fake_days
    return word_index

# Define the launch date of the game (year, month, day)
launch_date = datetime(2023, 7, 12)  # Adjust month to Python's 0-indexed months (7 for July)
# Define today's date
today = datetime.now()

# Set the fake days used in your JavaScript
fake_days = 10

# Calculate the word index
word_index = calculate_word_index(launch_date, today, fake_days)

def find_duplicates(user_words):
    # Count all words in the list
    word_count = Counter(user_words)
    # Find and return words that appear more than once
    return [word for word, count in word_count.items() if count > 1]

def load_words_from_js(js_file_path):
    # Reading the .js file
    with open(js_file_path, 'r', encoding='utf-8') as file:
        js_content = file.read()
    
    # Extracting the words using a regular expression that captures 5-letter Hebrew words
    matches = re.findall(r'\b\w{5}\b', js_content)
    return matches

def check_words_in_js(user_words, js_words):
    # Checking which user words are in the JavaScript words set
    return [word for word in user_words if word not in js_words]

# Assuming 'user_words' array is already defined
user_words = load_words_from_js('./wordlist.js')

print("Number of user words:",len(user_words))

# Path to your JavaScript file
js_file_path = './hebwords.js'

# Load Hebrew words from .js file
hebrew_words_in_js = load_words_from_js(js_file_path)

#print(hebrew_words_in_js)

# Check which words from the user array are in the .js file
words_found = check_words_in_js(user_words, hebrew_words_in_js)

#if words_found:
print("Missing words in the JS file:", words_found)


# Find duplicates in the list
duplicates = find_duplicates(user_words)

#if duplicates:
print("Duplicate words found:", duplicates)


print("The index of today's word is:", word_index)
print("The word of today is[" , word_index%len(user_words) , "]:", user_words[word_index%len(user_words)])