// Elite mode ("Nhím Tinh Hoa") — the HARDEST tier, the top of the app.
// NOTE: this content is the former "Master" bank, PROMOTED to be the top rung so
// the overall difficulty range now spans only Chill → (new middle Master) → this.
//   Chill  = 2-3 step reasoning, everyday vocabulary (the EASY tier).
//   Master = the NEW middle rung, sitting between Chill and this (see hard-questions.js).
//   Elite  = THIS bank: longer stems, richer vocabulary (enormous, furious, ancient,
//            transparent, stubborn, generous, exhausted, curious...), 3-step reasoning
//            chains, two- and three-blank fills, negation + comparison combined,
//            "all four plausible" grammar picks, decoy odd-one-out, multi-layer
//            analogies, counting in longer sentences, past tense & comparatives.
//            Words a bright 8-9 year old can learn — challenging but not obscure.
// IMPORTANT: NO item, distractor set, or "trick" here is reused from chill-bank.js
// or the Master bank.
// Mostly NO picture hints — the child reasons from language. Rare img only.
// Keyed by topic id. Same question format as the regular topics.
// s:true = Scholar question (2 marks in tests). Correct answer is written first
// (a:0) for authoring convenience; options are shuffled when shown.
window.APP_DATA.elite = {
  topics: {

    "words": [
      { q: "A synonym is a word that means the SAME.\n'Enormous' and 'gigantic' both mean very big.\nSo the OPPOSITE of both is ________.", o: ["tiny", "heavy", "wide", "loud"], a: 0, s: true },
      { q: "Read all three steps.\nA whisper is very quiet. A shout is very loud.\nSo if the room got LESS noisy, people began to ________.", o: ["whisper", "shout", "run", "sing"], a: 0, s: true },
      { q: "'Furious' means very angry. 'Delighted' means very happy.\nHung dropped his ice cream, so he most likely felt ________.", o: ["furious", "delighted", "curious", "brave"], a: 0 },
      { q: "The prefix 'in-' can mean 'not'.\nSo 'invisible' means something you ________.", o: ["cannot see", "can hear", "can hold", "can taste"], a: 0, s: true },
      { q: "Only ONE spelling is correct.", o: ["beautiful", "beutiful", "beautifull", "beatiful"], a: 0, s: true },
      { q: "Match each word to its BEST meaning, in order.\n'Ancient' and 'exhausted' mean ________ and ________.", o: ["very old - very tired", "very new - very tired", "very old - very fast", "very tired - very old"], a: 0, s: true },
      { q: "'Gentle' is the opposite of 'rough'.\nSo a person who pats a kitten softly is being ________.", o: ["gentle", "rough", "stubborn", "greedy"], a: 0 },
      { q: "Read carefully.\nMai is NOT the tallest and NOT the shortest of three girls.\nSo Mai must be the ________ one.", o: ["middle", "tallest", "shortest", "oldest"], a: 0, s: true },
      { q: "A 'generous' person likes to share and give.\nWho below is being generous?", o: ["Nga gave half her lunch to a friend", "Nga hid all her sweets", "Nga took two toys", "Nga ate everything"], a: 0 },
      { q: "'Transparent' means you can see right through it.\nWhich thing below is transparent?", o: ["a clean glass window", "a brick wall", "a wooden door", "a thick book"], a: 0, s: true },
      { q: "Only ONE sentence is correct. All four look almost right.", o: ["This box is heavier than that one.", "This box is more heavy than that one.", "This box is heaviest than that one.", "This box is more heavier than that one."], a: 0, s: true },
      { q: "'Brave' means not afraid. Its opposite is ________.", o: ["scared", "kind", "strong", "quick"], a: 0 },
      { q: "A 'stubborn' person will not change their mind.\nWhich sentence shows someone stubborn?", o: ["Tom refused to try any new food.", "Tom tried every new food.", "Tom shared his food.", "Tom cooked new food."], a: 0 },
      { q: "Fill BOTH blanks with the right past-tense words.\nYesterday I ________ to school and ________ my lunch.", o: ["went - ate", "go - eat", "went - eat", "go - ate"], a: 0, s: true },
      { q: "The idiom 'a piece of cake' means something is very ________.", o: ["easy", "sweet", "hard", "small"], a: 0 },
      { q: "'Curious' means wanting to learn and find out.\nWhich child is being curious?", o: ["Lan kept asking why the sky is blue", "Lan ignored the whole lesson", "Lan fell asleep", "Lan copied a friend"], a: 0, s: true },
      { q: "Only ONE spelling is correct.", o: ["favourite", "favorit", "faverite", "favourit"], a: 0 },
      { q: "'Damp' means a little wet. 'Soaked' means very wet.\nAfter a heavy rainstorm, Nam's shirt was most likely ________.", o: ["soaked", "damp", "dry", "warm"], a: 0 }
    ],

    "picture-words": [
      { q: "Every choice looks close. Which spelling of this insect is correct?", img: "cricket", o: ["cricket", "crickett", "criket", "crikket"], a: 0, s: true },
      { q: "Which spelling is right? (The 'ph' makes an 'f' sound.)", img: "elephant", o: ["elephant", "elefant", "eliphant", "ellephant"], a: 0 },
      { q: "Pick the correct spelling. (Watch the double letter.)", img: "balloon", o: ["balloon", "baloon", "ballon", "balloun"], a: 0, s: true },
      { q: "Which is spelled correctly for this bird?", img: "peacock", o: ["peacock", "peekock", "peacok", "peocock"], a: 0 },
      { q: "Three are wrong by one letter. Which is right?", img: "microphone", o: ["microphone", "micraphone", "microfone", "mikrophone"], a: 0, s: true },
      { q: "Which spelling matches this musical thing?", img: "stethoscope", o: ["stethoscope", "stethascope", "stethoscop", "stethescope"], a: 0, s: true },
      { q: "Pick the correct spelling. (The silent letters are tricky.)", img: "knife", o: ["knife", "nife", "knifee", "knive"], a: 0 },
      { q: "Which spelling is right for this animal?", img: "kangaroo", o: ["kangaroo", "kangarooe", "kangeroo", "kangaru"], a: 0, s: true },
      { q: "Only one is correct. (Count the letters carefully.)", img: "strawberry", o: ["strawberry", "strawbery", "strawberrie", "strawberi"], a: 0 },
      { q: "Which spelling matches this shape you draw with?", img: "palette", o: ["palette", "pallete", "palett", "pallett"], a: 0, s: true },
      { q: "Pick the correct spelling for this yummy food.", img: "sandwich", o: ["sandwich", "sanwich", "sandwhich", "sandwidge"], a: 0 },
      { q: "Which is correct? (This place shows movies and plays.)", img: "theater", o: ["theater", "theeter", "theatr", "theeater"], a: 0 },
      { q: "Which spelling of this tall animal is right?", img: "giraffe", o: ["giraffe", "girafe", "jiraffe", "giraff"], a: 0, s: true },
      { q: "Pick the correct spelling for this vehicle.", img: "bicycle", o: ["bicycle", "bycicle", "bicicle", "bicyckle"], a: 0 },
      { q: "Which spelling is right for this cold treat?", img: "ice-cream", o: ["ice cream", "ise cream", "ice creem", "icecreem"], a: 0 },
      { q: "Only one word is fully correct.", img: "butterfly", o: ["butterfly", "buterfly", "butterflie", "buttrefly"], a: 0, s: true }
    ],

    "jumbled": [
      { q: "Unscramble to find a huge grey animal.\nWARNING: watch the double letters.\nP - H - A - N - T - E - L - E", o: ["elephant", "elephent", "elphante", "elephnat"], a: 0, s: true },
      { q: "Unscramble. These letters also spell 'listen' and 'tinsel' — pick the word meaning very quiet.\nS - L - I - E - N - T", o: ["silent", "listen", "tinsel", "enlist"], a: 0, s: true },
      { q: "Unscramble to find the season after summer.\nA - U - M - T - U - N", o: ["autumn", "atumn", "autum", "autunm"], a: 0 },
      { q: "Unscramble. One jumble spells 'danger' — do not be tricked. Pick the place where flowers and plants grow.\nG - A - R - D - E - N", o: ["garden", "danger", "gander", "ranged"], a: 0, s: true },
      { q: "Unscramble to find a word meaning 'very big'.\nWARNING: read every letter.\nE - N - O - R - M - O - U - S", o: ["enormous", "enormuos", "enromous", "enomrous"], a: 0, s: true },
      { q: "Unscramble to find a bright bird with a fancy tail.\nP - E - A - C - O - C - K", o: ["peacock", "peackoc", "poacock", "pecacok"], a: 0 },
      { q: "Unscramble. These letters also spell 'stared' — pick the word for the beginning.\nS - T - A - R - T - E - D", o: ["started", "stared", "traders", "restart"], a: 0, s: true },
      { q: "Unscramble to find a word meaning 'not afraid'.\nB - R - A - V - E", o: ["brave", "braev", "rbave", "vabre"], a: 0 },
      { q: "Unscramble to find a see-through window sound.\nWARNING: one jumble spells 'below'.\nE - L - B - O - W", o: ["elbow", "below", "bowel", "bewol"], a: 0 },
      { q: "Unscramble to find a word meaning 'very old'.\nA - N - C - I - E - N - T", o: ["ancient", "anceint", "antcien", "ancinet"], a: 0, s: true },
      { q: "Unscramble to find the animal with a long neck.\nG - I - R - A - F - F - E", o: ["giraffe", "girraffe", "gireffa", "giraffee"], a: 0 },
      { q: "Unscramble. These letters also spell 'reader' — pick the word for someone in a race.\nR - E - A - D - E - R", o: ["reader", "reread", "dearer", "reared"], a: 0 },
      { q: "Unscramble to find a word meaning 'very tired'.\nT - I - R - E - D", o: ["tired", "tride", "rited", "diret"], a: 0, s: true },
      { q: "Unscramble to find a word that means 'find out about'.\nWARNING: watch the 'ov' in the middle.\nD - I - S - C - O - V - E - R", o: ["discover", "discovar", "dicsover", "discovre"], a: 0, s: true },
      { q: "Unscramble to find a word meaning 'like to share'.\nG - E - N - E - R - O - U - S", o: ["generous", "genrous", "generuos", "generois"], a: 0 },
      { q: "Unscramble to find a word meaning 'wanting to learn'.\nC - U - R - I - O - U - S", o: ["curious", "curiuos", "cruious", "curous"], a: 0 }
    ],

    "gender": [
      { q: "'Actor' becomes 'actress' and 'waiter' becomes 'waitress'.\nUsing the SAME rule, 'tiger' becomes ________ for a female.", o: ["tigress", "tigeress", "tigerine", "tigra"], a: 0, s: true },
      { q: "Read three steps.\nA duke is a man. A duchess is a woman.\nSo which pair is MALE then FEMALE in order?", o: ["duke - duchess", "duchess - duke", "duke - duke", "duchess - duchess"], a: 0, s: true },
      { q: "Your mother's brother is your uncle.\nSo the WIFE of your uncle is your ________.", o: ["aunt", "niece", "cousin", "sister"], a: 0, s: true },
      { q: "Which group has ALL male words?", o: ["king, uncle, nephew", "king, aunt, nephew", "queen, uncle, nephew", "king, uncle, niece"], a: 0, s: true },
      { q: "A 'widow' is a woman whose husband has died.\nThe MALE word for a man whose wife has died is ________.", o: ["widower", "widowman", "widowor", "widowar"], a: 0 },
      { q: "Read carefully.\nA 'bull' is a male cow and a 'cow' is female.\nSo the sentence 'The bull fed HER baby' is wrong because a bull is ________.", o: ["male", "female", "a baby", "very old"], a: 0, s: true },
      { q: "'Prince' is to 'princess' as 'lord' is to ________.", o: ["lady", "lordess", "queen", "dame"], a: 0 },
      { q: "Which sentence uses the correct gender word?", o: ["The waitress brought her tray.", "The waitress brought his tray.", "The waiter is a woman.", "The queen is a boy."], a: 0, s: true },
      { q: "Read: Binh has two sisters and one brother.\nHow many GIRLS are there among Binh's brothers and sisters?", o: ["two", "one", "three", "four"], a: 0, s: true },
      { q: "'Grandson' names a boy. Break it: grand + son.\nSo the female word must be grand + ________.", o: ["daughter", "mother", "sister", "aunt"], a: 0 },
      { q: "Which pair is NOT a true male-female pair?", o: ["brother - cousin", "man - woman", "boy - girl", "father - mother"], a: 0, s: true },
      { q: "A 'hero' saves the day. The female word is ________.", o: ["heroine", "heress", "herette", "heroina"], a: 0 },
      { q: "Read: A 'gander' is a male goose and a 'goose' can be female.\nSo which is the FEMALE bird here?", img: "goose", o: ["goose", "gander", "gosling", "duck"], a: 0 },
      { q: "'Nephew' is a boy and 'niece' is a girl.\nYour brother has one son and one daughter.\nSo you have one nephew and one ________.", o: ["niece", "cousin", "aunt", "sister"], a: 0, s: true },
      { q: "Which group has one MALE, one FEMALE, and one word that fits BOTH?", o: ["king, queen, cousin", "king, queen, uncle", "boy, girl, brother", "man, woman, father"], a: 0 },
      { q: "A 'stallion' is a male horse and a 'mare' is female.\nSo 'The mare and HER foal' is correct because a mare is ________.", o: ["female", "male", "a baby", "very fast"], a: 0 }
    ],

    "one-many": [
      { q: "Some words change their middle to mean 'many'.\n'Man' becomes 'men' and 'foot' becomes 'feet'.\nUsing the SAME kind of change, 'goose' becomes ________.", o: ["geese", "gooses", "geeses", "goosen"], a: 0, s: true },
      { q: "Words ending in 'y' after a NOT-vowel change 'y' to 'ies'.\nSo 'one story' and 'one baby' become many ________ and many ________.", o: ["stories - babies", "storys - babys", "stories - babys", "storys - babies"], a: 0, s: true },
      { q: "Which sentence is CORRECT? All four look believable.", o: ["Three loaves are on the shelf.", "Three loafs are on the shelf.", "Three loafes are on the shelf.", "Three loave are on the shelf."], a: 0, s: true },
      { q: "Read: A shepherd had one sheep, then bought four more.\nHow many sheep does he have, and is 'sheep' still spelled the same?", o: ["Five sheep — yes", "Five sheeps — no", "Five sheepes — no", "Five ship — no"], a: 0, s: true },
      { q: "Words ending in 'ch', 'sh', 's' or 'x' add 'es'.\nSo 'one bench' and 'one dish' become many ________ and many ________.", o: ["benches - dishes", "benchs - dishs", "benches - dishs", "benchs - dishes"], a: 0, s: true },
      { q: "'Child' becomes 'children' — a special change.\nWhich other word ALSO does not just add 's'?", o: ["person", "table", "car", "hand"], a: 0 },
      { q: "Read: 'A wolf howled, then two more wolves joined in.'\nHow many wolves are howling in total?", o: ["three", "two", "one", "four"], a: 0, s: true },
      { q: "Which sentence is CORRECT?", o: ["The mice ate the cheese.", "The mouses ate the cheese.", "The mices ate the cheese.", "The mouse ate the cheeses."], a: 0 },
      { q: "'Leaf' becomes 'leaves' (f to ves).\nUsing the SAME rule, 'one thief' becomes many ________.", o: ["thieves", "thiefs", "thiefes", "thievies"], a: 0, s: true },
      { q: "Read: There were three geese, but one flew away.\nNow how many geese are left, and is the word right?", o: ["Two geese — yes", "Two gooses — no", "Two geeses — no", "Two goose — no"], a: 0 },
      { q: "Which word does NOT change its spelling from one to many?", o: ["deer", "book", "cat", "cup"], a: 0, s: true },
      { q: "'Tomato' becomes 'tomatoes' (add es).\nSo 'one hero' and 'one potato' become many ________ and many ________.", o: ["heroes - potatoes", "heros - potatos", "heroes - potatos", "heros - potatoes"], a: 0, s: true },
      { q: "Which sentence is CORRECT? Read each ending.", o: ["The women carried the boxes.", "The womans carried the boxs.", "The womens carried the boxes.", "The woman carried the boxs."], a: 0, s: true },
      { q: "'Half' becomes 'halves' (f to ves).\nWhich word below follows the SAME rule?", o: ["shelf → shelves", "roof → rooves", "chief → chieves", "belief → believes"], a: 0 },
      { q: "One tooth, two ________. One foot, two ________.\nFill BOTH blanks with the correct 'many' words.", img: "tooth", o: ["teeth - feet", "tooths - foots", "teeth - foots", "teeths - feet"], a: 0 },
      { q: "Which sentence is CORRECT?", o: ["Two families live here.", "Two familys live here.", "Two familyes live here.", "Two familes live here."], a: 0 }
    ],

    "pairs-odd": [
      { q: "Three of these are BIRDS that cannot fly. Which one CAN fly and is the odd one out?", o: ["eagle", "penguin", "ostrich", "emu"], a: 0, s: true },
      { q: "'Bee' makes 'honey' as 'silkworm' makes 'silk' (maker → what it makes).\nUsing the SAME idea, 'sheep' makes ________.", o: ["wool", "milk", "eggs", "web"], a: 0, s: true },
      { q: "Three of these are things you can SEE THROUGH. Which one is the odd one because you CANNOT see through it?", o: ["brick", "glass", "water", "clear plastic"], a: 0, s: true },
      { q: "'Loud' is to 'whisper' as 'huge' is to ________ (each pair is strong → weak).", o: ["tiny", "big", "wide", "heavy"], a: 0, s: true },
      { q: "Three of these mean 'very happy'. Which word means the OPPOSITE and is the odd one out?", o: ["miserable", "delighted", "joyful", "cheerful"], a: 0, s: true },
      { q: "'Ancient' means very old as 'enormous' means very ________ (each is the strong form).", o: ["big", "small", "fast", "loud"], a: 0 },
      { q: "Three of these give off their OWN light. Which only reflects light and does not make it?", o: ["moon", "sun", "fire", "star"], a: 0, s: true },
      { q: "'Doctor' works with 'patients' as 'teacher' works with ________ (person → who they help).", o: ["students", "doctors", "nurses", "farmers"], a: 0 },
      { q: "Three of these are used to MEASURE things. Which is the odd one out?", o: ["hammer", "ruler", "scale", "clock"], a: 0 },
      { q: "'Brave' is to 'scared' as 'gentle' is to ________ (each pair is opposites).", o: ["rough", "kind", "soft", "calm"], a: 0, s: true },
      { q: "Three of these words RHYME. Which one does NOT rhyme, though it looks alike?", o: ["great", "meat", "seat", "beat"], a: 0, s: true },
      { q: "Three of these live in WATER for their whole life. Which starts in water then lives on land?", o: ["frog", "shark", "dolphin", "whale"], a: 0 },
      { q: "'Winter' is to 'summer' as 'ancient' is to ________ (each pair is opposites).", o: ["modern", "old", "cold", "past"], a: 0, s: true },
      { q: "Three of these are tools that CUT. Which is the odd one out?", o: ["spoon", "scissors", "saw", "knife"], a: 0 },
      { q: "'Curious' goes with 'question' as 'hungry' goes with ________ (feeling → what you do).", o: ["eat", "sleep", "run", "read"], a: 0 },
      { q: "Three of these can be TRANSPARENT (see-through). Which one is always solid and the odd one out?", o: ["wall", "window", "bottle", "lens"], a: 0, s: true }
    ],

    "animal-babies": [
      { q: "'Foal → horse' and 'calf → cow' (baby → grown-up).\nUsing the SAME idea, 'cygnet' grows up to be a ________.", o: ["swan", "duck", "goose", "hen"], a: 0, s: true },
      { q: "Read three steps.\nA joey lives in a pouch. Only kangaroos and koalas have pouches. This joey climbs trees.\nSo this joey belongs to a ________.", o: ["koala", "kangaroo", "cow", "deer"], a: 0, s: true },
      { q: "A baby eagle is an 'eaglet' and a baby owl is an 'owlet'.\nBoth add the SAME ending. It is ________.", o: ["-let", "-ling", "-y", "-kin"], a: 0 },
      { q: "Which pair is WRONG? Three are correct baby → parent pairs.", o: ["cub - horse", "leveret - hare", "gosling - goose", "kid - goat"], a: 0, s: true },
      { q: "Read: A tadpole has a tail and no legs. It lives in the pond.\nWhen it grows legs and loses its tail, it becomes a ________.", o: ["frog", "fish", "snail", "newt"], a: 0, s: true },
      { q: "Bears, lions, tigers AND foxes all call their babies 'cubs'.\nSo a baby fox is a ________.", o: ["cub", "kit", "pup", "calf"], a: 0 },
      { q: "'Duckling → duck' and 'gosling → goose' both add '-ling'.\nWhich baby word below ALSO uses '-ling'?", o: ["duckling", "piglet", "owlet", "fawn"], a: 0, s: true },
      { q: "A baby deer is a 'fawn' and a baby kangaroo is a 'joey'.\nWhich pair is matched CORRECTLY?", o: ["deer - fawn", "deer - joey", "kangaroo - fawn", "deer - cub"], a: 0, s: true },
      { q: "Read: A calf can be the baby of a cow, an elephant OR a whale.\nSo 'calf' is used for ________ than most baby words.", o: ["more animals", "fewer animals", "only cows", "only whales"], a: 0 },
      { q: "Which group are ALL baby-animal words?", o: ["cub, foal, cygnet", "cub, horse, cygnet", "cub, foal, swan", "dog, foal, cygnet"], a: 0, s: true },
      { q: "'Hen → chick' as 'kangaroo → ________' (parent → baby).", o: ["joey", "cub", "foal", "calf"], a: 0 },
      { q: "A 'piglet' is a baby pig and a 'leveret' is a baby hare.\nWhich sentence is CORRECT?", o: ["A leveret is a baby hare.", "A leveret is a baby pig.", "A piglet is a baby hare.", "A cub is a baby hare."], a: 0, s: true },
      { q: "Read: Foxes and bears share a baby word; horses do NOT share it.\nWhich word do foxes and bears share?", o: ["cub", "foal", "kit", "calf"], a: 0 },
      { q: "Which one is NOT a real baby-animal word?", o: ["kennel", "cygnet", "leveret", "gosling"], a: 0 },
      { q: "A baby sheep is a lamb and a baby goat is a kid.\nA farmer has one lamb and one kid. So he has one baby ________ and one baby ________.", o: ["sheep - goat", "goat - sheep", "cow - goat", "sheep - cow"], a: 0, s: true },
      { q: "'Swan → cygnet' shows the baby of a swan.\nSo a group with a swan, a horse and a fox has babies called cygnet, foal and ________.", o: ["cub", "chick", "kid", "joey"], a: 0 }
    ],

    "animals": [
      { q: "Read three clues.\nThis animal is awake at night, has huge eyes, and can turn its head far around.\nAlso, it is NOT a mammal — it is a bird. Which is it?", o: ["owl", "bat", "fox", "cat"], a: 0, s: true },
      { q: "A chameleon can change colour to match the leaves.\nIt does this to become almost ________ to its enemies.", o: ["invisible", "furious", "enormous", "generous"], a: 0, s: true },
      { q: "Camels store fat in their humps so they can cross the desert.\nSo a camel is well suited to a place that is ________.", img: "camel", o: ["hot and dry", "cold and wet", "dark and icy", "deep and blue"], a: 0 },
      { q: "'As stubborn as a mule' and 'as gentle as a lamb'.\nSo if someone will not change their mind at all, we say they are as stubborn as a ________.", o: ["mule", "lamb", "bird", "fish"], a: 0, s: true },
      { q: "Read: A whale lives in the sea but breathes AIR, not water.\nSo a whale must come to the ________ to breathe.", o: ["surface", "seabed", "shore", "sand"], a: 0, s: true },
      { q: "Bees, ants and termites all live and work together in large groups.\nSo we say these insects are ________.", o: ["social", "alone", "lazy", "silent"], a: 0 },
      { q: "A tortoise moves slowly but lives a very long time.\nSo which sentence is TRUE?", o: ["It is slow but long-lived.", "It is fast and short-lived.", "It is fast but long-lived.", "It flies at night."], a: 0, s: true },
      { q: "Read: This gigantic animal has a long trunk it uses like a hand.\nIt is the biggest land animal. Which is it?", img: "elephant", o: ["elephant", "giraffe", "hippo", "rhino"], a: 0 },
      { q: "A spider has EIGHT legs, so it is NOT an insect (insects have six).\nSo which statement is correct?", o: ["A spider has eight legs.", "A spider has six legs.", "A spider is an insect.", "A spider has no legs."], a: 0 },
      { q: "Penguins have wings but cannot fly; instead they use their wings to ________.", o: ["swim", "dig", "climb", "hop"], a: 0, s: true },
      { q: "A snake has no legs, yet it can still move.\nSo a snake moves by ________ along the ground.", o: ["sliding", "hopping", "galloping", "waddling"], a: 0 },
      { q: "Read: This curious animal is very clever and can use a rock as a tool to open shells.\nIt lives in the sea and floats on its back. Which is it?", o: ["otter", "seal", "crab", "shark"], a: 0, s: true },
      { q: "A frog is an amphibian, so it can live BOTH in water and on land.\nWhich sentence is TRUE about a frog?", o: ["It lives in water and on land.", "It lives only in the sky.", "It lives only under sand.", "It cannot live in water."], a: 0 },
      { q: "'Roar' comes from a lion and 'hiss' comes from a snake.\nUsing the SAME idea, which animal 'trumpets'?", o: ["elephant", "zebra", "monkey", "deer"], a: 0, s: true },
      { q: "Bats are awake at night and sleep by day, so they are ________ animals.", o: ["nocturnal", "gentle", "ancient", "social"], a: 0 },
      { q: "Read: This brave, loyal animal helps guard the house and lives in a kennel.\nWhich animal is it?", img: "dog", o: ["dog", "cat", "cow", "duck"], a: 0 }
    ],

    "nouns-verbs": [
      { q: "A noun names a thing; a verb is an action; an adjective describes.\nIn 'The furious lion roared', which word is the ADJECTIVE?", o: ["furious", "lion", "roared", "the"], a: 0, s: true },
      { q: "Count carefully.\nHow many NOUNS are in: 'The tall boy gave a gift to his sister.'?", o: ["three", "two", "four", "five"], a: 0, s: true },
      { q: "The word 'water' can be a noun OR a verb.\nIn which sentence is 'water' an ACTION (verb)?", o: ["I water the plants daily.", "The water is cold.", "She drank the water.", "The water sparkled."], a: 0, s: true },
      { q: "Count the VERBS.\nHow many action words are in: 'She jumped, laughed and clapped with joy.'?", o: ["three", "two", "four", "one"], a: 0, s: true },
      { q: "Three of these are verbs. Which ONE is a noun?", o: ["whisper", "discover", "gallop", "trumpet"], a: 0 },
      { q: "In 'The enormous ship sailed slowly', which word is the ACTION?", o: ["sailed", "enormous", "ship", "slowly"], a: 0, s: true },
      { q: "An adjective describes a noun.\nIn 'a gentle breeze', the adjective is ________.", o: ["gentle", "breeze", "a", "blew"], a: 0 },
      { q: "Which sentence has EXACTLY two nouns and one verb?", o: ["The cat chased the mouse.", "The big cat chased quickly.", "Cats chase.", "The cat quietly slept."], a: 0, s: true },
      { q: "Read: 'Nam read a book. Mai painted a picture.'\nHow many VERBS are there in total across BOTH sentences?", o: ["two", "one", "three", "four"], a: 0, s: true },
      { q: "In 'The curious child asked many questions', find the ADJECTIVE.", o: ["curious", "child", "asked", "questions"], a: 0 },
      { q: "The word 'whisper' can be a noun or a verb.\nIn which sentence is it a VERB?", o: ["Please whisper the secret.", "I heard a whisper.", "Her whisper was soft.", "That whisper woke me."], a: 0, s: true },
      { q: "Three of these are nouns. Which ONE is an adjective?", o: ["brave", "castle", "river", "forest"], a: 0 },
      { q: "Count carefully.\nHow many ADJECTIVES are in: 'The tall, kind, gentle man smiled.'?", o: ["three", "two", "four", "one"], a: 0, s: true },
      { q: "In 'Birds build strong nests in tall trees', the word 'build' is a ________.", o: ["verb", "noun", "adjective", "number"], a: 0 },
      { q: "Which word can be a noun AND a verb, like 'water' or 'whisper'?", o: ["paint", "gentle", "slowly", "very"], a: 0 },
      { q: "In 'The ancient tree stood by the river', which is the ADJECTIVE and which is the NOUN it describes, in order?", o: ["ancient - tree", "tree - river", "stood - tree", "ancient - stood"], a: 0, s: true }
    ],

    "articles": [
      { q: "We say 'an' before a vowel SOUND and 'a' before other sounds.\nFill all three: 'I saw ________ owl, ________ eagle and ________ hawk.'", o: ["an - an - a", "a - an - an", "an - a - an", "a - a - a"], a: 0, s: true },
      { q: "'Hour' begins with a silent 'h', so it SOUNDS like it starts with a vowel.\nSo we say ________ hour.", o: ["an", "a", "the two", "no word"], a: 0, s: true },
      { q: "Only ONE sentence is correct. All four look plausible.", o: ["She wants an honest answer.", "She wants a honest answer.", "She wants an honestly answer.", "She wants the a honest answer."], a: 0, s: true },
      { q: "Fill BOTH blanks so each article matches the word after it.\n'He met ________ enormous bear and ________ tiny mouse.'", o: ["an - a", "a - an", "an - an", "a - a"], a: 0, s: true },
      { q: "'Uniform' begins with a 'yoo' sound, like 'you', not a vowel sound.\nSo we say ________ uniform.", o: ["a", "an", "the two", "no word"], a: 0 },
      { q: "We use 'the' for something there is only ONE of.\nWhich sentence is correct?", o: ["The earth spins every day.", "A earth spins every day.", "An earth spins every day.", "Earth the spins daily."], a: 0 },
      { q: "Fill all three blanks.\n'We ate ________ apple, ________ banana and ________ egg.'", o: ["an - a - an", "a - an - a", "an - an - an", "a - a - a"], a: 0, s: true },
      { q: "Which sentence uses 'the' correctly for something ALREADY mentioned?", o: ["I saw a dog. The dog was brown.", "I saw a dog. A dog was brown.", "I saw the dog. An dog was brown.", "I saw an dog. The dog was brown."], a: 0, s: true },
      { q: "Fill BOTH blanks.\n'She is ________ honest and ________ brave girl.'", o: ["an - a", "a - an", "an - an", "a - a"], a: 0, s: true },
      { q: "Only ONE sentence is fully correct.", o: ["An hour ago, an owl flew by.", "A hour ago, a owl flew by.", "An hour ago, a owl flew by.", "A hour ago, an owl flew by."], a: 0, s: true },
      { q: "'Umbrella' begins with a vowel sound, so it takes 'an'.\nWhich sentence is correct?", o: ["He carried an umbrella.", "He carried a umbrella.", "He carried the a umbrella.", "He carried an a umbrella."], a: 0 },
      { q: "Read the sound after each blank. Fill BOTH.\n'It was ________ hour before ________ university opened.'", o: ["an - a", "a - an", "an - an", "a - a"], a: 0, s: true },
      { q: "Which sentence is CORRECT?", o: ["That is a useful tool.", "That is an useful tool.", "That is the an useful tool.", "That is useful a tool."], a: 0 },
      { q: "The moon is the only one in the night sky, so we say 'the'.\nWhich sentence is correct?", img: "moon", o: ["The moon glows at night.", "A moon glows at night.", "An moon glows at night.", "Moon the glows at night."], a: 0 },
      { q: "Fill all three blanks by SOUND, not by first letter.\n'________ hour, ________ egg and ________ house.'", o: ["An - an - a", "A - an - a", "An - a - an", "A - a - a"], a: 0, s: true },
      { q: "Which sentence uses 'a' and 'an' correctly TOGETHER?", o: ["I read an honest book about a hero.", "I read a honest book about an hero.", "I read an honest book about an hero.", "I read a honest book about a hero."], a: 0, s: true }
    ]

  },

  passages: [
    {
      title: "The Stubborn Little Cloud",
      text: "High in the sky lived a small cloud named Puff. All the other clouds floated east where the farmers waited for rain, but Puff refused to move. \"I like it here,\" he said, and he stayed above the dry town, doing nothing at all.\nDay after day, the town below grew brown and thirsty. The flowers drooped and the wells ran low. A gentle breeze tried to push Puff along, but he was too stubborn to budge.\nOne night Puff heard a child whisper a wish for rain. In the morning, feeling sorry, Puff finally let the wind carry him. He grew dark and heavy, then poured his rain over the thirsty town. The flowers lifted their heads, and Puff felt happier than he ever had before.",
      questions: [
        { q: "The town 'grew brown and thirsty' while Puff stayed still. Put the clues together: what caused this?", o: ["No rain fell because Puff would not move", "Too much rain fell on the town", "The farmers left the town", "The wind was too strong"], a: 0, s: true },
        { q: "The story says Puff was 'too stubborn to budge'. This means he ________.", o: ["would not move even when pushed", "moved very quickly", "was afraid of the wind", "was already gone"], a: 0, s: true },
        { q: "What finally made Puff decide to help?", o: ["He heard a child wish for rain and felt sorry", "The other clouds forced him", "The sun told him to move", "The wells filled up"], a: 0 },
        { q: "Why did Puff 'grow dark and heavy' before it rained?", o: ["He filled with water ready to pour down", "He was getting sleepy", "He was turning into the sun", "He was flying away"], a: 0, s: true },
        { q: "At the end, Puff 'felt happier than he ever had'. Why?", o: ["Helping others made him feel good", "He got to stay still", "He became bigger than the sun", "It stopped raining"], a: 0 },
        { q: "What is the BEST lesson from this story?", o: ["Helping others can bring you joy too", "Clouds should never move", "Rain is always bad", "It is good to be stubborn"], a: 0 }
      ]
    },
    {
      title: "The Curious Fox and the Well",
      text: "A curious young fox was wandering the forest when she spotted an old stone well. Peering over the edge, she saw her own face staring back and, deeper down, something that glittered like gold.\n\"Treasure!\" she gasped. Without thinking, she leaned too far and tumbled straight into the cold water below.\nThe well was deep and its walls were smooth, so she could not climb out. She was exhausted from paddling when a thirsty goat trotted up and looked down at her.\n\"Is the water good?\" asked the goat. The clever fox smiled. \"Delicious! Come down and drink your fill.\" The goat jumped in at once. Standing on the goat's tall back, the fox leapt out and dashed away, leaving the poor goat stuck below.",
      questions: [
        { q: "The fox 'leaned too far'. Using the whole story, why did she fall in?", o: ["She was too curious about the glitter and lost her balance", "The goat pushed her", "The wind blew her in", "The well was very shallow"], a: 0, s: true },
        { q: "The 'something that glittered like gold' was most likely ________.", o: ["a reflection or trick of the light, not real treasure", "a pile of real gold coins", "the goat's tail", "a burning lamp"], a: 0, s: true },
        { q: "Why did the fox tell the goat the water was 'delicious'?", o: ["To trick the goat into jumping in so she could escape", "Because she wanted the goat to be safe", "Because the water really was tasty", "To warn the goat away"], a: 0, s: true },
        { q: "How did the fox finally get out of the well?", o: ["She climbed up on the goat's back and leapt out", "She waited for the water to rise", "A farmer pulled her up", "She dug a tunnel"], a: 0 },
        { q: "The word 'exhausted' tells us the fox was ________.", o: ["very tired", "very angry", "very happy", "very hungry"], a: 0 },
        { q: "What does the fox's trick tell us about her?", o: ["She was clever but not kind to the goat", "She was foolish and slow", "She always helped others", "She could not think for herself"], a: 0 }
      ]
    },
    {
      title: "Grandpa's Ancient Clock",
      text: "In the corner of Grandpa's house stood an ancient wooden clock, taller than Duc himself. Its tick was slow and gentle, and every hour it chimed a deep, friendly note.\nOne rainy afternoon, the clock went silent. Grandpa did not seem worried. \"It only needs winding,\" he said, and he showed Duc a small brass key hidden behind the clock face. \"This clock is older than me, but it still works if we care for it.\"\nDuc turned the key carefully, afraid he might break something so old. With a soft click, the heavy weights inside began to move, and the gentle tick returned. Grandpa smiled. \"You see? Old things are not useless. They just need a patient hand.\"\nThat night, Duc fell asleep to the friendly ticking, feeling proud of the ancient clock he had brought back to life.",
      questions: [
        { q: "Why did the clock go silent that afternoon? Read the whole story.", o: ["It simply needed winding, not repair", "It was broken forever", "Duc had dropped it", "The rain had soaked it"], a: 0, s: true },
        { q: "Grandpa 'did not seem worried'. What does this tell us?", o: ["He knew the clock could be fixed easily", "He did not care about the clock", "He was too tired to look", "He wanted a new clock"], a: 0, s: true },
        { q: "The word 'ancient' tells us the clock was ________.", o: ["very old", "very new", "very small", "very loud"], a: 0 },
        { q: "Why was Duc careful and 'afraid he might break something'?", o: ["The clock was old and precious to Grandpa", "The key was very sharp", "The clock was still ticking", "Grandpa was angry"], a: 0, s: true },
        { q: "What did Grandpa mean by 'Old things are not useless'?", o: ["Old things can still work if cared for", "Old things should be thrown away", "New things are always better", "Clocks cannot be fixed"], a: 0 },
        { q: "How did Duc feel by the end of the story?", o: ["Proud that he had fixed the old clock", "Angry at the clock", "Bored by the ticking", "Afraid of the dark"], a: 0 }
      ]
    }
  ]
};
