// Master mode ("Nhím Cao Thủ") — harder question bank.
// DIFFICULTY TARGET: one clear step above the regular ("Chill") topics, but a
// clear step BELOW Elite ("Nhím Tinh Hoa"). Master is the MIDDLE rung.
//   Chill  = one direct step, picture almost always tells the answer.
//   Master = 1-2 steps: near-miss distractors, "read this then choose", a light
//            twist, some picture hints. Still comfortable for a strong Grade-2 kid.
//   Elite  = a big jump above Master (see elite-questions.js).
// We make Master harder by REASONING, not by rare words. Everything stays inside
// Grade-2 vocabulary. No Grade 4-5 content.
// IMPORTANT: no item, distractor set, or "trick" here is reused in the Elite bank.
// Keyed by topic id. Same question format as the regular topics.
// s:true = Scholar question (2 marks in tests). Correct answer is written first
// (a:0) for authoring convenience; options are shuffled when shown.
window.APP_DATA.hard = {
  topics: {

    "words": [
      { q: "Tom is NOT tall.\nSo Tom is ________.", o: ["short", "big", "long", "old"], a: 0 },
      { q: "Which word means ALMOST the same as 'glad'?", img: "happy", o: ["cheerful", "grumpy", "sleepy", "hungry"], a: 0 },
      { q: "The turtle is slow. The rabbit is the opposite.\nThe rabbit is ________.", img: "rabbit", o: ["quick", "slow", "tall", "quiet"], a: 0 },
      { q: "My cup is NOT full.\nSo my cup is ________.", img: "cup", o: ["empty", "clean", "open", "heavy"], a: 0 },
      { q: "Which word means almost the same as 'tiny'?", img: "mouse", o: ["little", "large", "tall", "wide"], a: 0 },
      { q: "The film did NOT begin. It did the opposite — it ________.", img: "movie", o: ["ended", "started", "opened", "waited"], a: 0, s: true },
      { q: "Only ONE spelling is correct. Which one?", o: ["beautiful", "beutiful", "beautifull", "beautful"], a: 0 },
      { q: "Only ONE spelling is correct. Which one?", o: ["because", "becouse", "becuase", "beacause"], a: 0 },
      { q: "Only ONE spelling is correct. Which one?", o: ["friend", "freind", "frend", "firend"], a: 0, s: true },
      { q: "Three of these mean 'nice'. Which word does NOT?", o: ["rude", "kind", "sweet", "lovely"], a: 0 },
      { q: "You go here to borrow a book, not to buy bread.\nThis place is a ________.", img: "books", o: ["library", "bakery", "market", "garden"], a: 0 },
      { q: "This person flies a plane, not drives a bus.\nThis person is a ________.", img: "plane", o: ["pilot", "driver", "sailor", "farmer"], a: 0 },
      { q: "Which word means 'a person who bakes bread'?", img: "bread", o: ["baker", "banker", "barber", "builder"], a: 0 },
      { q: "The room was NOT quiet at all.\nIt was very ________.", o: ["noisy", "calm", "empty", "still"], a: 0 },
      { q: "Grandpa is very, very old.\nAnother word for very old is ________.", img: "old-man", o: ["ancient", "young", "new", "little"], a: 0, s: true },
      { q: "We ________ with our eyes and ________ with our ears.", img: "eyes", o: ["see - hear", "hear - see", "smell - taste", "taste - smell"], a: 0 },
      { q: "The dog ran away because it was ________ of the loud noise.", img: "dog", o: ["afraid", "brave", "happy", "proud"], a: 0 },
      { q: "The plate is NOT dirty.\nSo the plate is ________.", img: "plate", o: ["clean", "wet", "full", "heavy"], a: 0, s: true }
    ],

    "picture-words": [
      { q: "Only ONE spelling matches the picture. Which?", img: "penguin", o: ["penguin", "pengiun", "penguen", "pinguin"], a: 0, s: true },
      { q: "Which is the RIGHT spelling for this picture?", img: "kangaroo", o: ["kangaroo", "kangaroe", "kanggaroo", "kangaru"], a: 0 },
      { q: "Three are misspelled. Which spelling is correct?", img: "umbrella", o: ["umbrella", "umberella", "umbrela", "umbrellla"], a: 0 },
      { q: "Pick the correctly spelled word for this picture.", img: "banana", o: ["banana", "bannana", "banan", "bananna"], a: 0 },
      { q: "Which spelling is correct for what you ride?", img: "bicycle", o: ["bicycle", "bycicle", "bicycel", "bysicle"], a: 0 },
      { q: "Only one is spelled right. Which matches the picture?", img: "giraffe", o: ["giraffe", "girafe", "giraff", "jiraffe"], a: 0 },
      { q: "This bird's name is spelled how?", img: "peacock", o: ["peacock", "peecock", "peakock", "picock"], a: 0 },
      { q: "Which spelling is correct for this fruit?", img: "strawberry", o: ["strawberry", "strawbery", "strawberrie", "stroberry"], a: 0, s: true },
      { q: "Careful — the wrong words look almost right. Which matches the picture?", img: "mouse", o: ["mouse", "moose", "mouth", "mole"], a: 0 },
      { q: "Which is the correct spelling for this fruit?", img: "orange", o: ["orange", "ornge", "orang", "oringe"], a: 0 },
      { q: "Pick the right spelling for this food.", img: "sandwich", o: ["sandwich", "sandwitch", "sandwish", "sanwich"], a: 0 },
      { q: "Which spelling matches the picture exactly?", img: "toothbrush", o: ["toothbrush", "toothbruch", "tothbrush", "teethbrush"], a: 0 },
      { q: "Only one is spelled correctly. Which?", img: "grapes", o: ["grapes", "graps", "greaps", "gripes"], a: 0 },
      { q: "Which spelling is right for what you see in the sky?", img: "rainbow", o: ["rainbow", "ranebow", "rainbo", "reinbow"], a: 0 },
      { q: "Three spellings are wrong. Which one is right?", img: "elephant", o: ["elephant", "elefant", "elephent", "eliphant"], a: 0, s: true },
      { q: "Which spelling matches this slow animal?", img: "turtle", o: ["turtle", "tirtle", "turtel", "tuttle"], a: 0 }
    ],

    "jumbled": [
      { q: "Unscramble the letters to find a big animal:\nT - N - A - E - L - E - P - H", img: "elephant", o: ["elephant", "elephent", "eelphant", "elepanth"], a: 0 },
      { q: "Unscramble the letters:\nB - R - E - L - L - A - U - M", img: "umbrella", o: ["umbrella", "umberall", "umbrell", "rumbella"], a: 0 },
      { q: "Unscramble to find a person at school:\nT - E - A - C - H - E - R", img: "teacher", o: ["teacher", "teecher", "taecher", "techaer"], a: 0, s: true },
      { q: "Unscramble the letters:\nB - U - T - T - E - R - F - L - Y", img: "butterfly", o: ["butterfly", "butterfyl", "buterfly", "butterlfy"], a: 0 },
      { q: "Unscramble the letters:\nS - C - H - O - O - L", img: "school", o: ["school", "shool", "scholo", "sochol"], a: 0 },
      { q: "Unscramble to find a fruit:\nO - R - A - N - G - E", img: "orange", o: ["orange", "ognare", "rangeo", "orenga"], a: 0 },
      { q: "Unscramble the letters:\nS - A - N - D - W - I - C - H", img: "sandwich", o: ["sandwich", "sandwish", "wichsand", "sandchiw"], a: 0 },
      { q: "Unscramble to find an animal:\nT - I - G - E - R", img: "tiger", o: ["tiger", "tigre", "tegir", "giter"], a: 0 },
      { q: "Unscramble the letters:\nP - E - N - C - I - L", img: "pencil", o: ["pencil", "pincel", "clipen", "pecnil"], a: 0 },
      { q: "Unscramble to find a bird:\nP - E - A - C - O - C - K", img: "peacock", o: ["peacock", "cockpea", "peackoc", "pockace"], a: 0, s: true },
      { q: "Unscramble to find an animal:\nR - A - B - B - I - T", img: "rabbit", o: ["rabbit", "babbit", "ribbat", "tabbir"], a: 0 },
      { q: "Unscramble to find a flower:\nF - L - O - W - E - R", img: "rose", o: ["flower", "wolfer", "flowre", "folwer"], a: 0, s: true },
      { q: "Unscramble the letters:\nW - A - T - E - R", img: "water", o: ["water", "wrate", "tawer", "warte"], a: 0 },
      { q: "Unscramble to find an animal:\nM - O - N - K - E - Y", img: "monkey", o: ["monkey", "monkye", "keymon", "mokeny"], a: 0 },
      { q: "Unscramble the letters:\nR - A - I - N - B - O - W", img: "rainbow", o: ["rainbow", "brainow", "rainobw", "bowrain"], a: 0 },
      { q: "Unscramble to find a bird:\nP - E - N - G - U - I - N", img: "penguin", o: ["penguin", "pengiun", "guinnep", "nipguen"], a: 0 }
    ],

    "gender": [
      { q: "A king's wife is called the ________.", img: "crown", o: ["queen", "princess", "lady", "aunt"], a: 0, s: true },
      { q: "'Woman' is female. Which word below is the MALE match?", img: "man", o: ["man", "girl", "aunt", "sister"], a: 0 },
      { q: "A father horse is a stallion. What is the MOTHER horse called?", img: "horse", o: ["mare", "foal", "calf", "cow"], a: 0, s: true },
      { q: "Your father's sister is your aunt. Your father's BROTHER is your ________.", o: ["uncle", "cousin", "nephew", "grandfather"], a: 0 },
      { q: "A male lion is just 'lion'. What do we call the FEMALE lion?", img: "lion", o: ["lioness", "cub", "kitten", "cat"], a: 0 },
      { q: "The word 'tigress' tells us the tiger is ________.", img: "tiger", o: ["female", "male", "young", "old"], a: 0 },
      { q: "A queen rules the land. The MALE ruler is the ________.", img: "prince", o: ["king", "prince", "lord", "boy"], a: 0 },
      { q: "A hen is a female chicken. The MALE chicken is a ________.", img: "rooster", o: ["rooster", "duck", "chick", "goose"], a: 0, s: true },
      { q: "A cow is female. Which word is the MALE match?", img: "cow", o: ["bull", "calf", "horse", "hen"], a: 0, s: true },
      { q: "A man who acts is an actor. A woman who acts is an ________.", o: ["actress", "actor", "singer", "dancer"], a: 0 },
      { q: "Which pair is MALE — FEMALE, in the right order?", o: ["son - daughter", "daughter - son", "aunt - uncle", "mother - father"], a: 0 },
      { q: "Which pair is FEMALE — MALE, in the right order?", o: ["sister - brother", "brother - sister", "uncle - aunt", "father - mother"], a: 0 },
      { q: "Grandmother is female. Which word is the MALE match?", img: "old-man", o: ["grandfather", "father", "uncle", "brother"], a: 0 },
      { q: "A man who serves food is a waiter. A woman who serves food is a ________.", o: ["waitress", "cook", "nurse", "server"], a: 0 },
      { q: "A princess is female. Which word is the MALE match?", img: "prince", o: ["prince", "king", "boy", "son"], a: 0, s: true },
      { q: "Your uncle's son is your cousin. Your aunt's son is also your ________.", o: ["cousin", "nephew", "brother", "uncle"], a: 0 }
    ],

    "one-many": [
      { q: "There is one mouse today, but yesterday there were three ________.", img: "mouse", o: ["mice", "mouses", "mices", "meese"], a: 0 },
      { q: "One goose swims here. Five ________ swim there.", img: "goose", o: ["geese", "gooses", "geeses", "goose"], a: 0 },
      { q: "Which sentence is correct?", o: ["Two children play.", "Two childs play.", "Two childrens play.", "Two childes play."], a: 0 },
      { q: "A baby has few teeth. A grown-up has many ________.", img: "tooth", o: ["teeth", "tooths", "teeths", "toothes"], a: 0 },
      { q: "One foot, two ________. Careful — this one is not regular!", img: "foot", o: ["feet", "foots", "feets", "footes"], a: 0 },
      { q: "One sheep, ten ________. (The word does NOT change!)", img: "sheep", o: ["sheep", "sheeps", "shoop", "sheepes"], a: 0 },
      { q: "The tree drops one leaf, then all its ________ fall.", img: "leaf", o: ["leaves", "leafs", "leafes", "leves"], a: 0, s: true },
      { q: "One knife, many ________.", img: "knife", o: ["knives", "knifes", "knifs", "knive"], a: 0, s: true },
      { q: "Which sentence is correct?", o: ["Many men work here.", "Many mans work here.", "Many mens work here.", "Many manes work here."], a: 0 },
      { q: "One woman, many ________.", img: "woman", o: ["women", "womans", "womens", "womanes"], a: 0, s: true },
      { q: "One fish, a whole school of ________. (No change here!)", img: "fish", o: ["fish", "fishs", "feesh", "fishies"], a: 0 },
      { q: "One baby, many ________.", img: "baby", o: ["babies", "babys", "babyes", "babbies"], a: 0 },
      { q: "One box, many ________.", img: "box", o: ["boxes", "boxs", "boxies", "boxen"], a: 0 },
      { q: "One city, many ________.", img: "city", o: ["cities", "citys", "cityes", "citties"], a: 0 },
      { q: "One potato, many ________.", img: "potato", o: ["potatoes", "potatos", "potatoies", "potates"], a: 0, s: true },
      { q: "Which sentence is correct?", o: ["Three ladies sang.", "Three ladys sang.", "Three ladyes sang.", "Three ladis sang."], a: 0 },
      { q: "One story tonight, two ________ tomorrow.", img: "book", o: ["stories", "storys", "storyes", "storis"], a: 0, s: true }
    ],

    "pairs-odd": [
      { q: "Three of these rhyme. Which word does NOT?", o: ["dog", "cat", "hat", "bat"], a: 0 },
      { q: "Which word does NOT rhyme with the others?", o: ["fish", "cake", "lake", "snake"], a: 0 },
      { q: "Which word does NOT rhyme with the others?", o: ["sun", "night", "light", "kite"], a: 0 },
      { q: "Which word does NOT rhyme with the others?", o: ["book", "star", "car", "far"], a: 0, s: true },
      { q: "Three of these are DOING words. Which one is NOT?", o: ["chair", "run", "jump", "swim"], a: 0 },
      { q: "Three are things you can DO. Which is a FEELING, not an action?", o: ["happy", "sing", "dance", "clap"], a: 0 },
      { q: "Three are actions. Which one is a THING (a naming word)?", o: ["table", "run", "jump", "swim"], a: 0, s: true },
      { q: "Three are MONTHS. Which one is a DAY of the week?", o: ["Monday", "January", "March", "July"], a: 0 },
      { q: "Three are pieces of furniture. Which one is NOT?", o: ["apple", "door", "window", "table"], a: 0 },
      { q: "Three words start with the SAME sound. Which starts differently?", o: ["ball", "king", "kite", "key"], a: 0, s: true },
      { q: "Which word starts with a different sound?", o: ["ship", "sun", "sock", "salt"], a: 0 },
      { q: "Three of these are fruit. Which one is a VEGETABLE?", o: ["carrot", "apple", "mango", "banana"], a: 0 },
      { q: "A glove goes on a hand. In the same way, a sock goes on a ________.", img: "socks", o: ["foot", "head", "ear", "eye"], a: 0 },
      { q: "A bird lives in a nest. In the same way, a bee lives in a ________.", img: "bee", o: ["hive", "web", "cave", "stable"], a: 0 },
      { q: "A teacher works in a school. In the same way, a doctor works in a ________.", img: "hospital", o: ["hospital", "office", "kitchen", "garage"], a: 0 },
      { q: "'Big' means the same as 'large'. Which other pair means the SAME (not opposite)?", o: ["quick - fast", "hot - cold", "up - down", "day - night"], a: 0, s: true }
    ],

    "animal-babies": [
      { q: "This baby hops in its mother's pouch. It is a ________.", img: "kangaroo", o: ["joey", "cub", "calf", "kid"], a: 0 },
      { q: "A baby frog looks like a little fish before it grows legs. It is called a ________.", img: "frog", o: ["tadpole", "cub", "puppy", "chick"], a: 0 },
      { q: "A baby bear and a baby lion share the SAME baby name. It is a ________.", img: "bear", o: ["cub", "kitten", "calf", "puppy"], a: 0 },
      { q: "A baby goat is a ________. (A baby sheep is a lamb — don't mix them up!)", o: ["kid", "lamb", "calf", "foal"], a: 0 },
      { q: "A baby horse is a ________. (Not a calf — that's a cow's baby!)", img: "horse", o: ["foal", "calf", "puppy", "kid"], a: 0 },
      { q: "A baby elephant and a baby cow share the same baby name. It is a ________.", img: "elephant", o: ["calf", "cub", "kid", "puppy"], a: 0, s: true },
      { q: "A baby owl is called an ________.", img: "owl", o: ["owlet", "owling", "chicklet", "owly"], a: 0, s: true },
      { q: "A baby goose is a ________. Careful — a baby duck has a different name!", img: "goose", o: ["gosling", "duckling", "chick", "cub"], a: 0, s: true },
      { q: "A baby rabbit is often called a ________.", img: "rabbit", o: ["bunny", "cub", "joey", "chick"], a: 0 },
      { q: "A baby deer is a ________. (It is NOT a foal — that's a horse.)", img: "deer", o: ["fawn", "foal", "kid", "calf"], a: 0, s: true },
      { q: "A baby lion shares its baby name with bears and tigers. It is a ________.", img: "lion", o: ["cub", "kitten", "puppy", "calf"], a: 0 },
      { q: "A baby sheep is a ________. (A baby goat is a kid — don't mix them up!)", img: "sheep", o: ["lamb", "kid", "calf", "cub"], a: 0 },
      { q: "A baby pig is called a ________.", img: "pig", o: ["piglet", "puppy", "calf", "cub"], a: 0 },
      { q: "A baby dog is a ________. A baby cat is a kitten — pick the DOG's baby.", img: "dog", o: ["puppy", "kitten", "cub", "chick"], a: 0 },
      { q: "A baby duck is a ________. A baby goose is a gosling — pick the DUCK's baby.", img: "duck", o: ["duckling", "gosling", "chick", "cub"], a: 0 },
      { q: "A baby cow is a ________. So is a baby elephant — they share this name.", img: "cow", o: ["calf", "kid", "foal", "lamb"], a: 0 }
    ],

    "animals": [
      { q: "A cat says 'meow' and a dog says 'woof'. What sound does a bee make?", img: "bee", o: ["buzz", "bark", "moo", "neigh"], a: 0 },
      { q: "A cow moos and a sheep bleats. What sound does a horse make?", img: "horse", o: ["neigh", "cluck", "mew", "bleat"], a: 0, s: true },
      { q: "When the moon is out, wolves and dogs ________.", img: "moon", o: ["howl", "cluck", "quack", "chirp"], a: 0 },
      { q: "A lion roars, but a tiny scared mouse only ________.", img: "mouse", o: ["squeaks", "roars", "moos", "buzzes"], a: 0 },
      { q: "A snake slithers, but a rabbit moves in a different way — it ________.", img: "rabbit", o: ["hops", "slithers", "swims", "flies"], a: 0 },
      { q: "A rabbit hops, but a snake with no legs must ________.", o: ["slither", "hop", "run", "fly"], a: 0 },
      { q: "A duck waddles slowly, but a fast horse can ________.", img: "duck", o: ["gallop", "waddle", "slither", "crawl"], a: 0 },
      { q: "A horse gallops, but a duck with short legs can only ________.", o: ["waddle", "gallop", "slither", "swim"], a: 0, s: true },
      { q: "A bird lives in a nest. Where does a dog live?", img: "dog", o: ["kennel", "nest", "hive", "web"], a: 0, s: true },
      { q: "A dog lives in a kennel. Where does a horse live?", img: "horse", o: ["stable", "kennel", "nest", "hive"], a: 0, s: true },
      { q: "A spider lives in a web. Where do bees live?", img: "bee", o: ["hive", "nest", "den", "web"], a: 0, s: true },
      { q: "Birds live in the air and rabbits live on land. Where do fish live?", img: "fish", o: ["water", "trees", "sand", "grass"], a: 0 },
      { q: "A hard-working animal that makes honey. 'As busy as a ________.'", img: "honey", o: ["bee", "bear", "bat", "bird"], a: 0 },
      { q: "This animal carries its house and moves very slowly. 'As slow as a ________.'", img: "snail", o: ["snail", "snake", "swan", "spider"], a: 0 },
      { q: "This tiny animal makes almost no sound. 'As quiet as a ________.'", img: "mouse", o: ["mouse", "lion", "duck", "dog"], a: 0 },
      { q: "The king of the jungle is not afraid. 'As brave as a ________.'", img: "lion", o: ["lion", "lamb", "hen", "worm"], a: 0 },
      { q: "We make warm sweaters from the wool of this animal. Which one?", img: "sheep", o: ["sheep", "hen", "cow", "bee"], a: 0, s: true },
      { q: "This animal is BOTH the 'king of the jungle' AND the one in 'as brave as a ___'. Which?", img: "lion", o: ["lion", "tiger", "elephant", "bear"], a: 0, s: true }
    ],

    "nouns-verbs": [
      { q: "A NOUN names a person, animal, place or thing.\nFind the noun: 'The little girl sings sweetly.'", o: ["girl", "little", "sings", "sweetly"], a: 0 },
      { q: "A VERB is a doing word.\nFind the verb: 'The happy dog barks at night.'", o: ["barks", "dog", "night", "happy"], a: 0 },
      { q: "Find the noun (naming word):\n'Colourful birds fly high.'", img: "bird", o: ["birds", "fly", "high", "colourful"], a: 0 },
      { q: "How many nouns are in this sentence?\n'The cat and the dog play.' (Count the naming words!)", o: ["two", "one", "three", "four"], a: 0, s: true },
      { q: "Find the verb (doing word):\n'Mother cooks tasty rice.'", img: "rice", o: ["cooks", "mother", "rice", "tasty"], a: 0 },
      { q: "Three of these are naming words (nouns). Which one is a DOING word?", o: ["dance", "chair", "apple", "book"], a: 0 },
      { q: "Three of these are doing words (verbs). Which one is a NAMING word?", o: ["hospital", "run", "jump", "sing"], a: 0 },
      { q: "In 'I water the plants', the word 'water' tells what I DO.\nSo here 'water' is a ________.", img: "plant", o: ["verb", "noun", "colour", "number"], a: 0, s: true },
      { q: "In 'I drink water', the word 'water' is a THING.\nSo here 'water' is a ________.", img: "water", o: ["noun", "verb", "colour", "number"], a: 0, s: true },
      { q: "Find the verb:\n'The excited children swim in the pool.'", img: "swimmer", o: ["swim", "children", "pool", "excited"], a: 0 },
      { q: "Find the noun:\n'My kind teacher reads a story.'", img: "teacher", o: ["teacher", "my", "reads", "kind"], a: 0 },
      { q: "How many verbs are in this sentence?\n'The boy runs and jumps.' (Count the doing words!)", o: ["two", "one", "three", "four"], a: 0, s: true },
      { q: "Three of these are naming words. Which one is a DOING word?", o: ["write", "window", "winter", "wagon"], a: 0 },
      { q: "Find the noun:\n'The big bell rings loudly.'", img: "bell", o: ["bell", "rings", "loudly", "big"], a: 0 },
      { q: "Three of these describe things or are colours. Which is a NAMING word (noun)?", o: ["butterfly", "beautiful", "bright", "blue"], a: 0 },
      { q: "Find the verb:\n'Grandma makes a warm sweater.'", img: "wool", o: ["makes", "grandma", "warm", "sweater"], a: 0 },
      { q: "Three of these are doing words in the kitchen. Which is NOT a verb?", o: ["kitchen", "cook", "bake", "fry"], a: 0 }
    ],

    "articles": [
      { q: "We use 'an' before a vowel sound (a, e, i, o, u).\nI have ________ apple.", img: "apple", o: ["an", "a", "the", "no article"], a: 0, s: true },
      { q: "'Banana' does NOT start with a vowel sound.\nShe eats ________ banana.", img: "banana", o: ["a", "an", "the", "no article"], a: 0, s: true },
      { q: "There is only ONE sun, so we say 'the'.\n________ sun rises in the east.", img: "sun", o: ["The", "A", "An", "No article"], a: 0 },
      { q: "Fill in the blank:\nHe peeled ________ orange for me.", img: "orange", o: ["an", "a", "the", "no article"], a: 0, s: true },
      { q: "Fill in the blank:\nWe saw ________ elephant at the zoo.", img: "elephant", o: ["an", "a", "the", "no article"], a: 0 },
      { q: "Fill in the blank:\nMy father drives ________ car.", img: "car", o: ["a", "an", "the", "no article"], a: 0 },
      { q: "Fill in the blank:\nAn ________ sits in the tree. (Choose the word that fits 'an'.)", img: "owl", o: ["owl", "bird", "cat", "dog"], a: 0 },
      { q: "Fill in BOTH blanks:\nShe ate ________ orange and ________ banana.", o: ["an - a", "a - an", "an - an", "a - a"], a: 0 },
      { q: "Both words start with a vowel sound. Fill in BOTH:\nThere is ________ egg and ________ apple.", img: "egg", o: ["an - an", "a - an", "the - an", "a - a"], a: 0, s: true },
      { q: "There is only one moon, so we use ________.\n________ moon shines at night.", img: "moon", o: ["the", "a", "an", "no article"], a: 0 },
      { q: "Fill in the blank:\nI have ________ umbrella.", img: "umbrella", o: ["an", "a", "the", "no article"], a: 0 },
      { q: "Fill in the blank:\nHe reads ________ book every night.", img: "book", o: ["a", "an", "the", "no article"], a: 0 },
      { q: "Only ONE sentence is correct. Which?", o: ["I have an apple.", "I have a apple.", "I have an banana.", "I have a orange."], a: 0 },
      { q: "Only ONE sentence is correct. Read each one carefully!", o: ["She has an egg.", "She has a egg.", "She has an dog.", "She has a apple."], a: 0, s: true },
      { q: "Fill in the blank:\nI eat ________ egg every morning.", img: "egg", o: ["an", "a", "the", "no article"], a: 0 },
      { q: "'Big' starts with a sound that is NOT a vowel.\nHa Noi is ________ big city.", img: "city", o: ["a", "an", "the", "no article"], a: 0 }
    ]
  },

  passages: [
    {
      title: "The Clever Crow",
      text: "One hot day, a thirsty crow flew over a village looking for water. At last, he saw a tall jug in a garden. There was a little water at the bottom, but the crow's beak could not reach it.\nThe clever crow did not give up. He picked up small stones one by one and dropped them into the jug. Slowly, the water rose higher and higher. At last, the crow drank the cool water and flew away happily.",
      questions: [
        { q: "The story says it was 'a hot day' and the crow was thirsty. Why does the hot day matter?", o: ["Hot weather makes you thirsty", "The crow liked hot days", "The water was hot", "The crow was cold"], a: 0 },
        { q: "Dropping stones made the water rise. WHY did the water go up?", o: ["The stones took up space at the bottom", "The stones were wet", "The crow blew on it", "The jug shrank"], a: 0 },
        { q: "'The crow did not give up.' What does 'give up' mean here?", o: ["Stop trying", "Fall asleep", "Fly home", "Feel happy"], a: 0 },
        { q: "Why did the crow drop the stones ONE BY ONE instead of all at once?", o: ["He could only carry one at a time in his beak", "He was counting them", "He wanted to play", "The jug was small"], a: 0 },
        { q: "How do we know the crow felt happy at the end?", o: ["He drank and flew away happily", "He sang a song", "He built a nest", "He called his friends"], a: 0 },
        { q: "What lesson does this story teach?", o: ["Thinking hard can solve a problem", "Never drink water", "Crows can fly", "Gardens have jugs"], a: 0, s: true }
      ]
    },
    {
      title: "Mia's Garden Surprise",
      text: "Mia planted a tiny seed in spring and watered it every morning before school. Weeks passed, but nothing grew, and Mia felt sad.\n\"Be patient,\" said her grandfather. \"Good things take time.\"\nOne sunny morning in summer, Mia ran to the garden and shouted with joy. A tall sunflower stood there, taller than Mia herself! Bees buzzed around its bright yellow petals. Mia smiled and said, \"Grandpa was right. Waiting was worth it!\"",
      questions: [
        { q: "Mia planted in spring and the flower bloomed in summer. About how long did she wait?", o: ["A few weeks", "One day", "One hour", "Ten years"], a: 0 },
        { q: "Why did Mia feel sad in the middle of the story?", o: ["Nothing was growing yet", "She lost her seed", "It was raining", "School was closed"], a: 0 },
        { q: "Grandpa said, 'Good things take time.' What did he mean?", o: ["You must wait for good things", "Clocks are important", "Time is short", "Plants are slow to eat"], a: 0, s: true },
        { q: "How do we know the sunflower was very big?", o: ["It was taller than Mia herself", "It had one petal", "It was in a pot", "It was yellow"], a: 0 },
        { q: "Why were the bees buzzing around the flower?", o: ["Flowers give them food", "They were scared", "They were sleeping", "Mia called them"], a: 0 },
        { q: "At the end Mia said waiting 'was worth it.' How did she feel?", o: ["Glad she waited", "Sorry she planted it", "Angry at Grandpa", "Bored"], a: 0 }
      ]
    },
    {
      title: "The Lighthouse Keeper's Cat",
      text: "Old Tom kept the lighthouse on a rocky island. His only friend was a white cat named Pearl. Every evening, Pearl climbed the winding stairs with Tom to light the great lamp that warned ships away from the rocks.\nOne stormy night, Tom fell ill and could not climb the stairs. Pearl meowed loudly and pulled his sleeve, but Tom was too weak. So Pearl raced up the one hundred steps alone and knocked the matchbox off the shelf, down to where Tom lay. Tom smiled, struck a match, and together they kept the light burning all night. Every ship sailed home safely.",
      questions: [
        { q: "Why was the lighthouse lamp so important to the ships?", o: ["It warned them away from the rocks", "It cooked their dinner", "It sold them fish", "It played music"], a: 0 },
        { q: "Pearl 'pulled his sleeve' and meowed loudly. What was Pearl trying to do?", o: ["Get Tom to come and help", "Play a game", "Go outside", "Find food"], a: 0, s: true },
        { q: "Why did PEARL have to fetch the matchbox instead of Tom?", o: ["Tom was too weak to climb", "Tom was busy cooking", "Tom was afraid of the dark", "Tom was fishing"], a: 0 },
        { q: "Racing up one hundred steps alone shows that Pearl was ________.", o: ["brave and helpful", "lazy", "hungry", "sleepy"], a: 0 },
        { q: "Because the light stayed on all night, the ships ________.", o: ["sailed home safely", "sank on the rocks", "stayed at sea", "turned around"], a: 0 },
        { q: "Which word best describes Tom and Pearl TOGETHER in this story?", o: ["a good team", "strangers", "enemies", "sailors"], a: 0 }
      ]
    }
  ]
};
