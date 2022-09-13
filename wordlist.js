let listOfWords = [
    "שגשוג",
    "מפלצת",
    "חיקוי",
    "השלמה",
    "טמטום",
    "הקרבה",
    "טיעון",
    "שקדיה",
    "ריגול",
    "תרופה",
    'צוללת',
    'שבתאי',
    'רוסיה',
    "קבינט",
    "דילוג",
    "רביעי",
    "מושלג",
    "מקטרת",
    "שופטת",
    "יששכר",
    "כספית",
    "הוזלה",
    "משטרה",
    "תגבור",
    "משלחת",
    "מדליה",
    "עברית",
    "צפרדע",
    "משוגע",
    "גרעין",
    "משפחה",
    "הומיה",
    "שולחן",
    "שגריר",
    "שכונה",
    "ארמון",
    "גלבוע",
    "רעידה",
    "פלאפל",
    "שמיים",
    "משלוח",
    "חשבון",
    "לגמרי",
    "תחקיר",
    "שלמות",
    "בריון",
    "מרתון",
    "תשלום",
    "מתווך",
    "אקלים",
    "פנסיה",
    "מנהיג",
    "תמונה",
    "ארגמן",
    "מצפון",
    "תריסר",
    "פולין",
    "אחריה",
    "מקלחת",
    "מלקוש",
    "יהלום",
    "לוטרה",
    "תעדוף",
    "בנזין",
    "משלוח",
    "תענית",
    "אוויר",
    "רפאים",
    "שיירה",
    "מספיק",
    "מצרים",
    "אלמלא",
    "לחיים",
    "תגובה",
    "קריצה",
    "מתופף",
    "כמהין",
    "סטירה",
    "חמסין",
    "דרקון",
    "קונדס",
    "פטרול",
    "טיוטה",
    "עיירה",
    "ארומה",
    "רמדאן",
    "פיתות",
    "חללית",
    "סייען",
    "תכסיס",
    "ריבית",
    "הריון",
    "תרמית",
    "ספגטי",
    "קורבן",
    "כוסית",
    "חרוסת",
    "מהומה",
    "חלקית",
    "מיותר",
    "שלושה",
    "רפואה",
    "סביבה",
    "גלוטן",
    "תנועה",
    "סלמון",
    "שעטנז",
    "תקומה",
    "בגרות",
    "מעטפה",
    "מתנקש",
    "זיקוק",
    "איגרת",
    "משואה",
    "ישראל",
    "פוזמק",
    "עצמאי",
    "אצילי",
    "עליון",
    "הצבעה",
    "בניין",
    "פואטי",
    "פפאיה",
    "חליפה",
    "הכחשה",
    "זיווג",
    "פילגש",
    "שביתה",
    "מדורה",
    "משולש",
    "נסחפה",
    "קופים",
    "תעלול",
    "תחזית",
    "מהפכה",
    "שקיות",
    "הדלפה",
    "יחידה",
    "אפליה",
    "מתסיס",
    "ספורט",
    "פרסום",
    "פרנסה",
    "שבלול",
    "גבינה",
    "ראשית",
    "גפרור",
    "חירום",
    "דחייה",
    "חמישי",
    "גאווה",
    "מסיבה",
    "מדרגה",
    "אכילה",
    "שתיים",
    "יציאה",
    "תלמיד",
    "פרקדן",
    "תצפית",
    "אמנות",
    "שחייה",
    "ממשלה",
    "ספרות",
    "דוגמן",
    "לערוף",
    "פסיקה",
    "אשכול",
    "גרגיר",
    "תאריך",
    "רכישה",
    "תשלום",
    "ראיות",
    "נבחרת",
    "מרושע",
    "יומרה",
    "מטריד",
    "קובני",
    "תרבות",
    "אנגלי",
    "מתנקש",
    "בריכה",
    "משותף",
    "תאגיד",
    "נחיתה",
    "בקבוק",
    "נוגעת",
    "קפאין",
    "ברדלס",
    "לוהטת",
    "שרטוט",
    "קדושה",
    "סטירה",
    "תסמין",
    "אחראי",
    "הפנוט",
    "ונציה",
    "עלייה",
    "מקסים",
    "קטינה",
    "מצליח",
    "תקריב",
    "כינרת",
    "לבנון",
    "גאולה",
    "פלילי",
    "גלידה",
    "חקיקה",
    "רצועה",
    "חורבן",
    "שדרות",
    "מעורב",
    "עבודה",
    "עכביש",
    "בצורת",
    "תאגיד",
    "וודקה",
    "פזמון",
    "ממלכה",
    "מחסור",
    "קנצלר",
    "שניצל",
    "שביתה",
    "ירוקה",
    "חומוס",
    "בדיחה",
    "מפלגה",
    "תאורה",
    "מתמחה",
    "רמזור",
    "תדרוך",
    "שרשרת",
    "ארוחה",
    "מועצה",
    "יסודי",
    "פנתרה",
    "תקופה",
    "דליפה",
    "מינכן",
    "דרקון",
    "כלנית",
    "געגוע",
    "חבצלת",
    "מלוכה",
    "מסיבה",
    "תרגום",
    "משמרת",
    "חולון",
    "טחינה",
    "מכוער",
    "סרסור",
    "עיראק",
    "מאמין",
    "יצירה",
    "מצנפת",
    "הטמעה",
    "תתרכך",
    "רמקול",
    "מנסרה",
    "רטבים",
    "נזהרת",
    "חמדתי",
    "להבין",
    "גישור",
    "תינוק",
    "מצחיק",
    "כיפור",
    "פספוס",
    "קזינו",
    "צדדים",
    "חיטוי",
    "הרגעה",
    "נסיעה",
    "ספרדי",
    "עניבה",
    "סטייק",
    "מרקדת",
    "מפחיד",
    "כוורת",
    "גידול"
];
