// Tool: generate animated SVG files (Microsoft Fluent Emoji, MIT license) into images/
// and convert the img field in data/*.js from emoji to image name.
// Run: node tools/build-images.js  (requires: npm i @iconify-json/fluent-emoji)
const fs = require("fs");
const path = require("path");

const MAP = {
  "🐱": ["cat", "cat"], "🐶": ["dog", "dog"], "🐄": ["cow", "cow"], "🐴": ["horse", "horse"],
  "🐔": ["chicken", "chicken"], "🦆": ["duck", "duck"], "🦁": ["lion", "lion"], "🐯": ["tiger", "tiger"],
  "🐻": ["bear", "bear"], "🐑": ["ewe", "sheep"], "🐐": ["goat", "goat"], "🐷": ["pig", "pig"],
  "🐸": ["frog", "frog"], "🦘": ["kangaroo", "kangaroo"], "🐘": ["elephant", "elephant"], "🦌": ["deer", "deer"],
  "🐰": ["rabbit", "rabbit"], "🦉": ["owl", "owl"], "🪿": ["goose", "goose"], "🦊": ["fox", "fox"],
  "🦋": ["butterfly", "butterfly"], "✅": ["check-mark-button", "check"], "❌": ["cross-mark", "cross"],
  "🐦": ["bird", "bird"], "🐕": ["dog", "dog"], "🐍": ["snake", "snake"], "🐝": ["honeybee", "bee"],
  "🕷️": ["spider", "spider"], "🐠": ["tropical-fish", "tropical-fish"], "🐵": ["monkey", "monkey"],
  "🥚": ["egg", "egg"], "🍯": ["honey-pot", "honey"], "🥛": ["glass-of-milk", "milk"], "🧶": ["yarn", "wool"],
  "🦒": ["giraffe", "giraffe"], "🐫": ["two-hump-camel", "camel"], "🐌": ["snail", "snail"],
  "🐧": ["penguin", "penguin"], "🐢": ["turtle", "turtle"], "🦇": ["bat", "bat"],
  "🍎": ["red-apple", "apple"], "🍌": ["banana", "banana"], "☂️": ["umbrella", "umbrella"],
  "🍊": ["tangerine", "orange"], "🍦": ["soft-ice-cream", "ice-cream"], "📕": ["closed-book", "book"],
  "👗": ["dress", "dress"], "🌅": ["sunrise", "sunrise"], "🌙": ["crescent-moon", "moon"],
  "🥪": ["sandwich", "sandwich"], "🎬": ["clapper-board", "movie"], "🌍": ["globe-showing-europe-africa", "earth"],
  "😇": ["smiling-face-with-halo", "halo"], "⏰": ["alarm-clock", "clock"], "🐜": ["ant", "ant"],
  "🏠": ["house", "house"], "👂": ["ear", "ear"], "🎒": ["backpack", "backpack"], "🍳": ["cooking", "fried-egg"],
  "🚪": ["door", "door"], "🏙️": ["cityscape", "city"], "🌞": ["sun-with-face", "sun-face"],
  "👴": ["old-man", "old-man"], "🍰": ["shortcake", "cake-slice"], "✨": ["sparkles", "sparkles"],
  "👷": ["construction-worker", "worker"], "🌈": ["rainbow", "rainbow"], "✏️": ["pencil", "pencil"],
  "🛝": ["playground-slide", "playground"], "👸": ["princess", "princess"], "👩": ["woman", "woman"],
  "👧": ["girl", "girl"], "👵": ["old-woman", "old-woman"], "👰": ["person-with-veil", "bride"],
  "🤴": ["prince", "prince"], "🐂": ["ox", "ox"], "🐓": ["rooster", "rooster"],
  "🎭": ["performing-arts", "theater"], "🍽️": ["fork-and-knife-with-plate", "plate"],
  "👨": ["man", "man"], "🧒": ["child", "child"], "👩‍🏫": ["woman-teacher", "teacher"],
  "🩺": ["stethoscope", "stethoscope"], "🤝": ["handshake", "handshake"], "👶": ["baby", "baby"],
  "🪑": ["chair", "chair"], "👫": ["woman-and-man-holding-hands", "boy-and-girl"],
  "👩‍⚕️": ["woman-health-worker", "nurse"], "👦": ["boy", "boy"], "🦚": ["peacock", "peacock"],
  "👩‍👧": ["woman-and-man-holding-hands", "family"], "📖": ["open-book", "open-book"],
  "🏫": ["school", "school"], "💧": ["droplet", "water"], "🐭": ["mouse", "mouse"],
  "⭐": ["star", "star"], "🌸": ["cherry-blossom", "blossom"], "🟢": ["green-circle", "green"],
  "🔴": ["red-circle", "red"], "🔵": ["blue-circle", "blue"], "🟡": ["yellow-circle", "yellow"],
  "🌷": ["tulip", "tulip"], "🎂": ["birthday-cake", "birthday-cake"], "🪆": ["nesting-dolls", "doll"],
  "🚂": ["locomotive", "train"], "🪁": ["kite", "kite"], "⚽": ["soccer-ball", "ball"],
  "🥭": ["mango", "mango"], "🦓": ["zebra", "zebra"], "🎨": ["artist-palette", "palette"],
  "☀️": ["sun", "sun"], "💃": ["woman-dancing", "dancer"], "🏊": ["person-swimming", "swimmer"],
  "🏏": ["cricket-game", "cricket"], "🍚": ["cooked-rice", "rice"], "🎤": ["microphone", "microphone"],
  "🌳": ["deciduous-tree", "tree"], "✍️": ["writing-hand", "writing"], "📦": ["package", "box"],
  "🏃": ["person-running", "runner"], "🍼": ["baby-bottle", "bottle"], "🐟": ["fish", "fish"],
  "🔔": ["bell", "bell"], "🪴": ["potted-plant", "plant"], "🏥": ["hospital", "hospital"],
  "😄": ["grinning-face-with-smiling-eyes", "smile"], "🏞️": ["national-park", "river"],
  "🧗": ["person-climbing", "climber"], "🎵": ["musical-note", "music"], "🏷️": ["label", "label"],
  "💌": ["love-letter", "letter"], "🚌": ["bus", "bus"], "🦶": ["foot", "foot"], "🦷": ["tooth", "tooth"],
  "🍃": ["leaf-fluttering-in-wind", "leaf"], "🔪": ["kitchen-knife", "knife"], "🧸": ["teddy-bear", "teddy-bear"],
  "⌚": ["watch", "watch"], "🧺": ["basket", "basket"], "🙌": ["raising-hands", "hands"],
  "🥔": ["potato", "potato"], "☕": ["hot-beverage", "cup"], "🔒": ["locked", "lock"],
  "🪡": ["sewing-needle", "needle"], "🍞": ["bread", "bread"], "🧂": ["salt", "salt"],
  "👟": ["running-shoe", "shoe"], "🖊️": ["pen", "pen"], "🪥": ["toothbrush", "toothbrush"],
  "🕸️": ["spider-web", "web"], "🌃": ["night-with-stars", "night"], "🥕": ["carrot", "carrot"],
  "🔢": ["input-numbers", "numbers"], "🚗": ["automobile", "car"], "🌹": ["rose", "rose"],
  "📅": ["calendar", "calendar"], "👀": ["eyes", "eyes"], "🥤": ["cup-with-straw", "drink"],
  "🫑": ["bell-pepper", "capsicum"], "🚲": ["bicycle", "bicycle"], "🍓": ["strawberry", "strawberry"],
  "🐒": ["monkey", "monkey"], "🌻": ["sunflower", "sunflower"], "📚": ["books", "books"],
  "🍇": ["grapes", "grapes"], "🍕": ["pizza", "pizza"], "🧀": ["cheese-wedge", "cheese"],
  "🌂": ["closed-umbrella", "closed-umbrella"], "👑": ["crown", "crown"], "🎈": ["balloon", "balloon"],
  "🧦": ["socks", "socks"], "🛏️": ["bed", "bed"], "🧑‍🤝‍🧑": ["people-holding-hands", "friends"],
  "🍅": ["tomato", "tomato"], "👨‍🍳": ["man-cook", "cook"], "🚕": ["taxi", "taxi"],
  "🥖": ["baguette-bread", "baguette"], "🔧": ["wrench", "wrench"], "✈️": ["airplane", "plane"],
  "🌾": ["sheaf-of-rice", "wheat"], "🗣️": ["speaking-head", "speaking"], "🏘️": ["houses", "houses"],
  "🎁": ["wrapped-gift", "gift"], "😊": ["smiling-face-with-smiling-eyes", "happy"]
};
// Images used directly by name (comprehension.js)
const DIRECT = ["cat", "elephant", "sunflower", "school", "kite", "birthday-cake"];

