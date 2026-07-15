// Master mode ("Nhím Cao Thủ") — the MIDDLE rung of the app.
// It sits ABOVE Chill ("Nhím Chill Chill") and BELOW Elite ("Nhím Tinh Hoa").
//   Chill  = easy tier: ~2 step reasoning, everyday vocabulary.
//   Master = THIS bank: still ~2 steps, but with trickier DISTRACTORS and slightly
//            longer stems; a LITTLE richer vocabulary (gentle, brave, quick, clever,
//            giant, tidy, calm, gather, whisper) — but NOT the hardest Elite words.
//            Mostly present tense, simple plurals/articles, one- and occasional
//            two-blank fills (never three). Plain "an before a vowel letter" article
//            level, no silent-h / yoo-sound tricks (those belong to Elite).
//            Some picture hints are OK here to make it friendlier than Elite.
//   Elite  = hardest tier: longer stems, rare words, 3-step chains, three-blank fills.
// IMPORTANT: NO item, distractor set, or "trick" here is reused from chill-bank.js
// or elite-questions.js. Content is original and calibrated to the middle step.
// Keyed by topic id. Same question format as the regular topics.
// s:true = Scholar question (2 marks in tests). Correct answer is written first
// (a:0) for authoring convenience; options are shuffled when shown.
window.APP_DATA.hard = {
  topics: {

    "words": [
      { q: "'Big' means the same as 'large'.\nSo which word means the SAME as 'small'?", o: ["little", "tall", "wide", "long"], a: 0 },
      { q: "Read carefully.\nThe box is NOT heavy and NOT medium.\nSo the box must be ________.", o: ["light", "heavy", "full", "wide"], a: 0, s: true },
      { q: "Only ONE sentence is correct. Read every word.", o: ["She runs faster than me.", "She runs more fast than me.", "She runs fastest than me.", "She runs more faster than me."], a: 0, s: true },
      { q: "Three words tell HOW something looks. One is a DOING word.\nWhich is the action?", o: ["jump", "shiny", "round", "bright"], a: 0 },
      { q: "'Start' means 'begin'. 'Stop' means 'halt'.\nSo which pair means the SAME as each other?", o: ["stop - halt", "start - stop", "begin - halt", "stop - begin"], a: 0 },
      { q: "The word 'unkind' is made from 'un' + 'kind'.\n'Un' flips a word to its opposite. So 'unkind' means ________.", o: ["not kind", "very kind", "kind again", "always kind"], a: 0, s: true },
      { q: "Only ONE spelling is correct.", o: ["beautiful", "beutiful", "biutiful", "beautifull"], a: 0, s: true },
      { q: "Fill BOTH blanks so each person does the RIGHT job.\nA farmer ________ crops. A teacher ________ children.", o: ["grows - teaches", "teaches - grows", "grows - drives", "cooks - teaches"], a: 0 },
      { q: "'Loud' means noisy, and its opposite is 'quiet'.\nWhich word is the OPPOSITE of 'fast'?", o: ["slow", "loud", "small", "hard"], a: 0 },
      { q: "Which word means 'a place where you learn'?", o: ["school", "market", "garden", "kitchen"], a: 0, s: true },
      { q: "Lan is very tired after playing all day.\nThe SENSIBLE thing for her to do is ________.", o: ["go and rest", "run some more", "skip her nap", "play all night"], a: 0 },
      { q: "Only ONE spelling is correct.", o: ["because", "becuase", "becouse", "becaus"], a: 0, s: true },
      { q: "'Happy' and 'glad' mean the same thing.\nWhich word means the OPPOSITE of them?", o: ["sad", "kind", "brave", "calm"], a: 0 },
      { q: "The garden is dry AND the plants need water.\nWhat will most likely happen if nobody waters them?", o: ["The plants will wilt", "The plants will grow tall", "The plants will fly", "The plants will get wet"], a: 0 },
      { q: "'Clever' means the same as 'smart'.\nSo a child who solves a hard puzzle quickly is being ________.", o: ["clever", "sleepy", "hungry", "slow"], a: 0, s: true },
      { q: "'Day' is to 'night' as 'summer' is to ________.\n(Both pairs are opposites.)", o: ["winter", "warm", "sunny", "long"], a: 0, s: true },
      { q: "Read: 'The path was long, so the children felt tired.'\nWhat most likely made them tired?", o: ["walking such a long way", "sitting all day", "a short nap", "a good meal"], a: 0 }
    ],

    "picture-words": [
      { q: "Every choice looks close. Only ONE is spelled correctly.", img: "rabbit", o: ["rabbit", "rabbbit", "rabit", "rabbet"], a: 0, s: true },
      { q: "Which spelling is correct? (Watch the double letter.)", img: "balloon", o: ["balloon", "ballon", "baloon", "balloone"], a: 0, s: true },
      { q: "Three are wrong. Which spelling is right?", img: "monkey", o: ["monkey", "munkey", "monkee", "monky"], a: 0 },
      { q: "Pick the correct spelling. (One letter is off in each wrong word.)", img: "tiger", o: ["tiger", "tigar", "tyger", "tigger"], a: 0, s: true },
      { q: "Which is spelled correctly? (The 'ch' is the tricky part.)", img: "chicken", o: ["chicken", "chikken", "chickin", "chiken"], a: 0 },
      { q: "Careful — every wrong word swaps just one sound.", img: "orange", o: ["orange", "ornage", "orenge", "oragne"], a: 0 },
      { q: "Which spelling has the right letters for this animal?", img: "zebra", o: ["zebra", "zebbra", "zeebra", "zbera"], a: 0 },
      { q: "Only one is correct. (The ending is a trap.)", img: "pizza", o: ["pizza", "pizaa", "piza", "pitza"], a: 0, s: true },
      { q: "Pick the correct spelling of this flower. (Look at the vowels.)", img: "rose", o: ["rose", "roze", "rrose", "roes"], a: 0 },
      { q: "Which spelling is right for this fruit?", img: "mango", o: ["mango", "manggo", "mengo", "mangoe"], a: 0 },
      { q: "Three choices are wrong by ONE letter each. Which is right?", img: "pencil", o: ["pencil", "pensil", "pencle", "pencel"], a: 0 },
      { q: "Which is correct? (The double 'oo' matters.)", img: "kangaroo", o: ["kangaroo", "kangaru", "kangroo", "kangarooe"], a: 0, s: true },
      { q: "Pick the correct spelling. (The 'ai' is easy to get wrong.)", img: "train", o: ["train", "trane", "trian", "traen"], a: 0 },
      { q: "Which spelling matches this fruit? (Count the letters.)", img: "banana", o: ["banana", "bananna", "banna", "bananaa"], a: 0, s: true },
      { q: "Only one word is fully correct.", img: "snake", o: ["snake", "snayke", "snak", "sneak"], a: 0 },
      { q: "Which spelling is right for this bird?", img: "owl", o: ["owl", "oul", "owwl", "ohl"], a: 0 }
    ],

    "jumbled": [
      { q: "Unscramble the letters to find a wild striped cat.\nR - E - T - I - G", o: ["tiger", "tigre", "griet", "rigte"], a: 0, s: true },
      { q: "Unscramble to find a place where you buy food.\nK - R - A - M - E - T", o: ["market", "remark", "makret", "marekt"], a: 0 },
      { q: "Unscramble. WARNING: these letters also spell 'now' — pick the word that means 'not lost'.\nW - O - N", o: ["won", "now", "own", "nwo"], a: 0, s: true },
      { q: "Unscramble the letters to find a big animal you can ride:\nE - S - O - R - O - H", o: ["horse", "shore", "horese", "hoser"], a: 0 },
      { q: "Unscramble. WARNING: one jumble spells 'meat' — pick the word for a group in a game.\nT - E - A - M", o: ["team", "meat", "mate", "tame"], a: 0, s: true },
      { q: "Unscramble to find a sweet yellow fruit:\nA - N - A - B - N - A", o: ["banana", "bananna", "nabana", "banaan"], a: 0 },
      { q: "Unscramble. WARNING: these letters also spell 'star' — pick the small furry pests.\nR - A - T - S", o: ["rats", "star", "tars", "arts"], a: 0, s: true },
      { q: "Unscramble to find a bird that quacks:\nK - C - U - D", o: ["duck", "cudk", "dcuk", "kudc"], a: 0 },
      { q: "Unscramble the letters to find what you walk through to enter a room:\nR - O - D - O", o: ["door", "odor", "rodo", "orod"], a: 0 },
      { q: "Unscramble to find a day of the week:\nD - I - Y - R - A - F", o: ["friday", "firday", "frydai", "fridya"], a: 0 },
      { q: "Unscramble. WARNING: these letters also spell 'read' — pick the animal with antlers.\nD - E - A - R", o: ["deer", "read", "dare", "dear"], a: 0, s: true },
      { q: "Unscramble to find a colour:\nN - E - E - R - G", o: ["green", "grene", "gerne", "reeng"], a: 0 },
      { q: "Unscramble the letters to find the arch of colours after rain:\nB - O - W - R - A - I - N", o: ["rainbow", "brainow", "rainbwo", "brownai"], a: 0 },
      { q: "Unscramble to find a farm animal that says 'oink':\nG - I - P", o: ["pig", "gip", "pgi", "igp"], a: 0 },
      { q: "Unscramble. WARNING: these letters also spell 'taps' — pick the word that means 'gone by'.\nP - A - S - T", o: ["past", "taps", "spat", "pats"], a: 0 },
      { q: "Unscramble to find the big blue water full of fish. One jumble spells 'canoe'!\nO - C - E - A - N", o: ["ocean", "canoe", "acone", "ocnea"], a: 0, s: true }
    ],

    "gender": [
      { q: "'Boy' is to 'girl' as 'father' is to ________.", o: ["mother", "sister", "aunt", "daughter"], a: 0, s: true },
      { q: "A cow's calf has TWO parents. The mother is the cow.\nSo the FATHER of the calf is the ________.", o: ["bull", "hen", "goat", "cow"], a: 0 },
      { q: "Read: Nam's father has one brother.\nNam calls his father's BROTHER his ________.", o: ["uncle", "aunt", "cousin", "niece"], a: 0, s: true },
      { q: "Which pair is in MALE — FEMALE order?", o: ["man - woman", "girl - boy", "queen - king", "mother - father"], a: 0, s: true },
      { q: "A man who is a king rules a land.\nThe woman who rules is called a ________.", img: "crown", o: ["queen", "kingess", "princess", "lady"], a: 0 },
      { q: "'Actor' becomes 'actress' for a woman.\nUsing the SAME change, 'waiter' becomes ________ for a woman.", o: ["waitress", "waitres", "waiteress", "waitor"], a: 0, s: true },
      { q: "A father sheep is a ram and a mother sheep is a ewe.\nWhat do we call their BABY?", o: ["lamb", "calf", "cub", "foal"], a: 0 },
      { q: "Which sentence uses the female word CORRECTLY?", o: ["The girl brushed her hair.", "The girl brushed his hair.", "The boy is a girl.", "The king is a girl."], a: 0, s: true },
      { q: "Read: Mai has one sister and no brothers.\nMai's parents have ________ daughters.", o: ["two", "one", "three", "no"], a: 0, s: true },
      { q: "'Grandmother' names a FEMALE. Break the word: grand + mother.\nSo the male match must be grand + ________.", o: ["father", "brother", "uncle", "son"], a: 0 },
      { q: "Which group has ALL male words?", o: ["king, uncle, boy", "king, aunt, boy", "queen, uncle, boy", "king, uncle, girl"], a: 0, s: true },
      { q: "'Girl' is to 'woman' as 'boy' is to ________.\n(A boy grows up to be a man.)", o: ["man", "father", "uncle", "king"], a: 0 },
      { q: "Read: A lion is playing with his cubs.\nThe word 'his' tells us this big cat is ________.", img: "lion", o: ["male", "female", "young", "asleep"], a: 0 },
      { q: "Which pair is WRONG? (One of these is NOT a male-female pair.)", o: ["sister - aunt", "man - woman", "boy - girl", "father - mother"], a: 0, s: true },
      { q: "A 'queen' is female. Which of these is ALSO a female word?", o: ["princess", "prince", "king", "uncle"], a: 0 },
      { q: "Your uncle is your parent's brother. Your uncle's son is your ________.", o: ["cousin", "brother", "nephew", "uncle"], a: 0 }
    ],

    "one-many": [
      { q: "Some words don't add 's'. 'One child, two children.'\nUsing the SAME kind of change, 'one man' becomes 'two ________'.", img: "man", o: ["men", "mans", "mens", "manes"], a: 0, s: true },
      { q: "Words ending in 'y' after a letter change 'y' to 'ies'.\nSo 'one baby' + 'one puppy' become many ________ and many ________.", o: ["babies - puppies", "babys - puppys", "babies - puppys", "babys - puppies"], a: 0, s: true },
      { q: "Which sentence is CORRECT? (Each option changes the word a different way.)", o: ["I see three feet.", "I see three foots.", "I see three feets.", "I see three foot."], a: 0 },
      { q: "'Boy → boys' just adds 's'.\nUsing the SAME rule, 'one toy' becomes many ________.", img: "ball", o: ["toys", "toies", "toyes", "toy"], a: 0 },
      { q: "Some words stay the SAME for one or many, like 'sheep'.\nWhich word below is ALSO the same for one and many?", o: ["deer", "cat", "dog", "cow"], a: 0, s: true },
      { q: "Read: There was ONE mouse. Then two more came.\nNow how many mice are there, and is 'mice' spelled right here?", o: ["Three mice — yes", "Three mouses — no", "Three mices — no", "Three mouse — no"], a: 0 },
      { q: "Words ending in 'ch' add 'es': 'bench → benches'.\nWhich other word follows the SAME rule?", o: ["watch → watches", "watch → watchs", "watch → watchies", "watch → watch"], a: 0 },
      { q: "One tooth fell out, then two more.\nNow he has lost three ________ in total.", img: "tooth", o: ["teeth", "tooths", "teeths", "toothes"], a: 0, s: true },
      { q: "Which sentence is CORRECT?", o: ["Four children are playing.", "Four childs are playing.", "Four childrens are playing.", "Four child are playing."], a: 0, s: true },
      { q: "'Story → stories' changes 'y' to 'ies'.\n'City' follows the SAME rule, so 'one city' becomes many ________.", img: "city", o: ["cities", "citys", "cityes", "citie"], a: 0 },
      { q: "Read: 'The pond had one frog and then five more hopped in.'\nHow many frogs are in the pond now?", img: "frog", o: ["six", "five", "one", "four"], a: 0, s: true },
      { q: "Which word does NOT add a normal 's' to become many?", o: ["foot", "cup", "book", "pen"], a: 0 },
      { q: "One 'foot' becomes 'feet' — the middle letters change.\nWhich word changes in the SAME way (letters in the middle change)?", o: ["tooth → teeth", "cat → cats", "dog → dogs", "hat → hats"], a: 0, s: true },
      { q: "Which sentence is CORRECT?", o: ["The two foxes ran fast.", "The two foxs ran fast.", "The two foxxes ran fast.", "The two foxus ran fast."], a: 0 },
      { q: "'Dish → dishes' adds 'es'.\nUsing the SAME rule, 'one brush' becomes many ________.", o: ["brushes", "brushs", "brushies", "brushess"], a: 0, s: true },
      { q: "One box, or a whole pile of ________. Then pick the sentence that uses it right.", img: "box", o: ["Many boxes are heavy.", "Many boxs are heavy.", "Many boxies are heavy.", "Many box are heavy."], a: 0 }
    ],

    "pairs-odd": [
      { q: "Three of these are things you WEAR. Which one do you NOT wear?", o: ["chair", "hat", "shoe", "sock"], a: 0, s: true },
      { q: "'Hand' is to 'glove' as 'foot' is to ________ (things you wear on them).", o: ["shoe", "hat", "ring", "scarf"], a: 0 },
      { q: "Three of these are FRUITS. Which is the ODD one out because it is a vegetable?", o: ["carrot", "apple", "banana", "orange"], a: 0, s: true },
      { q: "'Cow' gives 'milk' as 'hen' gives 'eggs' (animal → what it gives).\nUsing the SAME idea, 'bee' gives ________.", o: ["honey", "wool", "silk", "web"], a: 0, s: true },
      { q: "Three of these can SWIM well. Which one CANNOT swim?", o: ["cat", "fish", "duck", "frog"], a: 0, s: true },
      { q: "'Puppy' is to 'dog' as 'kitten' is to ________ (baby → grown-up).", o: ["cat", "cow", "goat", "hen"], a: 0 },
      { q: "Three of these are hot and give warmth. Which one is COLD instead?", o: ["ice", "fire", "sun", "oven"], a: 0, s: true },
      { q: "'Bird' goes with 'fly' as 'fish' goes with ________ (animal → how it moves).", o: ["swim", "hop", "run", "walk"], a: 0 },
      { q: "Three words name things you can READ. Which one do you EAT instead?", o: ["apple", "book", "letter", "note"], a: 0 },
      { q: "'Teacher' works in a 'school' as 'nurse' works in a ________ (person → place).", o: ["hospital", "market", "farm", "kitchen"], a: 0, s: true },
      { q: "One of these is NOT a day of the week. But it IS a real word — read carefully.", o: ["April", "Monday", "Friday", "Sunday"], a: 0 },
      { q: "'Big' is to 'small' as 'up' is to ________ (opposites).", o: ["down", "high", "over", "top"], a: 0 },
      { q: "Three of these are used for CUTTING. Which is used for WRITING instead?", o: ["pen", "knife", "scissors", "saw"], a: 0 },
      { q: "Three of these words rhyme. Which one does NOT — even though it looks similar?", o: ["them", "tree", "free", "bee"], a: 0, s: true },
      { q: "'Hot' pairs with 'cold' and 'day' pairs with 'night' (opposites).\nWhich pair below is ALSO opposites?", o: ["open - shut", "big - large", "quick - fast", "glad - happy"], a: 0 },
      { q: "Three of these fly in the sky. Which one stays on the ground?", o: ["cow", "bird", "plane", "kite"], a: 0 }
    ],

    "animal-babies": [
      { q: "'Puppy → dog' and 'kitten → cat'.\nUsing the SAME idea (baby → grown-up), 'chick' grows up to be a ________.", o: ["hen", "cow", "goat", "duck"], a: 0, s: true },
      { q: "Bears AND lions use the SAME word for their babies.\nSo a baby lion is called a ________.", img: "lion", o: ["cub", "kid", "pup", "calf"], a: 0 },
      { q: "Read: A tadpole has no legs and lives in water. Later it grows legs and hops out.\nA tadpole will grow up to be a ________.", img: "frog", o: ["frog", "fish", "snail", "duck"], a: 0, s: true },
      { q: "A 'kid' is a baby goat and a 'lamb' is a baby sheep.\nWhich pair below is matched CORRECTLY?", o: ["sheep - lamb", "sheep - kid", "goat - lamb", "goat - calf"], a: 0, s: true },
      { q: "Cows AND horses have different baby words.\nWhat do we call a baby HORSE?", img: "horse", o: ["foal", "calf", "cub", "kid"], a: 0 },
      { q: "Which pair is WRONG? (Three are correct baby-parent pairs; one is not.)", o: ["kitten - dog", "puppy - dog", "calf - cow", "foal - horse"], a: 0, s: true },
      { q: "A baby duck is a 'duckling' and a baby goose is a 'gosling'.\nBoth baby names end with the SAME letters. What are they?", o: ["-ling", "-let", "-y", "-kin"], a: 0 },
      { q: "Read: A joey stays safe in its mother's pouch.\nOnly ONE of these animals carries its baby in a pouch. Which mother is this?", o: ["kangaroo", "cow", "horse", "hen"], a: 0, s: true },
      { q: "A baby pig is a 'piglet' and a baby duck is a 'duckling'.\nWhich sentence is CORRECT?", o: ["A piglet is a baby pig.", "A piglet is a baby duck.", "A duckling is a baby pig.", "A calf is a baby pig."], a: 0, s: true },
      { q: "'Calf' can be the baby of a cow.\nWhich baby name below belongs to the FROG instead?", o: ["tadpole", "cub", "calf", "kid"], a: 0 },
      { q: "Read: A fawn is a young deer with spotted fur.\nSo a mother deer with her fawn is caring for her ________.", img: "deer", o: ["baby", "brother", "friend", "father"], a: 0, s: true },
      { q: "Which group are ALL baby-animal words?", o: ["puppy, kitten, chick", "puppy, kitten, dog", "dog, kitten, chick", "puppy, cat, chick"], a: 0 },
      { q: "'Hen → chick' (parent → baby).\nUsing the SAME idea, 'cat → ________'.", o: ["kitten", "puppy", "calf", "chick"], a: 0 },
      { q: "A baby cow and a baby goat are easy to mix up.\nWhich sentence is CORRECT?", o: ["A calf is a baby cow.", "A calf is a baby goat.", "A kid is a baby cow.", "A lamb is a baby cow."], a: 0, s: true },
      { q: "Which one is NOT a baby-animal word?", o: ["basket", "foal", "chick", "joey"], a: 0 },
      { q: "Read: Bears and lions share a baby word; horses do NOT share it.\nWhich baby word do bears and lions share?", o: ["cub", "foal", "calf", "kid"], a: 0 }
    ],

    "animals": [
      { q: "A cow eats grass and a lion eats meat.\nSo which food would a COW most likely eat?", img: "cow", o: ["grass", "meat", "fish", "bone"], a: 0, s: true },
      { q: "Bees live in a hive and make honey.\nSo where do the bees store the honey they make?", o: ["in the hive", "in a nest", "in a web", "in a den"], a: 0 },
      { q: "Read: This bird is awake at night and has big round eyes.\nAt night it hunts for mice. Which bird is it?", img: "owl", o: ["owl", "hen", "duck", "peacock"], a: 0, s: true },
      { q: "A fish uses gills to breathe under water.\nSo a fish is best suited to live ________.", img: "fish", o: ["in the water", "up a tree", "in the sky", "on dry sand"], a: 0, s: true },
      { q: "A camel can cross the desert without much water.\nSo the desert is a place that is very ________.", img: "camel", o: ["dry", "wet", "cold", "green"], a: 0 },
      { q: "'As busy as a bee' and 'as brave as a lion'.\nSo if someone is 'as quick as a ________', which animal fits?", o: ["rabbit", "snail", "turtle", "cow"], a: 0 },
      { q: "A turtle carries its shell as a home.\nSo when a turtle is scared, it can hide by ________.", img: "turtle", o: ["pulling into its shell", "flying away", "spinning a web", "digging a hive"], a: 0, s: true },
      { q: "Read: This farm animal gives us wool for warm clothes AND says 'baa'.\nWhich animal is it?", img: "sheep", o: ["sheep", "cow", "hen", "pig"], a: 0 },
      { q: "Only ONE of these animals can FLY.\nWhich is it?", o: ["bird", "cow", "fish", "snake"], a: 0 },
      { q: "A hen gives eggs and a bee gives honey.\nSo if you want MILK, which animal do you need?", img: "cow", o: ["cow", "hen", "bee", "duck"], a: 0, s: true },
      { q: "A zebra has stripes and a giraffe has a long neck.\nSo which animal would you know by its long NECK?", img: "giraffe", o: ["giraffe", "zebra", "lion", "deer"], a: 0 },
      { q: "Read: This animal moves very slowly and carries its shell on its back.\nIt is tiny and leaves a shiny trail. Which animal is it?", img: "snail", o: ["snail", "rabbit", "horse", "duck"], a: 0, s: true },
      { q: "A dog lives in a kennel and a bee lives in a hive.\nUsing the SAME idea (animal → home), a bird lives in a ________.", o: ["nest", "web", "den", "stable"], a: 0 },
      { q: "Which sentence is TRUE about these animals?", o: ["A duck can swim; a hen stays on land.", "A hen can swim; a duck cannot.", "Both a hen and a duck live in the sea.", "A duck lives under the ground."], a: 0 },
      { q: "'Moo' comes from a cow and 'oink' comes from a pig.\nSo the sound 'buzz' comes from a ________.", img: "bee", o: ["bee", "sheep", "duck", "cat"], a: 0, s: true },
      { q: "Read: This animal hops, has long ears, and is very shy.\nIt likes to nibble carrots. Which animal is it?", img: "rabbit", o: ["rabbit", "cow", "fish", "duck"], a: 0 }
    ],

    "nouns-verbs": [
      { q: "A NOUN names a thing; a VERB is an action.\nIn 'Fish swim fast', which is the NOUN and which is the VERB, in that order?", o: ["fish - swim", "swim - fish", "fast - swim", "fish - fast"], a: 0, s: true },
      { q: "Count carefully.\nHow many NOUNS are in: 'The girl gave the cat some milk.'?", o: ["three", "two", "four", "one"], a: 0, s: true },
      { q: "The word 'run' can be a noun OR a verb.\nIn which sentence is 'run' an ACTION (verb)?", o: ["The dogs run in the park.", "We went for a run.", "That was a long run.", "The run was tiring."], a: 0, s: true },
      { q: "In 'She rides her bike to school', the word 'rides' is a ________.", img: "bicycle", o: ["verb", "noun", "colour", "number"], a: 0 },
      { q: "In 'She reads the book', the word 'book' is a ________.", img: "book", o: ["noun", "verb", "colour", "number"], a: 0 },
      { q: "Count carefully.\nHow many VERBS (action words) are in: 'The dog barks, runs and jumps.'?", o: ["three", "two", "one", "four"], a: 0, s: true },
      { q: "Every sentence needs a verb.\nWhich word could FINISH this sentence as its verb?\n'The little bird ________ .'", o: ["sings", "chair", "green", "under"], a: 0 },
      { q: "Three of these words are nouns. Which ONE is a verb?", o: ["jump", "table", "pencil", "school"], a: 0 },
      { q: "In 'The tall tree grows in the yard', which word is the ACTION?", o: ["grows", "tall", "tree", "yard"], a: 0, s: true },
      { q: "Which sentence has EXACTLY one noun and one verb (nothing else counted)?", o: ["Birds fly.", "The big bird flies.", "Birds fly high.", "Two birds fly."], a: 0, s: true },
      { q: "A word can name a person, place, animal OR thing and still be a noun.\nWhich word below names a PLACE?", o: ["school", "run", "loud", "happy"], a: 0 },
      { q: "In 'Grandma cooks the rice', find the noun that is a THING (not a person).", o: ["rice", "Grandma", "cooks", "the"], a: 0 },
      { q: "Read: 'Nam sings. Mai draws.'\nHow many verbs are there in total across BOTH sentences?", o: ["two", "one", "three", "four"], a: 0, s: true },
      { q: "Three of these are actions. Which ONE is a naming word (noun)?", o: ["garden", "dig", "plant", "water"], a: 0 },
      { q: "In 'The dog runs quickly', the word 'quickly' tells HOW.\nIt is NOT a noun and NOT the action. The ACTION word here is ________.", img: "dog", o: ["runs", "dog", "quickly", "the"], a: 0, s: true },
      { q: "Which word can be BOTH a noun and a verb, like 'run' or 'play'?", o: ["jump", "happy", "under", "very"], a: 0 }
    ],

    "articles": [
      { q: "We use 'a' before a NOT-vowel sound and 'an' before a vowel sound.\nFill BOTH: 'I ate ________ apple and ________ cake.'", o: ["an - a", "a - an", "an - an", "a - a"], a: 0, s: true },
      { q: "Every option looks possible. Which sentence is CORRECT?", o: ["She has an egg.", "She has a egg.", "She has an the egg.", "She has a an egg."], a: 0, s: true },
      { q: "There is only ONE of it in the sky by day, so we say 'the'.\nWhich sentence is correct?", img: "sun", o: ["Look at the sun.", "Look at a sun.", "Look at an sun.", "Look at sun the."], a: 0 },
      { q: "Both blanks come before a vowel sound. Fill BOTH:\n'There is ________ ant and ________ egg.'", o: ["an - an", "a - an", "an - a", "a - a"], a: 0, s: true },
      { q: "'Dog' starts with a NOT-vowel sound.\nSo we say ________ dog.", img: "dog", o: ["a", "an", "the two", "no word"], a: 0 },
      { q: "Which sentence is CORRECT? (Read the article AND the next word together.)", o: ["I want an orange.", "I want a orange.", "I want an dog.", "I want a apple."], a: 0 },
      { q: "Fill BOTH blanks so each article matches the word after it:\n'She saw ________ owl and ________ cat.'", o: ["an - a", "a - an", "an - an", "a - a"], a: 0, s: true },
      { q: "We use 'the' for something we ALREADY know about.\nWhich sentence uses 'the' correctly?", o: ["Please shut the window I just opened.", "Please shut a window I just opened.", "Please shut an window.", "Please shut window the."], a: 0 },
      { q: "Fill BOTH blanks:\n'I have ________ book and ________ egg.'", o: ["a - an", "an - a", "a - a", "an - an"], a: 0, s: true },
      { q: "Only ONE sentence is fully correct.", o: ["An ant and a bee met.", "A ant and an bee met.", "An ant and an bee met.", "A ant and a bee met."], a: 0, s: true },
      { q: "'Egg' starts with a vowel sound, so it takes 'an'.\nWhich sentence is correct?", o: ["He ate an egg.", "He ate a egg.", "He ate the a egg.", "He ate an a egg."], a: 0 },
      { q: "Fill the blank with the article that matches the word after it:\n'A cat chased ________ owl.'", o: ["an", "a", "the two", "no word"], a: 0, s: true },
      { q: "Which sentence is CORRECT?", o: ["It is a small box.", "It is an small box.", "It is small a box.", "It is the an box."], a: 0 },
      { q: "The moon is the only one in the night sky, so we say 'the'.\nWhich sentence is correct?", img: "moon", o: ["The moon is bright.", "A moon is bright.", "An moon is bright.", "Moon the is bright."], a: 0 },
      { q: "Read the word AFTER each blank. Fill BOTH:\n'We saw ________ elephant and ________ zebra.'", o: ["an - a", "a - an", "an - an", "a - a"], a: 0, s: true },
      { q: "Which sentence uses 'a' and 'an' correctly TOGETHER?", o: ["She has a hat and an umbrella.", "She has an hat and a umbrella.", "She has an hat and an umbrella.", "She has a hat and a umbrella."], a: 0, s: true }
    ]

  },

  passages: [
    {
      title: "The Kite That Would Not Fly",
      text: "Bao made a bright red kite from paper and sticks. He ran across the field again and again, but the kite would not go up. It just bumped along the grass behind him.\nHis sister Thu watched for a while. \"You are running the wrong way,\" she said. \"A kite flies when the wind pushes against it. Turn around and run INTO the wind.\"\nBao felt the wind on his face and ran the other way. This time the kite lifted higher and higher until it danced above the trees. Bao laughed. Sometimes the answer was not to try harder, but to try a different way.",
      questions: [
        { q: "The kite 'bumped along the grass' at first. Put the clues together: why would it not fly?", o: ["Bao ran the wrong way, so no wind pushed it up", "The kite was too heavy", "There was no wind at all", "The kite was broken"], a: 0, s: true },
        { q: "Thu said a kite flies 'when the wind pushes against it'. So to fly it, Bao had to run ________.", o: ["into the wind", "away from the wind", "very slowly", "with his eyes shut"], a: 0 },
        { q: "How did Bao know he was now facing the right way?", o: ["He felt the wind on his face", "Thu pulled the string", "The kite grew heavier", "The grass was wet"], a: 0 },
        { q: "What made the kite finally 'dance above the trees'?", o: ["The wind lifted it once Bao changed direction", "Bao ran much faster", "Thu threw it up high", "The kite grew wings"], a: 0 },
        { q: "The story says 'the answer was not to try harder, but to try a different way'. What does this teach us?", o: ["Sometimes a new way works better than more effort", "You should never ask for help", "Running fast always wins", "Kites cannot fly"], a: 0, s: true },
        { q: "What kind of sister is Thu in this story?", o: ["Helpful, because she gave good advice", "Unkind, because she laughed", "Lazy, because she did nothing", "Afraid of the wind"], a: 0 }
      ]
    },
    {
      title: "Mai and the Hungry Cat",
      text: "Every morning a thin grey cat waited by Mai's gate. It looked hungry, so Mai began leaving a little food on a plate. At first the cat ran away when she came close. But Mai was patient. Each day she sat a bit nearer and spoke in a gentle voice.\nAfter a week, the cat stayed while she filled the plate. After two weeks, it let her stroke its soft fur. One rainy day the cat followed Mai right up to her door, and her mother smiled. \"It trusts you now,\" she said. Mai had not caught the cat with a net or a trick. She had won it with kindness and time.",
      questions: [
        { q: "At first the cat 'ran away'. Using the story, why did it stop running away later?", o: ["Mai was patient and gentle, so it learned to trust her", "Mai chased it with a net", "The cat was no longer hungry", "The rain stopped it"], a: 0, s: true },
        { q: "Why did Mai leave food on a plate each morning?", o: ["The cat looked hungry", "She wanted to scare it", "Her mother told her to", "The plate was dirty"], a: 0 },
        { q: "Mai 'sat a bit nearer' each day. What was she trying to do?", o: ["Slowly help the cat feel safe with her", "Frighten the cat away", "Catch the cat quickly", "Feed the birds instead"], a: 0 },
        { q: "How do we know the cat finally trusted Mai?", o: ["It followed her right up to her door", "It ran away in the rain", "It hid under the gate", "It scratched her hand"], a: 0 },
        { q: "The story says Mai won the cat 'with kindness and time'. What does this mean?", o: ["Being gentle and patient worked better than force", "She used a clever trap", "She bought the cat", "She shouted at the cat"], a: 0, s: true },
        { q: "Which word BEST describes Mai in this story?", o: ["patient", "greedy", "rude", "lazy"], a: 0 }
      ]
    },
    {
      title: "The Lost Umbrella",
      text: "On a grey morning, Duc took his blue umbrella to school. By the time the bell rang, dark clouds had gathered and rain began to fall. But when Duc looked in the corner where he always left his umbrella, it was gone.\nHe checked the classroom, the hallway, and the playground. Then he remembered: he had lent it to Lan at lunch because she had none. He hurried to find her, and there she was, holding his blue umbrella and looking for him too. \"I was waiting to give it back!\" she laughed. The two friends walked home together, sharing one umbrella, both staying dry in the rain.",
      questions: [
        { q: "Duc could not find his umbrella at first. Using the whole story, where had it really gone?", o: ["He had lent it to Lan at lunch", "The wind had blown it away", "Someone had stolen it", "He left it at home"], a: 0, s: true },
        { q: "Why did Duc bring an umbrella that morning?", o: ["The sky was grey and rain looked likely", "It was a sunny day", "His teacher told him to", "He wanted to lose it"], a: 0 },
        { q: "How did Duc finally work out where his umbrella was?", o: ["He remembered lending it to Lan", "A teacher told him", "He found it in the playground", "It was in his bag all along"], a: 0 },
        { q: "Why was Lan holding the umbrella and looking for Duc?", o: ["She was waiting to give it back to him", "She wanted to keep it", "She was hiding from him", "She had bought a new one"], a: 0 },
        { q: "At the end, both friends 'stayed dry'. How?", o: ["They shared the one umbrella on the way home", "The rain had stopped", "They ran very fast", "They each had an umbrella"], a: 0, s: true },
        { q: "What does Duc lending his umbrella to Lan tell us about him?", o: ["He is kind and likes to help", "He is careless with his things", "He does not like the rain", "He never shares"], a: 0 }
      ]
    }
  ]
};
