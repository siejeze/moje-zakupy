// Domyślny katalog produktów — wersja Ani (266 produktów).
// To baza, którą dostaje każdy po instalacji apki (Ania i córki mają to samo).
// W apce można dodawać własne produkty i usuwać te, których się nie kupuje —
// zmiany zapisują się w telefonie.
window.DEFAULT_CATALOG = [
  {
    cat: "Warzywa",
    items: [
      "Ogórki", "Pomidory", "Pomidorki koktajlowe", "Papryka czerwona", "Papryka żółta",
      "Cukinia", "Bakłażan", "Brokuł", "Kalafior", "Sałata", "Rukola", "Szpinak świeży",
      "Kapusta biała", "Kapusta pekińska", "Kapusta kiszona", "Ogórki kiszone",
      "Cebula", "Cebula czerwona", "Czosnek", "Por", "Seler naciowy", "Pieczarki",
      "Awokado", "Rzodkiewka", "Marchew", "Kalarepa", "Botwinka", "Koperek", "Natka pietruszki",
      "Ciecierzyca w słoiku", "Ciecierzyca sucha", "Szczypiorek", "Bazylia świeża",
      "Awokado Hass", "Imbir", "Imbir marynowany", "Ogórki małosolne", "Ziemniaki",
      "Kapusta włoska", "Kolendra świeża",
    ],
  },
  {
    cat: "Owoce",
    items: [
      "Cytryny", "Limonki", "Maliny", "Truskawki", "Jeżyny", "Jabłka", "Grejpfrut",
      "Gruszki", "Czereśnie", "Mango", "Melon", "Arbuz", "Wiśnie", "Wiśnie mrożone",
      "Pomarańcze", "Banany",
      "Borówki (jagody)", "Borówki (jagody) mrożone", "Nektarynki", "Brzoskwinie",
    ],
  },
  {
    cat: "Mięso",
    items: [
      "Pierś z kurczaka", "Udka z kurczaka", "Skrzydełka z kurczaka", "Kurczak cały",
      "Mięso mielone wieprzowe", "Mięso mielone wołowe", "Karkówka", "Schab", "Boczek",
      "Żeberka", "Wątróbka drobiowa", "Wątróbka wieprzowa", "Serca drobiowe", "Żołądki drobiowe",
      "Golonka", "Indyk (filet)", "Kaczka",
    ],
  },
  {
    cat: "Wędliny",
    items: [
      "Szynka", "Kiełbasa zwyczajna", "Kabanosy", "Parówki", "Salami", "Boczek wędzony",
      "Polędwica", "Pasztet", "Smalec",
    ],
  },
  {
    cat: "Ryby",
    items: [
      "Łosoś świeży", "Łosoś wędzony", "Makrela wędzona", "Śledzie", "Dorsz",
      "Tuńczyk w puszce", "Sardynki w puszce", "Makrela w puszce", "Pstrąg",
    ],
  },
  {
    cat: "Nabiał i jaja",
    items: [
      "Jaja", "Masło", "Masło klarowane", "Śmietana 30%", "Śmietana 18%", "Śmietana 12%",
      "Serek wiejski", "Twaróg", "Serek mascarpone", "Ser żółty (plastry)", "Ser gouda",
      "Mozzarella", "Ser feta", "Parmezan", "Ser pleśniowy", "Jogurt grecki naturalny",
      "Jogurt naturalny", "Kefir", "Maślanka", "Śmietanka 36% do ubijania", "Mleko",
      "Jogurt kokosowy", "Tofu naturalne", "Tofu wędzone", "Twaróg wędzony",
      "Mleczko kokosowe w puszce", "Mleko kokosowe barista w kartonie",
    ],
  },
  {
    cat: "Tłuszcze i oleje",
    items: [
      "Oliwa z oliwek", "Olej rzepakowy", "Olej kokosowy", "Olej lniany", "Majonez",
    ],
  },
  {
    cat: "Pieczywo i mąki",
    items: [
      "Chleb", "Bułki", "Chleb keto / niskowęglowodanowy", "Mąka migdałowa",
      "Mąka kokosowa", "Mąka lniana", "Babka jajowata (błonnik)", "Wafle ryżowe",
      "Chleb górski (z Lidla)", "Wafle ryżowe paprykowe",
    ],
  },
  {
    cat: "Kasze i ryż",
    items: [
      "Ryż biały", "Ryż brązowy", "Ryż basmati", "Ryż jaśminowy",
      "Kasza gryczana", "Kasza jaglana", "Kasza pęczak", "Kasza bulgur",
      "Kasza kuskus", "Kasza manna", "Płatki owsiane", "Komosa ryżowa (quinoa)",
      "Makaron", "Makaron pełnoziarnisty",
    ],
  },
  {
    cat: "Spiżarnia",
    items: [
      "Passata pomidorowa", "Pomidory w puszce", "Koncentrat pomidorowy",
      "Bulion / kostki rosołowe", "Ocet jabłkowy", "Musztarda", "Sos sojowy",
      "Orzechy włoskie", "Orzechy laskowe", "Migdały", "Orzechy nerkowca", "Pestki dyni",
      "Pestki słonecznika", "Siemię lniane", "Nasiona chia", "Wiórki kokosowe",
      "Masło orzechowe", "Kakao gorzkie", "Żelatyna", "Ryż", "Arkusze Nori do sushi",
      "Oliwki zielone", "Oliwki czarne", "Mleczko kokosowe",
    ],
  },
  {
    cat: "Przyprawy",
    items: [
      "Sól", "Pieprz", "Papryka słodka", "Papryka ostra", "Oregano", "Bazylia", "Tymianek",
      "Rozmaryn", "Curry", "Kurkuma", "Cynamon", "Czosnek granulowany", "Zioła prowansalskie",
      "Liść laurowy", "Ziele angielskie", "Vegeta / przyprawa do potraw", "Pasta wasabi do sushi",
    ],
  },
  {
    cat: "Napoje",
    items: [
      "Woda niegazowana", "Woda gazowana", "Woda mineralna", "Kawa mielona", "Kawa ziarnista",
      "Napój bezcukrowy (zero)", "Sok pomidorowy", "Herbata zielona z mango",
      "Herbata czarna Lipton", "Herbata miętowa", "Herbata rumiankowa", "Herbata", "Herbata ziołowa",
    ],
  },
  {
    cat: "Słodycze / przekąski",
    items: [
      "Czekolada gorzka 85%", "Czekolada gorzka 70%", "Erytrytol", "Ksylitol", "Stewia",
      "Chipsy", "Krakersy", "Batony proteinowe",
    ],
  },
  {
    cat: "Mrożonki",
    items: [
      "Mieszanka warzywna mrożona", "Szpinak mrożony", "Brokuł mrożony", "Maliny mrożone",
      "Truskawki mrożone", "Ryba mrożona (filet)", "Frytki",
    ],
  },
  {
    cat: "Higiena",
    items: [
      "Papier toaletowy", "Ręczniki papierowe", "Chusteczki higieniczne", "Mydło w płynie",
      "Żel pod prysznic", "Szampon", "Odżywka do włosów", "Pasta do zębów", "Szczoteczka do zębów",
      "Nić dentystyczna", "Dezodorant", "Krem do rąk", "Krem do twarzy", "Golarki / maszynki",
      "Podpaski", "Patyczki higieniczne", "Wata kosmetyczna", "Płatki kosmetyczne",
    ],
  },
  {
    cat: "Chemia domowa",
    items: [
      "Płyn do naczyń", "Zmywak / gąbki", "Płyn do podłóg", "Płyn uniwersalny",
      "Płyn do WC", "Mleczko czyszczące", "Proszek / kapsułki do prania", "Płyn do płukania",
      "Worki na śmieci", "Folia spożywcza", "Folia aluminiowa", "Papier do pieczenia",
      "Odświeżacz powietrza", "Odplamiacz", "Rękawiczki gumowe",
    ],
  },
  {
    cat: "Dla psa i kota",
    items: [
      "Orlando Pure Taste – mokra (pies)", "Orlando Pure Taste – sucha (pies)",
      "Orlando Pure Taste – mokra (kot)", "Orlando Pure Taste – sucha (kot)",
      "Przysmaki dla psa", "Przysmaki dla kota", "Żwirek dla kota", "Woreczki na odchody",
    ],
  },
  {
    cat: "Inne",
    items: [
      "Baterie paluszki", "Baterie paluszki 3A",
    ],
  },
];
