const destinations = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    continent: "Europe",
    type: "Cultural",
    budget: "high",
    img: "images/paris.jpg",
    desc: "The capital of France, famous for the Eiffel Tower, art museumes, fashion, cafés, and romantic streets.",
    attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Montmartre", "Seine River"],
    costs: [
      { cat: "Accommodation", low: "$50/night", mid: "$150/night", lux: "$500/night" },
      { cat: "Food", low: "$25/day", mid: "$70/day", lux: "$180/day" },
      { cat: "Transport", low: "$10/day", mid: "$35/day", lux: "$120/day" },
    ]
  },
  {
    id: 2,
    name: "Rome",
    country: "Italy",
    continent: "Europe",
    type: "Cultural",
    budget: "mid",
    img: "images/rome.jpg",
    desc: "An ancient city filled with Roman ruins, beautiful churches, piazzas, and world-famous Italian food.",
    attractions: ["Colosseum", "Vatican City", "Trevi Fountain", "Roman Forum", "Pantheon"],
    costs: [
      { cat: "Accommodation", low: "$40/night", mid: "$120/night", lux: "$400/night" },
      { cat: "Food", low: "$20/day", mid: "$60/day", lux: "$150/day" },
      { cat: "Transport", low: "$8/day", mid: "$30/day", lux: "$100/day" },
    ]
  },
  {
    id: 3,
    name: "London",
    country: "United Kingdom",
    continent: "Europe",
    type: "Cultural",
    budget: "high",
    img: "images/london.jpg",
    desc: "A global city known for its history, royal heritage, and modern attractions.",
    attractions: ["Big Ben", "London Eye", "Tower Bridge", "British Museum", "Buckingham Palace"],
    costs: [
      { cat: "Accommodation", low: "$70/night", mid: "$200/night", lux: "$650/night" },
      { cat: "Food", low: "$30/day", mid: "$80/day", lux: "$220/day" },
      { cat: "Transport", low: "$12/day", mid: "$35/day", lux: "$90/day" }
    ]
  },
  {
    id: 4,
    name: "Barcelona",
    country: "Spain",
    continent: "Europe",
    type: "Cultural",
    budget: "mid",
    img: "images/barcelona.jpg",
    desc: "A vibrant Spanish city known for Gaudí architecture, beaches, nightlife, and Mediterranean culture.",
    attractions: ["Sagrada Família", "Park Güell", "La Rambla", "Barceloneta Beach", "Casa Batlló"],
    costs: [
      { cat: "Accommodation", low: "$35/night", mid: "$110/night", lux: "$350/night" },
      { cat: "Food", low: "$18/day", mid: "$55/day", lux: "$140/day" },
      { cat: "Transport", low: "$8/day", mid: "$30/day", lux: "$90/day" },
    ]
  },
  {
    id: 5,
    name: "Santorini",
    country: "Greece",
    continent: "Europe",
    type: "Relaxation",
    budget: "high",
    img: "images/santorini.jpg",
    desc: "A stunning volcanic island in the Aegean Sea, famous for white-washed buildings, blue domes, sunsets, and clear waters.",
    attractions: ["Oia Sunset Views", "Red Beach", "Akrotiri Archaeological Site", "Nea Kameni Volcano", "Fira Town"],
    costs: [
      { cat: "Accommodation", low: "$40/night", mid: "$120/night", lux: "$400/night" },
      { cat: "Food", low: "$20/day", mid: "$60/day", lux: "$150/day" },
      { cat: "Transport", low: "$10/day", mid: "$40/day", lux: "$100/day" },
    ]
  },
  {
    id: 6,
    name: "Amsterdam",
    country: "Netherlands",
    continent: "Europe",
    type: "Relaxation",
    budget: "high",
    img: "images/amsterdam.jpg",
    desc: "A charming city known for canals, cycling, museums, historic houses, and relaxed European vibes.",
    attractions: ["Canal Cruise", "Van Gogh Museum", "Anne Frank House", "Rijksmuseum", "Dam Square"],
    costs: [
      { cat: "Accommodation", low: "$50/night", mid: "$140/night", lux: "$450/night" },
      { cat: "Food", low: "$25/day", mid: "$70/day", lux: "$160/day" },
      { cat: "Transport", low: "$10/day", mid: "$35/day", lux: "$100/day" },
    ]
  },
  {
    id: 7,
    name: "Prague",
    country: "Czech Republic",
    continent: "Europe",
    type: "Cultural",
    budget: "low",
    img: "images/prague.jpg",
    desc: "A beautiful historic city famous for castles, old bridges, medieval streets, and affordable travel.",
    attractions: ["Prague Castle", "Charles Bridge", "Old Town Square", "Astronomical Clock", "St. Vitus Cathedral"],
    costs: [
      { cat: "Accommodation", low: "$25/night", mid: "$80/night", lux: "$250/night" },
      { cat: "Food", low: "$15/day", mid: "$40/day", lux: "$100/day" },
      { cat: "Transport", low: "$5/day", mid: "$20/day", lux: "$70/day" },
    ]
  },
  {
    id: 8,
    name: "Tokyo",
    country: "Japan",
    continent: "Asia",
    type: "Cultural",
    budget: "high",
    img: "images/tokyo.jpg",
    desc: "A futuristic city blending technology, anime culture, temples, shopping, and incredible Japanese food.",
    attractions: ["Shibuya Crossing", "Tokyo Tower", "Senso-ji Temple", "Akihabara", "Shinjuku"],
    costs: [
      { cat: "Accommodation", low: "$45/night", mid: "$130/night", lux: "$450/night" },
      { cat: "Food", low: "$20/day", mid: "$60/day", lux: "$160/day" },
      { cat: "Transport", low: "$10/day", mid: "$35/day", lux: "$100/day" },
    ]
  },
  {
    id: 9,
    name: "Kyoto",
    country: "Japan",
    continent: "Asia",
    type: "Cultural",
    budget: "mid",
    img: "images/kyoto.jpg",
    desc: "Japan’s traditional heart, famous for temples, gardens, bamboo forests, shrines, and geisha districts.",
    attractions: ["Fushimi Inari Shrine", "Arashiyama Bamboo Forest", "Kinkaku-ji", "Gion District", "Kiyomizu-dera"],
    costs: [
      { cat: "Accommodation", low: "$35/night", mid: "$110/night", lux: "$350/night" },
      { cat: "Food", low: "$18/day", mid: "$55/day", lux: "$140/day" },
      { cat: "Transport", low: "$8/day", mid: "$30/day", lux: "$90/day" },
    ]
  },
  {
    id: 10,
    name: "Bali",
    country: "Indonesia",
    continent: "Asia",
    type: "Adventure",
    budget: "low",
    img: "images/bali.jpg",
    desc: "A tropical island paradise known for beaches, rice terraces, temples, waterfalls, and surfing.",
    attractions: ["Ubud Rice Terraces", "Uluwatu Temple", "Seminyak Beach", "Mount Batur", "Tegenungan Waterfall"],
    costs: [
      { cat: "Accommodation", low: "$15/night", mid: "$60/night", lux: "$250/night" },
      { cat: "Food", low: "$10/day", mid: "$30/day", lux: "$90/day" },
      { cat: "Transport", low: "$5/day", mid: "$25/day", lux: "$80/day" },
    ]
  },
  {
    id: 11,
    name: "Bangkok",
    country: "Thailand",
    continent: "Asia",
    type: "Cultural",
    budget: "low",
    img: "images/bangkok.jpg",
    desc: "Thailand’s energetic capital, famous for temples, street food, markets, nightlife, and river views.",
    attractions: ["Grand Palace", "Wat Arun", "Chatuchak Market", "Khao San Road", "Chao Phraya River"],
    costs: [
      { cat: "Accommodation", low: "$15/night", mid: "$60/night", lux: "$220/night" },
      { cat: "Food", low: "$8/day", mid: "$25/day", lux: "$80/day" },
      { cat: "Transport", low: "$5/day", mid: "$20/day", lux: "$70/day" },
    ]
  },
  {
  id: 12,
  name: "Dubai",
  country: "United Arab Emirates",
  continent: "Asia",
  type: "Adventure",
  budget: "high",
  img: "images/dubai.jpg",
  desc: "A futuristic desert city famous for luxury shopping, skyscrapers, desert safaris, and world-class attractions.",
  attractions: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Desert Safari", "Dubai Marina"],
  costs: [
    { cat: "Accommodation", low: "$50/night", mid: "$180/night", lux: "$600/night" },
    { cat: "Food", low: "$25/day", mid: "$80/day", lux: "$220/day" },
    { cat: "Transport", low: "$12/day", mid: "$45/day", lux: "$140/day" },
  ]
},
{
  id: 13,
  name: "Singapore",
  country: "Singapore",
  continent: "Asia",
  type: "Cultural",
  budget: "high",
  img: "images/singapore.jpg",
  desc: "A clean and modern island city-state known for futuristic architecture, gardens, shopping, and amazing food.",
  attractions: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island", "Orchard Road", "Chinatown"],
  costs: [
    { cat: "Accommodation", low: "$45/night", mid: "$150/night", lux: "$500/night" },
    { cat: "Food", low: "$20/day", mid: "$70/day", lux: "$180/day" },
    { cat: "Transport", low: "$10/day", mid: "$35/day", lux: "$110/day" },
  ]
},
{
  id: 14,
  name: "Seoul",
  country: "South Korea",
  continent: "Asia",
  type: "Cultural",
  budget: "mid",
  img: "images/seoul.jpg",
  desc: "A vibrant city blending K-pop culture, ancient palaces, technology, nightlife, and street food.",
  attractions: ["Gyeongbokgung Palace", "N Seoul Tower", "Myeongdong", "Bukchon Hanok Village", "Hongdae"],
  costs: [
    { cat: "Accommodation", low: "$30/night", mid: "$100/night", lux: "$320/night" },
    { cat: "Food", low: "$15/day", mid: "$45/day", lux: "$120/day" },
    { cat: "Transport", low: "$7/day", mid: "$25/day", lux: "$80/day" },
  ]
},
{
  id: 15,
  name: "New York City",
  country: "United States",
  continent: "North America",
  type: "Entertainment",
  budget: "high",
  img: "images/new-york-city.jpg",
  desc: "The city that never sleeps, known for skyscrapers, Broadway, museums, shopping, and iconic landmarks.",
  attractions: ["Times Square", "Central Park", "Statue of Liberty", "Brooklyn Bridge", "Empire State Building"],
  costs: [
    { cat: "Accommodation", low: "$70/night", mid: "$220/night", lux: "$700/night" },
    { cat: "Food", low: "$30/day", mid: "$90/day", lux: "$250/day" },
    { cat: "Transport", low: "$12/day", mid: "$40/day", lux: "$130/day" },
  ]
},
{
  id: 16,
  name: "Los Angeles",
  country: "United States",
  continent: "North America",
  type: "Entertainment",
  budget: "high",
  img: "images/los-angeles.jpg",
  desc: "A sunny city famous for Hollywood, beaches, celebrity culture, and entertainment industries.",
  attractions: ["Hollywood Sign", "Santa Monica Pier", "Venice Beach", "Universal Studios", "Beverly Hills"],
  costs: [
    { cat: "Accommodation", low: "$60/night", mid: "$180/night", lux: "$550/night" },
    { cat: "Food", low: "$25/day", mid: "$80/day", lux: "$220/day" },
    { cat: "Transport", low: "$15/day", mid: "$50/day", lux: "$150/day" },
  ]
},
{
  id: 17,
  name: "San Francisco",
  country: "United States",
  continent: "North America",
  type: "Adventure",
  budget: "high",
  img: "images/san-francisco.jpg",
  desc: "A scenic coastal city famous for the Golden Gate Bridge, cable cars, tech culture, and steep streets.",
  attractions: ["Golden Gate Bridge", "Alcatraz Island", "Fisherman’s Wharf", "Chinatown", "Lombard Street"],
  costs: [
    { cat: "Accommodation", low: "$65/night", mid: "$200/night", lux: "$600/night" },
    { cat: "Food", low: "$28/day", mid: "$85/day", lux: "$230/day" },
    { cat: "Transport", low: "$12/day", mid: "$40/day", lux: "$130/day" },
  ]
},
{
  id: 18,
  name: "Vancouver",
  country: "Canada",
  continent: "North America",
  type: "Adventure",
  budget: "high",
  img: "images/vancouver.jpg",
  desc: "A beautiful Canadian city surrounded by mountains and ocean, perfect for outdoor adventures and urban life.",
  attractions: ["Stanley Park", "Capilano Suspension Bridge", "Granville Island", "Grouse Mountain", "Gastown"],
  costs: [
    { cat: "Accommodation", low: "$50/night", mid: "$160/night", lux: "$500/night" },
    { cat: "Food", low: "$22/day", mid: "$70/day", lux: "$180/day" },
    { cat: "Transport", low: "$10/day", mid: "$35/day", lux: "$100/day" },
  ]
},
{
  id: 19,
  name: "Toronto",
  country: "Canada",
  continent: "North America",
  type: "Entertainment",
  budget: "mid",
  img: "images/toronto.jpg",
  desc: "Canada’s largest city, known for diversity, skyscrapers, sports, and vibrant neighborhoods.",
  attractions: ["CN Tower", "Ripley’s Aquarium", "Toronto Islands", "Distillery District", "Casa Loma"],
  costs: [
    { cat: "Accommodation", low: "$45/night", mid: "$140/night", lux: "$450/night" },
    { cat: "Food", low: "$20/day", mid: "$65/day", lux: "$170/day" },
    { cat: "Transport", low: "$9/day", mid: "$30/day", lux: "$90/day" },
  ]
},
{
  id: 20,
  name: "Cancún",
  country: "Mexico",
  continent: "North America",
  type: "Adventure",
  budget: "mid",
  img: "images/cancun.jpg",
  desc: "A tropical Mexican paradise famous for turquoise beaches, resorts, nightlife, and Mayan ruins nearby.",
  attractions: ["Hotel Zone Beaches", "Isla Mujeres", "Chichén Itzá", "Xcaret Park", "Cenotes"],
  costs: [
    { cat: "Accommodation", low: "$35/night", mid: "$120/night", lux: "$400/night" },
    { cat: "Food", low: "$18/day", mid: "$55/day", lux: "$150/day" },
    { cat: "Transport", low: "$8/day", mid: "$30/day", lux: "$100/day" },
  ]
},
{
  id: 21,
  name: "Rio de Janeiro",
  country: "Brazil",
  continent: "South America",
  type: "Adventure",
  budget: "mid",
  img: "images/rio-de-janeiro.jpg",
  desc: "A lively Brazilian city famous for beaches, Carnival, samba music, mountains, and vibrant culture.",
  attractions: ["Christ the Redeemer", "Copacabana Beach", "Sugarloaf Mountain", "Ipanema Beach", "Selarón Steps"],
  costs: [
    { cat: "Accommodation", low: "$30/night", mid: "$100/night", lux: "$320/night" },
    { cat: "Food", low: "$15/day", mid: "$45/day", lux: "$120/day" },
    { cat: "Transport", low: "$7/day", mid: "$25/day", lux: "$80/day" },
  ]
},
{
  id: 22,
  name: "Machu Picchu",
  country: "Peru",
  continent: "South America",
  type: "Adventure",
  budget: "mid",
  img: "images/machu-picchu.jpg",
  desc: "An ancient Incan citadel hidden in the Andes Mountains, famous for breathtaking scenery and archaeological wonders.",
  attractions: ["Sun Gate", "Temple of the Sun", "Huayna Picchu", "Inca Trail", "Sacred Valley"],
  costs: [
    { cat: "Accommodation", low: "$25/night", mid: "$90/night", lux: "$300/night" },
    { cat: "Food", low: "$15/day", mid: "$40/day", lux: "$110/day" },
    { cat: "Transport", low: "$10/day", mid: "$35/day", lux: "$90/day" },
  ]
},
{
  id: 23,
  name: "Buenos Aires",
  country: "Argentina",
  continent: "South America",
  type: "Entertainment",
  budget: "mid",
  img: "images/buenos-aires.jpg",
  desc: "Argentina’s capital city known for tango dancing, European-style architecture, nightlife, and rich culture.",
  attractions: ["La Boca", "Recoleta Cemetery", "Plaza de Mayo", "Teatro Colón", "Palermo District"],
  costs: [
    { cat: "Accommodation", low: "$30/night", mid: "$100/night", lux: "$320/night" },
    { cat: "Food", low: "$15/day", mid: "$45/day", lux: "$120/day" },
    { cat: "Transport", low: "$7/day", mid: "$25/day", lux: "$80/day" },
  ]
},
{
  id: 24,
  name: "Cartagena",
  country: "Colombia",
  continent: "South America",
  type: "Relaxation",
  budget: "mid",
  img: "images/cartagena.jpg",
  desc: "A colorful Caribbean coastal city known for colonial architecture, beaches, and lively culture.",
  attractions: ["Walled City", "Castillo San Felipe", "Rosario Islands", "Clock Tower", "Getsemaní"],
  costs: [
    { cat: "Accommodation", low: "$25/night", mid: "$90/night", lux: "$280/night" },
    { cat: "Food", low: "$12/day", mid: "$40/day", lux: "$110/day" },
    { cat: "Transport", low: "$6/day", mid: "$22/day", lux: "$70/day" },
  ]
},
{
  id: 25,
  name: "Santiago",
  country: "Chile",
  continent: "South America",
  type: "Adventure",
  budget: "mid",
  img: "images/santiago.jpg",
  desc: "Chile’s capital surrounded by the Andes Mountains, offering urban life, wine culture, and outdoor activities.",
  attractions: ["San Cristóbal Hill", "Plaza de Armas", "Sky Costanera", "Valparaíso Day Trips", "La Moneda Palace"],
  costs: [
    { cat: "Accommodation", low: "$30/night", mid: "$95/night", lux: "$300/night" },
    { cat: "Food", low: "$15/day", mid: "$45/day", lux: "$120/day" },
    { cat: "Transport", low: "$7/day", mid: "$25/day", lux: "$80/day" },
  ]
},
{
  id: 26,
  name: "Cape Town",
  country: "South Africa",
  continent: "Africa",
  type: "Adventure",
  budget: "mid",
  img: "images/cape-town.jpg",
  desc: "A stunning coastal city known for Table Mountain, beaches, wildlife, vineyards, and scenic beauty.",
  attractions: ["Table Mountain", "Cape Point", "Boulders Beach", "V&A Waterfront", "Robben Island"],
  costs: [
    { cat: "Accommodation", low: "$25/night", mid: "$90/night", lux: "$280/night" },
    { cat: "Food", low: "$12/day", mid: "$40/day", lux: "$110/day" },
    { cat: "Transport", low: "$8/day", mid: "$28/day", lux: "$85/day" },
  ]
},
{
  id: 27,
  name: "Marrakech",
  country: "Morocco",
  continent: "Africa",
  type: "Cultural",
  budget: "low",
  img: "images/marrakech.jpg",
  desc: "A vibrant Moroccan city filled with colorful markets, palaces, gardens, and traditional architecture.",
  attractions: ["Jemaa el-Fnaa", "Majorelle Garden", "Bahia Palace", "Koutoubia Mosque", "Medina Souks"],
  costs: [
    { cat: "Accommodation", low: "$20/night", mid: "$70/night", lux: "$220/night" },
    { cat: "Food", low: "$10/day", mid: "$30/day", lux: "$90/day" },
    { cat: "Transport", low: "$5/day", mid: "$18/day", lux: "$60/day" },
  ]
},
{
  id: 28,
  name: "Cairo",
  country: "Egypt",
  continent: "Africa",
  type: "Cultural",
  budget: "low",
  img: "images/cairo.jpg",
  desc: "Egypt’s bustling capital, home to ancient pyramids, museums, Islamic architecture, and rich history.",
  attractions: ["Pyramids of Giza", "Egyptian Museum", "Khan el-Khalili", "Cairo Citadel", "Nile River"],
  costs: [
    { cat: "Accommodation", low: "$18/night", mid: "$65/night", lux: "$200/night" },
    { cat: "Food", low: "$8/day", mid: "$25/day", lux: "$80/day" },
    { cat: "Transport", low: "$5/day", mid: "$18/day", lux: "$60/day" },
  ]
},
{
  id: 29,
  name: "Sydney",
  country: "Australia",
  continent: "Oceania",
  type: "Adventure",
  budget: "high",
  img: "images/sydney.jpg",
  desc: "Australia’s most iconic city, famous for the Opera House, beaches, harbor views, and outdoor lifestyle.",
  attractions: ["Sydney Opera House", "Harbour Bridge", "Bondi Beach", "Darling Harbour", "Taronga Zoo"],
  costs: [
    { cat: "Accommodation", low: "$55/night", mid: "$170/night", lux: "$550/night" },
    { cat: "Food", low: "$25/day", mid: "$75/day", lux: "$200/day" },
    { cat: "Transport", low: "$10/day", mid: "$35/day", lux: "$110/day" },
  ]
},
{
  id: 30,
  name: "Queenstown",
  country: "New Zealand",
  continent: "Oceania",
  type: "Adventure",
  budget: "high",
  img: "images/queenstown.jpg",
  desc: "New Zealand’s adventure capital, surrounded by mountains and lakes, offering thrilling outdoor activities.",
  attractions: ["Milford Sound", "Skyline Gondola", "Bungee Jumping", "Lake Wakatipu", "The Remarkables"],
  costs: [
    { cat: "Accommodation", low: "$45/night", mid: "$140/night", lux: "$450/night" },
    { cat: "Food", low: "$20/day", mid: "$65/day", lux: "$170/day" },
    { cat: "Transport", low: "$10/day", mid: "$35/day", lux: "$100/day" },
  ]
}
];

const quotes = [
  { text: "To speak a language is to take on a world, a culture.", author: "Frantz Fanon" },
  { text: "Nothing develops intelligence like travel.", author: "Émile Zola" },
  { text: "One must travel to learn.", author: "Mark Twain"},
  { text: "See the world. It’s more fantastic than any dream.", author: "Ray Bradbury" },
  { text: "Investment in travel is an investment in yourself.", author:"Matthew Karsten"}
];

const faqs = [
  { q: "How do I save my trip plan?", a: "Use the Trip Budget Planner and click 'Save This Plan'. Your plan is stored locally in your browser and accessible anytime." },
  { q: "Can I change my budget later?", a: "Yes! Navigate to the Budget Planner, update your inputs, and recalculate. You can save multiple plans and manage them in the Saved Plans section." },
  { q: "How does the random generator work?", a: "The generator filters our destination database based on your travel type and budget preferences, then picks a random match to surprise you." },
  { q: "Is my data secure?", a: "All your data (saved trips, wishlist, tracker) is stored only in your browser's localStorage. Nothing is sent to external servers." },
  { q: "How can I contact support?", a: "Use the feedback form above or reach us via our social media channels linked in the footer. We typically respond within 24 hours." }
];
