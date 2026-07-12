// Chill mode ("Nhím Chill Chill") — the everyday, warm-up question bank.
// NOTE: this content was PROMOTED from the old Elite bank so the whole app now
// runs one clear step harder than before. It is still 100% inside Grade-2
// knowledge and vocabulary — difficulty comes from light REASONING, not rare words.
//   The two higher rungs (Master, then Elite) sit ABOVE this one and get harder
//   step by step (see hard-questions.js and elite-questions.js).
// No Grade 4-5 content (vixen, gander, drake, collective nouns, "an hour", etc.).
// IMPORTANT: no item, distractor set, or "trick" here is reused in the Master or
// Elite banks.
// Keyed by topic id. Same question format as the regular topics.
// s:true = Scholar question (2 marks in tests). Correct answer is written first
// (a:0) for authoring convenience; options are shuffled when shown.
window.APP_DATA.chill = {
  topics: {

    "words": [
      { q: "'Hot' is the opposite of 'cold', and 'up' is the opposite of 'down'.\nSo 'wet' is the opposite of ________.", o: ["dry", "cold", "clean", "soft"], a: 0 },
      { q: "Read carefully.\nLan is NOT older than Nam, and she is NOT the same age.\nSo Lan is ________ than Nam.", o: ["younger", "older", "taller", "faster"], a: 0, s: true },
      { q: "Only ONE sentence is correct. Read every word.", o: ["She is taller than her brother.", "She is more tall than her brother.", "She is tallest than her brother.", "She is more taller than her brother."], a: 0, s: true },
      { q: "Three words tell HOW you feel. One tells WHAT you do.\nWhich is the DOING word?", o: ["cry", "glad", "afraid", "proud"], a: 0 },
      { q: "'Begin' means 'start'. 'End' means 'finish'.\nSo which pair means the SAME as each other?", o: ["start - begin", "start - end", "begin - finish", "end - open"], a: 0 },
      { q: "The word 'unlucky' is made from 'un' + 'lucky'.\n'Un' turns a word into its opposite. So 'unlucky' means ________.", o: ["not lucky", "very lucky", "lucky again", "always lucky"], a: 0, s: true },
      { q: "Only ONE spelling is correct.", o: ["surprise", "suprise", "surprize", "surprice"], a: 0, s: true },
      { q: "Fill BOTH blanks so each person does the RIGHT job.\nA baker ________ bread. A pilot ________ a plane.", o: ["bakes - flies", "flies - bakes", "bakes - drives", "cooks - flies"], a: 0 },
      { q: "'Quick' means 'fast', and its opposite is 'slow'.\nWhich word is the OPPOSITE of 'quiet'?", o: ["noisy", "fast", "small", "soft"], a: 0 },
      { q: "Which word means 'more than one time, again and again'?", o: ["often", "never", "once", "soon"], a: 0, s: true },
      { q: "Nam's soup is TOO hot to eat right now.\nThe SENSIBLE thing to do is ________.", o: ["wait for it to cool", "eat it fast", "add more heat", "throw it away"], a: 0 },
      { q: "Only ONE spelling is correct.", o: ["Wednesday", "Wensday", "Wednseday", "Wedensday"], a: 0, s: true },
      { q: "'Same' and 'alike' mean the same thing.\nWhich word means the OPPOSITE of them?", o: ["different", "equal", "similar", "matching"], a: 0 },
      { q: "It is raining AND Mai has no umbrella.\nWhat will most likely happen if she walks outside?", o: ["She will get wet", "She will get dry", "She will fly", "She will feel hot"], a: 0 },
      { q: "Only ONE sentence uses the naming word correctly.", o: ["There are two children.", "There are two childs.", "There is two children.", "There are two childrens."], a: 0 },
      { q: "'Empty' is to 'full' as 'open' is to ________.\n(Both pairs are opposites.)", o: ["closed", "wide", "big", "clean"], a: 0, s: true },
      { q: "Read: 'The heavy box was too big for one person.'\nSo they most likely needed ________.", o: ["help from someone", "a smaller room", "a bigger box", "more boxes"], a: 0 }
    ],

    "picture-words": [
      { q: "Every choice looks almost right. Only ONE is spelled correctly.", img: "chicken", o: ["chicken", "chiken", "chickan", "checken"], a: 0, s: true },
      { q: "Which spelling is correct? (Watch the middle letters.)", img: "giraffe", o: ["giraffe", "girraffe", "girafffe", "gieraffe"], a: 0, s: true },
      { q: "Three are wrong. Which double letters are right?", img: "strawberry", o: ["strawberry", "strawberrry", "strawbery", "strawbberry"], a: 0 },
      { q: "Pick the correct spelling. (One letter is different in each wrong word.)", img: "elephant", o: ["elephant", "elephunt", "elaphant", "elifant"], a: 0, s: true },
      { q: "Which is spelled correctly? (The 'gu' is the tricky part.)", img: "penguin", o: ["penguin", "penquin", "pengwin", "penguine"], a: 0 },
      { q: "Careful — every wrong word swaps just one sound.", img: "kangaroo", o: ["kangaroo", "kangeroo", "kangaru", "kanggaroo"], a: 0 },
      { q: "Which spelling has the right number of each letter?", img: "umbrella", o: ["umbrella", "umbrrella", "umbrela", "umberlla"], a: 0 },
      { q: "Only one is correct. (The 'wich' ending is a trap.)", img: "sandwich", o: ["sandwich", "sandwhich", "sandwitch", "samwich"], a: 0, s: true },
      { q: "Pick the correct spelling. (Look at the vowels.)", img: "bicycle", o: ["bicycle", "bicicle", "bycycle", "bicecle"], a: 0 },
      { q: "Which spelling is right for this bird?", img: "peacock", o: ["peacock", "peackock", "peocock", "peacokk"], a: 0 },
      { q: "Three choices are wrong by ONE letter each. Which is right?", img: "butterfly", o: ["butterfly", "buterfly", "butterfy", "butterflly"], a: 0 },
      { q: "Which is correct? (The double 'oo' matters.)", img: "toothbrush", o: ["toothbrush", "toothbursh", "tooethbrush", "toothbrsh"], a: 0 },
      { q: "Pick the correct spelling. (The 'ai' is easy to get wrong.)", img: "rainbow", o: ["rainbow", "rianbow", "raenbow", "rainbouw"], a: 0 },
      { q: "Which spelling matches this vegetable? (Count the letters.)", img: "carrot", o: ["carrot", "carott", "carrott", "carrat"], a: 0, s: true },
      { q: "Only one word is fully correct.", img: "turtle", o: ["turtle", "turttle", "turtel", "tuttle"], a: 0 },
      { q: "Which spelling is right for this insect?", img: "spider", o: ["spider", "spidder", "spiter", "spyder"], a: 0 }
    ],

    "jumbled": [
      { q: "Unscramble the letters. WARNING: some jumbles spell OTHER real words — pick the person at school.\nR - A - C - H - E - T - E", o: ["teacher", "cheater", "reacher", "hectare"], a: 0, s: true },
      { q: "Unscramble to find something you open in the rain.\nB - R - E - L - L - A - U - M", o: ["umbrella", "umberall", "bumrella", "rumbella"], a: 0 },
      { q: "Unscramble. One jumble spells 'reflow' — don't be tricked. Pick the thing that grows in a garden.\nR - E - F - L - O - W", o: ["flower", "reflow", "fowler", "flowre"], a: 0, s: true },
      { q: "Unscramble the letters to find a big animal:\nE - L - E - H - P - N - A - T", o: ["elephant", "elephent", "eelphant", "elepanth"], a: 0 },
      { q: "Unscramble. WARNING: one jumble spells 'great' — pick the striped animal instead.\nT - I - G - E - R", o: ["tiger", "great", "gitre", "reigt"], a: 0, s: true },
      { q: "Unscramble to find a fruit:\nG - E - O - R - A - N", o: ["orange", "ognare", "rangeo", "orenga"], a: 0 },
      { q: "Unscramble. WARNING: these letters also spell 'listen' — pick the word that means very quiet.\nS - I - L - E - N - T", o: ["silent", "listen", "tinsel", "enlist"], a: 0, s: true },
      { q: "Unscramble to find a farm bird:\nC - H - I - K - N - E - C", o: ["chicken", "kitchen", "checkin", "chicnek"], a: 0, s: true },
      { q: "Unscramble the letters:\nW - N - I - D - O - W", o: ["window", "widnow", "windwo", "winodw"], a: 0 },
      { q: "Unscramble to find a day of the week:\nD - N - S - U - A - Y", o: ["sunday", "sundya", "sudnay", "sanduy"], a: 0 },
      { q: "Unscramble. WARNING: these letters also spell 'below' and 'elbow' — pick the part of your arm that bends.\nB - O - E - L - W", o: ["elbow", "below", "bowel", "bewol"], a: 0, s: true },
      { q: "Unscramble to find a fruit:\nP - A - L - E - P", o: ["apple", "appel", "pleap", "papel"], a: 0 },
      { q: "Unscramble the letters:\nB - R - A - I - N - W - O", o: ["rainbow", "brainow", "rainwob", "brownai"], a: 0 },
      { q: "Unscramble to find a colour:\nL - L - E - W - O - Y", o: ["yellow", "yelow", "yollew", "wellyo"], a: 0 },
      { q: "Unscramble. WARNING: these letters also spell 'act' — pick the animal that says 'meow'.\nT - A - C", o: ["cat", "act", "tac", "cta"], a: 0 },
      { q: "Unscramble to find something in the sky at night. One jumble spells 'rats'!\nR - S - A - T", o: ["star", "rats", "tars", "arts"], a: 0, s: true }
    ],

    "gender": [
      { q: "'Boy' is to 'girl' as 'king' is to 'queen'.\nUsing the same idea, 'nephew' is to ________.", o: ["niece", "aunt", "uncle", "cousin"], a: 0, s: true },
      { q: "A hen's chicks have TWO parents. The mother is the hen.\nSo the FATHER of the chicks is the ________.", img: "rooster", o: ["rooster", "duck", "chick", "hen"], a: 0 },
      { q: "Read: Mai's mother has one brother and one sister.\nMai calls her mother's SISTER her ________.", o: ["aunt", "uncle", "niece", "cousin"], a: 0, s: true },
      { q: "Which pair is in MALE — FEMALE order AND both words name grown-ups (not children)?", o: ["gentleman - lady", "boy - girl", "son - daughter", "prince - princess"], a: 0, s: true },
      { q: "A man who acts is an 'actor'. Add the ending to make it female.\nA woman who acts is an ________.", o: ["actress", "actered", "actoress", "acting"], a: 0 },
      { q: "'Waiter' becomes 'waitress' for a woman.\nUsing the SAME change, 'host' becomes ________ for a woman.", o: ["hostess", "hostress", "hoster", "hostee"], a: 0, s: true },
      { q: "A female horse is a mare and a male horse is a stallion.\nWhat do we call their BABY (either boy or girl)?", o: ["foal", "calf", "cub", "kid"], a: 0 },
      { q: "Which sentence uses the female word CORRECTLY?", o: ["The lioness fed her cubs.", "The lion fed his cubs, she roared.", "The lioness is a boy.", "The king is a lioness."], a: 0, s: true },
      { q: "Read: Nam has one brother and no sisters.\nNam's parents have ________ sons.", o: ["two", "one", "three", "no"], a: 0, s: true },
      { q: "'Grandfather' names a MALE. Break the word: grand + father.\nSo the female match must be grand + ________.", o: ["mother", "sister", "aunt", "daughter"], a: 0 },
      { q: "Which group has ALL female words?", o: ["queen, aunt, niece", "queen, uncle, niece", "king, aunt, niece", "queen, aunt, nephew"], a: 0, s: true },
      { q: "'Prince' is to 'king' as 'princess' is to ________.\n(A prince grows up to be a king.)", o: ["queen", "lady", "girl", "aunt"], a: 0 },
      { q: "Read: A tigress is playing with her cubs.\nThe word 'tigress' AND the word 'her' both tell us this tiger is ________.", img: "tiger", o: ["female", "male", "young", "asleep"], a: 0 },
      { q: "Which pair is WRONG? (One of these is NOT a male–female pair.)", o: ["brother - uncle", "man - woman", "king - queen", "son - daughter"], a: 0, s: true },
      { q: "A 'waitress' is a woman. Which of these is ALSO a female word?", o: ["actress", "waiter", "actor", "host"], a: 0 },
      { q: "Your aunt is your parent's sister. Your aunt's daughter is your ________.", o: ["cousin", "sister", "niece", "aunt"], a: 0 }
    ],

    "one-many": [
      { q: "Some words don't add 's'. 'One child, two children.'\nUsing the SAME kind of change, 'one foot' becomes 'two ________'.", img: "foot", o: ["feet", "foots", "feets", "footes"], a: 0, s: true },
      { q: "Words ending in 'fe' or 'f' often change to 'ves'.\nSo 'one leaf' + 'one knife' together become many ________ and many ________.", o: ["leaves - knives", "leafs - knifes", "leaves - knifes", "leafs - knives"], a: 0, s: true },
      { q: "Which sentence is CORRECT? (Every option changes the word a different way.)", o: ["I see three mice.", "I see three mouses.", "I see three mices.", "I see three mouse."], a: 0 },
      { q: "'Baby' ends in 'y' after a letter, so it becomes 'babies'.\nUsing the SAME rule, 'one city' becomes many ________.", img: "city", o: ["cities", "citys", "cityes", "citie"], a: 0 },
      { q: "Some words stay the SAME for one or many, like 'sheep'.\nWhich word below is ALSO the same for one and many?", o: ["fish", "dog", "cat", "cow"], a: 0, s: true },
      { q: "Read: There was ONE goose. Then two more came.\nNow how many geese are there, and is 'geese' spelled right here?", o: ["Three geese — yes", "Three gooses — no", "Three geeses — no", "Three goose — no"], a: 0 },
      { q: "Words ending in 'x' add 'es': 'box → boxes'.\nWhich other word follows the SAME rule?", o: ["dish → dishes", "dish → dishs", "dish → dishies", "dish → dish"], a: 0 },
      { q: "One tooth fell out, then two more.\nNow she has lost three ________ in total.", img: "tooth", o: ["teeth", "tooths", "teeths", "toothes"], a: 0, s: true },
      { q: "Which sentence is CORRECT?", o: ["Five women were shopping.", "Five womans were shopping.", "Five womens were shopping.", "Five woman were shopping."], a: 0, s: true },
      { q: "'Story → stories' changes 'y' to 'ies'.\n'Lady' follows the SAME rule, so 'one lady' becomes many ________.", o: ["ladies", "ladys", "ladyes", "ladi"], a: 0 },
      { q: "Read: 'The farmer has one ox and buys two more oxen.'\nHow many oxen does the farmer have now?", img: "ox", o: ["three", "two", "one", "four"], a: 0, s: true },
      { q: "Which word does NOT add a normal 's' to become many?", o: ["man", "book", "cup", "pen"], a: 0 },
      { q: "One 'man' becomes 'men' — the middle letter changes.\nWhich word changes in the SAME way (letter in the middle changes)?", o: ["woman → women", "boy → boys", "girl → girls", "kid → kids"], a: 0, s: true },
      { q: "Which sentence is CORRECT?", o: ["The two buses are late.", "The two bus are late.", "The two buss are late.", "The two busus are late."], a: 0 },
      { q: "'Potato → potatoes' adds 'es'.\nUsing the SAME rule, 'one tomato' becomes many ________.", o: ["tomatoes", "tomatos", "tomatoies", "tomates"], a: 0, s: true },
      { q: "One fish, or a whole school of ________. Then pick the sentence that uses it right.", o: ["Many fish swim.", "Many fishs swim.", "Many fishes swims.", "Many fish swims."], a: 0 }
    ],

    "pairs-odd": [
      { q: "Three of these can fly. But be careful — one that LOOKS like it flies actually cannot.\nWhich one CANNOT fly?", o: ["penguin", "bee", "butterfly", "owl"], a: 0, s: true },
      { q: "'Hand' is to 'glove' as 'foot' is to 'sock' (things you wear on them).\nUsing the SAME idea, 'head' is to ________.", o: ["hat", "shoe", "ring", "belt"], a: 0 },
      { q: "Three of these belong together for the SAME reason. Which is the ODD one out — and NOT for its colour?", o: ["circle", "red", "blue", "green"], a: 0, s: true },
      { q: "'Cow' gives 'milk' as 'bee' gives 'honey' (animal → what it makes).\nUsing the SAME idea, 'hen' gives ________.", o: ["eggs", "wool", "silk", "web"], a: 0, s: true },
      { q: "Three of these live in water for their WHOLE life. Which starts in water but later lives on land?", o: ["frog", "fish", "turtle", "eel"], a: 0, s: true },
      { q: "'Puppy' is to 'dog' as 'kitten' is to 'cat' (baby → grown-up).\nUsing the SAME idea, 'calf' is to ________.", o: ["cow", "kid", "goat", "hen"], a: 0 },
      { q: "Three of these give off their OWN light. Which one only SHOWS light but does not make it?", o: ["mirror", "sun", "lamp", "candle"], a: 0, s: true },
      { q: "'Fish' goes with 'swim' as 'bird' goes with 'fly' (animal → how it moves).\nUsing the SAME idea, 'snake' goes with ________.", o: ["slither", "hop", "gallop", "waddle"], a: 0 },
      { q: "Three words name things you SIT on. Which one do you SLEEP on instead?", o: ["bed", "chair", "stool", "bench"], a: 0 },
      { q: "'Teacher' works in a 'school' as 'doctor' works in a 'hospital' (person → place).\nSo 'farmer' works on a ________.", o: ["farm", "market", "office", "kitchen"], a: 0, s: true },
      { q: "One of these is NOT a season. But it IS a real word — read carefully.", o: ["Sunday", "summer", "winter", "spring"], a: 0 },
      { q: "'Big' is to 'small' as 'fast' is to 'slow' (opposites).\nUsing the SAME idea, 'happy' is to ________.", o: ["sad", "glad", "kind", "loud"], a: 0 },
      { q: "Three of these are used for WRITING. Which is used for CUTTING instead?", o: ["scissors", "pen", "pencil", "chalk"], a: 0 },
      { q: "Three of these words rhyme. Which one does NOT — even though it looks similar?", o: ["come", "home", "dome", "roam"], a: 0, s: true },
      { q: "'Day' pairs with 'night' and 'summer' pairs with 'winter' (opposites).\nWhich pair below is ALSO opposites?", o: ["begin - end", "big - large", "quick - fast", "glad - happy"], a: 0 },
      { q: "Three of these are things we EAT. Which one is an ANIMAL, not a food?", o: ["rabbit", "carrot", "bread", "rice"], a: 0 }
    ],

    "animal-babies": [
      { q: "'Puppy → dog' and 'kitten → cat'.\nUsing the SAME idea (baby → grown-up), 'foal' grows up to be a ________.", o: ["horse", "cow", "goat", "sheep"], a: 0, s: true },
      { q: "Bears, lions AND tigers all use the SAME word for their babies.\nSo a baby tiger is called a ________.", o: ["cub", "kit", "pup", "calf"], a: 0 },
      { q: "Read: A tadpole has no legs and lives in water. Later it grows legs and hops.\nA tadpole will grow up to be a ________.", o: ["frog", "fish", "snail", "duck"], a: 0, s: true },
      { q: "A 'kid' is a baby goat and a 'lamb' is a baby sheep.\nWhich pair below is matched CORRECTLY?", o: ["goat - kid", "goat - lamb", "sheep - kid", "sheep - calf"], a: 0, s: true },
      { q: "Cows AND elephants share the SAME baby word.\nSo BOTH a baby cow and a baby elephant are called a ________.", o: ["calf", "cub", "kid", "foal"], a: 0 },
      { q: "Which pair is WRONG? (Three are correct baby→parent pairs; one is not.)", o: ["gosling - dog", "duckling - duck", "piglet - pig", "joey - kangaroo"], a: 0, s: true },
      { q: "A baby duck is a 'duckling' and a baby goose is a 'gosling'.\nBoth baby names end with the SAME three letters. What are they?", o: ["-ling", "-let", "-ick", "-fawn"], a: 0 },
      { q: "Read: A joey is safe in its mother's pouch.\nOnly ONE of these animals carries its baby in a pouch. Which mother is this?", o: ["kangaroo", "cow", "horse", "hen"], a: 0, s: true },
      { q: "A baby pig is a 'piglet' and a baby owl is an 'owlet'.\nBoth add the SAME ending. What ending is it?", o: ["-let", "-ling", "-y", "-kin"], a: 0, s: true },
      { q: "'Calf' can be the baby of a cow OR an elephant.\nWhich baby name below belongs to only ONE kind of animal here — the frog?", o: ["tadpole", "cub", "calf", "kid"], a: 0 },
      { q: "Read: A fawn has spots and lives in the forest.\nA fawn is the baby of a ________.", o: ["deer", "horse", "goat", "cow"], a: 0, s: true },
      { q: "Which group are ALL baby-animal words?", o: ["puppy, kitten, foal", "puppy, kitten, horse", "dog, kitten, foal", "puppy, cat, foal"], a: 0 },
      { q: "'Hen → chick' (parent → baby).\nUsing the SAME idea, 'dog → ________'.", o: ["puppy", "kitten", "calf", "chick"], a: 0 },
      { q: "A baby sheep and a baby goat are often mixed up.\nWhich sentence is CORRECT?", o: ["A lamb is a baby sheep.", "A lamb is a baby goat.", "A kid is a baby sheep.", "A calf is a baby sheep."], a: 0, s: true },
      { q: "Which one is NOT a baby-animal word?", o: ["fence", "fawn", "foal", "joey"], a: 0 },
      { q: "Read: Bears, lions and tigers share a baby word; horses and cows do NOT share it.\nWhich baby word do bears, lions and tigers share?", o: ["cub", "foal", "calf", "kid"], a: 0 }
    ],

    "animals": [
      { q: "A cow eats grass and a lion eats meat.\nSo which animal below would a LION most likely hunt?", o: ["rabbit", "grass", "leaf", "flower"], a: 0, s: true },
      { q: "Bees live in a hive and spiders make a web.\nSo who catches food in the web?", o: ["the spider", "the bee", "the hive", "the honey"], a: 0 },
      { q: "Read: This animal is awake at night and sleeps by day. It has big eyes and can turn its head far.\nWhich animal is it?", o: ["owl", "hen", "cow", "sheep"], a: 0, s: true },
      { q: "A fish uses gills to breathe under water.\nSo a fish taken OUT of the water would ________.", o: ["not be able to breathe well", "run away fast", "start to fly", "make honey"], a: 0, s: true },
      { q: "A camel can cross the desert because it can go a long time without water.\nSo the desert is a place with very little ________.", img: "camel", o: ["water", "sand", "sun", "heat"], a: 0 },
      { q: "'As busy as a bee' and 'as slow as a snail'.\nSo if someone is 'as quiet as a ________', which animal fits?", o: ["mouse", "lion", "dog", "duck"], a: 0 },
      { q: "A turtle carries its shell as its home.\nSo when a turtle is scared, it can hide by ________.", o: ["pulling into its shell", "flying away", "digging a nest", "spinning a web"], a: 0, s: true },
      { q: "Read: This farm animal gives us both wool for sweaters AND says 'baa'.\nWhich animal is it?", o: ["sheep", "cow", "hen", "horse"], a: 0 },
      { q: "Only ONE of these animals has NO wings at all.\nWhich is it?", o: ["cow", "owl", "bee", "bird"], a: 0 },
      { q: "A hen gives eggs and a cow gives milk.\nSo if you want HONEY, which animal do you need?", o: ["bee", "hen", "cow", "sheep"], a: 0, s: true },
      { q: "A zebra has stripes and an elephant has a trunk.\nSo which animal below would you know by its long TRUNK?", o: ["elephant", "zebra", "lion", "deer"], a: 0 },
      { q: "Read: This animal moves so slowly that we say 'as slow as' it. It also carries its home.\nWhich animal is it?", o: ["snail", "rabbit", "horse", "duck"], a: 0, s: true },
      { q: "A dog lives in a kennel and a horse lives in a stable.\nUsing the SAME idea (animal → home), a bird lives in a ________.", o: ["nest", "hive", "web", "den"], a: 0 },
      { q: "Which sentence is TRUE about these animals?", o: ["A fish lives in water; a rabbit lives on land.", "A fish lives on land; a rabbit lives in water.", "Both a fish and a rabbit live in the sky.", "A bird lives under the ground."], a: 0 },
      { q: "'Neigh' comes from a horse and 'moo' comes from a cow.\nSo the sound 'buzz' comes from a ________.", img: "bee", o: ["bee", "sheep", "duck", "cat"], a: 0, s: true },
      { q: "Read: This animal hops, has long ears and strong back legs, and is 'as timid' (shy) as can be.\nWhich animal is it?", o: ["rabbit", "cow", "fish", "duck"], a: 0 }
    ],

    "nouns-verbs": [
      { q: "A NOUN names a thing; a VERB is an action.\nIn 'Birds fly high', which word is the NOUN and which is the VERB, in that order?", o: ["birds - fly", "fly - birds", "high - fly", "birds - high"], a: 0, s: true },
      { q: "Count carefully.\nHow many NOUNS are in: 'The cat and the dog chase the ball.'?", o: ["three", "two", "four", "one"], a: 0, s: true },
      { q: "The word 'play' can be a noun OR a verb.\nIn which sentence is 'play' an ACTION (verb)?", o: ["The children play outside.", "The school play was long.", "We watched a play.", "That play is famous."], a: 0, s: true },
      { q: "In 'She waters the plants every day', the word 'waters' is a ________.", img: "plant", o: ["verb", "noun", "colour", "number"], a: 0 },
      { q: "In 'She drinks the water', the word 'water' is a ________.", img: "water", o: ["noun", "verb", "colour", "number"], a: 0 },
      { q: "Count carefully.\nHow many VERBS (action words) are in: 'The boy runs, jumps and sings.'?", o: ["three", "two", "one", "four"], a: 0, s: true },
      { q: "Every sentence needs a verb.\nWhich word could FINISH this sentence as its verb?\n'The happy baby ________ .'", o: ["laughs", "table", "blue", "under"], a: 0 },
      { q: "Three of these words are nouns. Which ONE is a verb?", o: ["swim", "school", "pencil", "river"], a: 0 },
      { q: "In 'The fast car stops at the light', which word is the ACTION?", o: ["stops", "fast", "car", "light"], a: 0, s: true },
      { q: "Which sentence has EXACTLY one noun and one verb (nothing else counted)?", o: ["Dogs bark.", "The big dog barks.", "Dogs bark loudly.", "Two dogs bark."], a: 0, s: true },
      { q: "A word can name a person, place, animal OR thing and still be a noun.\nWhich word below names a PLACE?", o: ["market", "jump", "loud", "happy"], a: 0 },
      { q: "In 'Grandma bakes a cake', find the noun that is a THING (not a person).", o: ["cake", "Grandma", "bakes", "a"], a: 0 },
      { q: "Read: 'Lan reads. Nam writes.'\nHow many verbs are there in total across BOTH sentences?", o: ["two", "one", "three", "four"], a: 0, s: true },
      { q: "Three of these are actions. Which ONE is a naming word (noun)?", o: ["kitchen", "cook", "bake", "stir"], a: 0 },
      { q: "In 'The bell rings loudly', the word 'loudly' tells HOW.\nIt is NOT a noun and NOT the action. The ACTION word here is ________.", img: "bell", o: ["rings", "bell", "loudly", "the"], a: 0, s: true },
      { q: "Which word can be BOTH a noun and a verb, like 'water' or 'play'?", o: ["fish", "happy", "under", "very"], a: 0 }
    ],

    "articles": [
      { q: "We use 'a' before a NOT-vowel sound and 'an' before a vowel sound.\nFill BOTH: 'I ate ________ egg and ________ banana.'", o: ["an - a", "a - an", "an - an", "a - a"], a: 0, s: true },
      { q: "Every option looks possible. Which sentence is CORRECT?", o: ["He has an umbrella.", "He has a umbrella.", "He has an big umbrella.", "He has the an umbrella."], a: 0, s: true },
      { q: "There is only ONE of it in the sky at night, so we say 'the'.\nWhich sentence is correct?", img: "moon", o: ["Look at the moon.", "Look at a moon.", "Look at an moon.", "Look at moon the."], a: 0 },
      { q: "Both blanks come before a vowel sound. Fill BOTH:\n'There is ________ ant and ________ owl.'", o: ["an - an", "a - an", "an - a", "a - a"], a: 0, s: true },
      { q: "'Hour' is tricky, but 'house' is easy: it starts with a NOT-vowel sound.\nSo we say ________ house.", o: ["a", "an", "the two", "no word"], a: 0 },
      { q: "Which sentence is CORRECT? (Read the article AND the next word together.)", o: ["I want an egg.", "I want a egg.", "I want an dog.", "I want a apple."], a: 0 },
      { q: "Fill BOTH blanks so each article matches the word after it:\n'She saw ________ elephant and ________ zebra.'", o: ["an - a", "a - an", "an - an", "a - a"], a: 0, s: true },
      { q: "We use 'the' for something we ALREADY know about.\nWhich sentence uses 'the' correctly?", o: ["Please close the door I just opened.", "Please close a door I just opened.", "Please close an door.", "Please close door the."], a: 0 },
      { q: "Fill BOTH blanks:\n'I have ________ pen and ________ eraser.'", o: ["a - an", "an - a", "a - a", "an - an"], a: 0, s: true },
      { q: "Only ONE sentence is fully correct.", o: ["An owl and a cat are friends.", "A owl and an cat are friends.", "An owl and an cat are friends.", "A owl and a cat are friends."], a: 0, s: true },
      { q: "'Orange' starts with a vowel sound, so it takes 'an'.\nWhich sentence is correct?", o: ["He ate an orange.", "He ate a orange.", "He ate the a orange.", "He ate an a orange."], a: 0 },
      { q: "Fill the blank with the article that matches BOTH the rule and the word:\n'A dog chased ________ ant across ________ yard we know.'", o: ["an - the", "a - the", "an - a", "the - an"], a: 0, s: true },
      { q: "Which sentence is CORRECT?", o: ["It is a big house.", "It is an big house.", "It is big a house.", "It is the an house."], a: 0 },
      { q: "The sun is the only one, so we say 'the'. Which sentence is correct?", img: "sun", o: ["The sun is hot today.", "A sun is hot today.", "An sun is hot today.", "Sun the is hot."], a: 0 },
      { q: "Read the word AFTER each blank. Fill BOTH:\n'We saw ________ ice cream and ________ cake.'", o: ["an - a", "a - an", "an - an", "a - a"], a: 0, s: true },
      { q: "Which sentence uses 'a' and 'an' correctly TOGETHER?", o: ["He read a book about an ocean.", "He read an book about a ocean.", "He read an book about an ocean.", "He read a book about a ocean."], a: 0, s: true }
    ]

  },

  passages: [
    {
      title: "Why the Ants Store Food",
      text: "All summer long, the ants worked hard. They carried tiny seeds and crumbs, one by one, down into their home under the ground. Nearby, a grasshopper played his fiddle all day and laughed at the busy ants.\n\"Come and play!\" he called. \"There is food everywhere!\"\nBut the ants only worked harder. \"Winter is coming,\" said the smallest ant, \"and then no food will grow.\"\nWhen the cold winter came, snow covered the fields. The grasshopper was hungry and cold, but the ants sat warm and safe with plenty to eat.",
      questions: [
        { q: "The grasshopper said food was 'everywhere', yet the ants kept working. Who understood the FUTURE better, and why?", o: ["The ants — they knew winter would leave no food", "The grasshopper — food never runs out", "Both were right", "Neither thought about food"], a: 0, s: true },
        { q: "Why could the ants stay 'warm and safe with plenty to eat' in winter?", o: ["They had saved food during summer", "They found new food in the snow", "The grasshopper shared with them", "Winter was short"], a: 0 },
        { q: "The grasshopper 'laughed at the busy ants'. What does this tell us about him at first?", o: ["He thought their hard work was foolish", "He was helping them", "He was afraid of them", "He was very tired"], a: 0, s: true },
        { q: "How was the grasshopper's winter DIFFERENT from the ants' winter?", o: ["He was hungry and cold; they were fed and warm", "He was warm; they were cold", "Both had plenty of food", "Both were asleep"], a: 0 },
        { q: "The smallest ant said, 'Winter is coming.' This shows the ant was ________.", o: ["planning ahead", "afraid of summer", "tired of playing", "angry at the fiddle"], a: 0 },
        { q: "What is the BEST lesson from this story?", o: ["Prepare now for what may come later", "Music is bad", "Ants dislike grasshoppers", "Summer never ends"], a: 0 }
      ]
    },
    {
      title: "Linh Learns to Ride",
      text: "Linh wanted to ride her new bike, but every time she pushed off, she wobbled and put her foot down. Her big brother Minh held the back of the seat and ran beside her.\n\"Look straight ahead, not at your feet,\" Minh said. \"And keep pedalling — a moving bike stays up!\"\nLinh tried again. She looked at the tree at the end of the path and kept her feet moving. The bike stopped wobbling. She was so happy she forgot to be scared. Only later did she notice something: Minh had let go of the seat a long time ago. She had been riding all by herself!",
      questions: [
        { q: "Minh said 'a moving bike stays up'. Put the idea together: why did pedalling STOP the wobble?", o: ["Moving kept the bike balanced", "Pedalling made it heavier", "It made the path shorter", "It cleaned the wheels"], a: 0, s: true },
        { q: "Minh told Linh to look at the tree, not her feet. How did this HELP her ride straight?", o: ["Looking ahead keeps you balanced and on track", "The tree pushed the bike", "Her feet were dirty", "The tree was moving"], a: 0 },
        { q: "'She forgot to be scared.' What most likely made her fear go away?", o: ["Things were going well and the bike felt steady", "Minh shouted at her", "It began to rain", "She got off the bike"], a: 0, s: true },
        { q: "Minh 'had let go a long time ago' but Linh kept riding. What does this show about Linh?", o: ["She could balance on her own without knowing it", "She could not ride at all", "Minh was still holding on", "The bike was broken"], a: 0, s: true },
        { q: "Why is it a SURPRISE that Minh let go so early?", o: ["Linh thought he was still helping the whole time", "Minh was faster than the bike", "The path had no trees", "Linh never pushed off"], a: 0 },
        { q: "Which word BEST describes how Linh solved her problem?", o: ["She kept trying and listened to good advice", "She gave up quickly", "She rode with her eyes closed", "She asked for a new bike"], a: 0 }
      ]
    },
    {
      title: "The Moon in the Well",
      text: "One night, a little rabbit went to drink at the old stone well. When he looked down, he saw the round moon shining at the bottom of the water.\n\"Oh no!\" cried the rabbit. \"The moon has fallen into the well! I must save it!\"\nHe pulled and pulled on the rope, but the bucket came up empty. Again and again he tried, until at last he was too tired and lay back on the grass. Looking up, he gasped — the moon was safe in the sky after all! What he had seen in the water was only its reflection, like a picture in a mirror.",
      questions: [
        { q: "The bucket 'came up empty' every time. Using the whole story, why was that?", o: ["There was no real moon in the well to catch", "The rope kept breaking", "A bird stole the moon", "The well was too deep"], a: 0, s: true },
        { q: "The story says the moon in the water was 'like a picture in a mirror'. This means it was ________.", o: ["only an image, not the real moon", "made of glass", "a second, smaller moon", "a lamp under the water"], a: 0, s: true },
        { q: "How did the rabbit FINALLY learn the truth?", o: ["He lay back and saw the real moon in the sky", "A friend explained it", "The water dried up", "He climbed into the well"], a: 0 },
        { q: "At the start the rabbit BELIEVED the moon had fallen in. Was he right or wrong, and how do we know?", o: ["Wrong — the moon was safe in the sky", "Right — he pulled it out", "Right — the well had two moons", "We cannot tell from the story"], a: 0, s: true },
        { q: "The rabbit tried 'again and again' before resting. What does this tell us about him?", o: ["He did not give up easily", "He was lazy", "He was afraid of water", "He could not see"], a: 0 },
        { q: "What is the BEST lesson from this story?", o: ["Things are not always what they first seem", "Never drink water at night", "Rabbits are very strong", "Wells are always empty"], a: 0 }
      ]
    }
  ]
};