const iconsJson = require("@iconify-json/fluent-emoji/icons.json");
const root = path.join(__dirname, "..");
const imgDir = path.join(root, "images");
fs.mkdirSync(imgDir, { recursive: true });

function svgFor(iconName) {
  const ic = iconsJson.icons[iconName];
  if (!ic) return null;
  const w = ic.width || iconsJson.width || 32;
  const h = ic.height || iconsJson.height || 32;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">${ic.body}</svg>`;
}

const missing = [];
const fileFor = {}; // emoji -> file base name
for (const [emoji, [iconName, fileName]] of Object.entries(MAP)) {
  const svg = svgFor(iconName);
  if (!svg) { missing.push(`${emoji} -> ${iconName}`); continue; }
  fs.writeFileSync(path.join(imgDir, fileName + ".svg"), svg);
  fileFor[emoji] = fileName;
}
for (const name of DIRECT) {
  if (!fs.existsSync(path.join(imgDir, name + ".svg"))) {
    const svg = svgFor(name);
    if (!svg) { missing.push(`direct -> ${name}`); continue; }
    fs.writeFileSync(path.join(imgDir, name + ".svg"), svg);
  }
}
if (missing.length) { console.log("MISSING ICONS:\n" + missing.join("\n")); }

// Rewrite data files: img "emoji" -> img "file name"
const dataDir = path.join(root, "data");
for (const f of fs.readdirSync(dataDir)) {
  let t = fs.readFileSync(path.join(dataDir, f), "utf8");
  t = t.replace(/img: "([^"]+)"/g, (m, val) => {
    if (fileFor[val]) return `img: "${fileFor[val]}"`;
    return m; // already an image name or could not be mapped
  });
  fs.writeFileSync(path.join(dataDir, f), t);
}
console.log("done. svg files:", fs.readdirSync(imgDir).length);
