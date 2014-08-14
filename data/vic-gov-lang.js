var availableLangs = [{ label: "Af-Soomaali", value: "so" },
{ label: "Afaan Oromo", value: "om" },
{ label: "Albanian", value: "sq" },
{ label: "Amharic", value: "am" },
{ label: "Arabi Juba", value: "pga" },
{ label: "Arabic", value: "ar" },
{ label: "Arabic, Juba", value: "pga" },
{ label: "Arabic, Sudanese", value: "apd" },
{ label: "Armenian", value: "hy" },
{ label: "Assyrian", value: "aii" },
{ label: "Asụsụ Igbo", value: "ig" },
{ label: "Bahasa Indonesia", value: "id" },
{ label: "Bahasa Melayu", value: "ms" },
{ label: "Bari", value: "bfa" },
{ label: "Bari", value: "bfa" },
{ label: "Bengali (Bangla)", value: "bn" },
{ label: "bosanski", value: "bs" },
{ label: "Bosnian", value: "bs" },
{ label: "Burmese", value: "my" },
{ label: "Cantonese", value: "yue" },
{ label: "čeština", value: "cs" },
{ label: "Chaldean", value: "cld" },
{ label: "Chin, Hakha", value: "cnh" },
{ label: "Chinese, Simplified", value: "Zh-Hans" },
{ label: "Chinese, Traditional", value: "Zh-Hant" },
{ label: "Croatian", value: "hr" },
{ label: "Czech", value: "cs" },
{ label: "Dari", value: "prs" },
{ label: "Deutsch", value: "de" },
{ label: "Dhøg Cøllø", value: "shk" },
{ label: "Dinka", value: "din" },
{ label: "Dutch", value: "nl" },
{ label: "español", value: "es" },
{ label: "Èʋegbe", value: "ee" },
{ label: "Ewe", value: "ee" },
{ label: "Faka-Tonga", value: "to" },
{ label: "Fijian", value: "fj" },
{ label: "Filipino", value: "fil" },
{ label: "Filipino", value: "fil" },
{ label: "français", value: "fr" },
{ label: "French", value: "fr" },
{ label: "Gagana fa'a Sāmoa", value: "sm" },
{ label: "German", value: "de" },
{ label: "Greek", value: "el" },
{ label: "Hakka (Kejia)", value: "hak" },
{ label: "Hazaragi", value: "haz" },
{ label: "Hindi", value: "hi" },
{ label: "Hmong Daw", value: "mww" },
{ label: "Hmoob Dawb", value: "mww" },
{ label: "hrvatski", value: "hr" },
{ label: "Hungarian", value: "hu" },
{ label: "Igbo", value: "ig" },
{ label: "Ikirundi", value: "rn" },
{ label: "Indonesian", value: "id" },
{ label: "Italian", value: "it" },
{ label: "Italiano", value: "it" },
{ label: "Japanese", value: "ja" },
{ label: "Karen, S'gaw", value: "ksw" },
{ label: "Karen, Western Pwo", value: "pwo" },
{ label: "Khmer (Cambodian)", value: "km" },
{ label: "Kirundi (Rundi)", value: "rn" },
{ label: "Kiswahili", value: "sw" },
{ label: "Korean", value: "ko" },
{ label: "Kurdî ", value: "ku-Latn" },
{ label: "Kurdish (Arabic script)", value: "ku-Arab" },
{ label: "Kurdish (Latin script)", value: "ku-Latn" },
{ label: "Kurdish, Kermashani", value: "sdh" },
{ label: "Kurdish, Kurmanji", value: "kmr" },
{ label: "Kurdish, Sorani", value: "ckb" },
{ label: "Kurmancî", value: "kmr" },
{ label: "Lai Pawi", value: "cnh" },
{ label: "Lao (Laotian)", value: "lo" },
{ label: "Macedonian", value: "mk" },
{ label: "magyar", value: "hu" },
{ label: "Malay", value: "ms" },
{ label: "Maltese", value: "mt" },
{ label: "Malti", value: "mt" },
{ label: "Mandarin", value: "zh (or cmn)" },
{ label: "Na Vosa Vakaviti", value: "fj" },
{ label: "Nederlands", value: "nl" },
{ label: "Nepali", value: "ne" },
{ label: "Nuer", value: "nus" },
{ label: "Oromo", value: "om" },
{ label: "Pashto", value: "ps" },
{ label: "Persian (Farsi)", value: "fa" },
{ label: "Polish", value: "pl" },
{ label: "polski", value: "pl" },
{ label: "português", value: "pt" },
{ label: "Portuguese", value: "pt" },
{ label: "Punjabi", value: "pa" },
{ label: "Rohingya", value: "rhg" },
{ label: "română", value: "ro" },
{ label: "Romanian", value: "ro" },
{ label: "Russian", value: "ru" },
{ label: "Samoan", value: "sm" },
{ label: "Serbian", value: "sr" },
{ label: "Shilluk (Chollo)", value: "shk" },
{ label: "shqip", value: "sq" },
{ label: "Sinhala (Sinhalese)", value: "si" },
{ label: "Slovak", value: "sk" },
{ label: "slovenčina", value: "sk" },
{ label: "Slovene (Slovenian)", value: "sl" },
{ label: "slovenščina", value: "sl" },
{ label: "Somali", value: "so" },
{ label: "Spanish", value: "es" },
{ label: "Swahili", value: "sw" },
{ label: "Tagalog", value: "tl" },
{ label: "Tamil", value: "ta" },
{ label: "Tetum", value: "tet" },
{ label: "Tetun", value: "tet" },
{ label: "Thai", value: "th" },
{ label: "Thok Nath", value: "nus" },
{ label: "Thuɔŋjäŋ", value: "din" },
{ label: "tiếng Việt", value: "vi" },
{ label: "Tigrinya", value: "ti" },
{ label: "Tongan", value: "to" },
{ label: "Türkçe", value: "tr" },
{ label: "Turkish", value: "tr" },
{ label: "Turkmen", value: "tk" },
{ label: "Türkmençe", value: "tk" },
{ label: "Twi", value: "twi" },
{ label: "Twi (Akan)", value: "twi" },
{ label: "Ukrainian", value: "uk" },
{ label: "Urdu", value: "ur" },
{ label: "Vietnamese  ", value: "vi" },
{ label: "ελληνικά", value: "el" },
{ label: "Македонски", value: "mk" },
{ label: "Русский", value: "ru" },
{ label: "српски", value: "sr" },
{ label: "українська", value: "uk" },
{ label: "Հայերեն", value: "hy" },
{ label: "اُردُو", value: "ur" },
{ label: "العربية", value: "ar" },
{ label: "العربية", value: "apd" },
{ label: "پښتو", value: "ps" },
{ label: "دری", value: "prs" },
{ label: "فارسی", value: "fa" },
{ label: "كوردي", value: "ku-Arab" },
{ label: "کوردی خوارگ", value: "sdh" },
{ label: "کوردیی ناوەندی", value: "ckb" },
{ label: "هزارگی", value: "haz" },
{ label: "ܣܘܪܝܬ", value: "aii" },
{ label: "ܣܘܼܪܲܝܬ", value: "cld" },
{ label: "ትግርኛ", value: "ti" },
{ label: "አማርኛ", value: "am" },
{ label: "नेपाली", value: "ne" },
{ label: "हिन्दी", value: "hi" },
{ label: "বাংলা ", value: "bn" },
{ label: "ਪੰਜਾਬੀ", value: "pa" },
{ label: "தமிழ்", value: "ta" },
{ label: "සිංහල ", value: "si" },
{ label: "ไทย", value: "th" },
{ label: "ລາວ", value: "lo" },
{ label: "ကညီစှီၤကျိာ်", value: "ksw" },
{ label: "ဖျိၩ့ဆၧချဲၩ့ ", value: "pwo" },
{ label: "မြန်မာဘာသာ", value: "my" },
{ label: "ភាសាខ្មែរ", value: "km" },
{ label: "한국어", value: "ko" },
{ label: "中文", value: "zh (or cmn)" },
{ label: "中文（简体）", value: "Zh-Hans" },
{ label: "中文（繁體）", value: "Zh-Hant" },
{ label: "客家話", value: "hak" },
{ label: "广州话 / 廣州話", value: "yue" },
{ label: "日本語", value: "ja" }]