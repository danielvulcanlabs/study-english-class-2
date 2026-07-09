// Topic: Reading Comprehension (prose & poetry)
// Format: each passage has text + several related questions (like UEO exam Q25-Q30)
window.APP_DATA.passages.push(
  {
    id: "p-cat",
    title: "Mimi's Cat",
    img: "cat",
    text: "Mimi has a little cat. Its name is Snowy. Snowy is white with a black tail. Every morning, Mimi gives Snowy a bowl of milk. Snowy likes to play with a red ball of wool.\nOne day, Snowy climbed a tree in the garden. It could not come down. Mimi called Daddy. Daddy brought a ladder and helped Snowy come down. Snowy licked Mimi's hand. Mimi was very happy.",
    questions: [
      { q: "What is the name of Mimi's cat?", o: ["Snowy", "Milky", "Fluffy", "Whitey"], a: 0 },
      { q: "What colour is Snowy's tail?", o: ["black", "white", "red", "brown"], a: 0 },
      { q: "What does Mimi give Snowy every morning?", o: ["a bowl of milk", "a red ball", "a fish", "some bread"], a: 0 },
      { q: "\"It could not come down.\"\nThe word \"It\" is used for:", o: ["Snowy", "the ladder", "the tree", "the ball of wool"], a: 0, s: true },
      { q: "Who brought the ladder?", o: ["Daddy", "Mimi", "Mummy", "Snowy"], a: 0 },
      { q: "Choose the TRUE statement:", o: ["Snowy plays with a red ball of wool.", "Snowy is black with a white tail.", "Mimi climbed the tree.", "Mummy helped Snowy come down."], a: 0, s: true }
    ]
  },
  {
    id: "p-zoo",
    title: "At the Zoo",
    img: "elephant",
    text: "On Sunday, Ben went to the zoo with his parents. First, they saw the monkeys. The monkeys were eating bananas. Then they saw a big grey elephant. The elephant sprayed water with its trunk. Ben laughed.\nNext, they saw the lions. The lions were sleeping under a tree. Ben liked the parrots best. The parrots were green and red, and one parrot said \"Hello!\" Ben ate an ice cream and went home happy.",
    questions: [
      { q: "When did Ben go to the zoo?", o: ["on Sunday", "on Monday", "on Friday", "on Saturday"], a: 0 },
      { q: "What were the monkeys eating?", o: ["bananas", "apples", "peanuts", "grapes"], a: 0 },
      { q: "How did the elephant spray water?", o: ["with its trunk", "with its tail", "with its ears", "with a hose"], a: 0 },
      { q: "What were the lions doing?", o: ["sleeping under a tree", "eating meat", "roaring loudly", "playing with a ball"], a: 0 },
      { q: "Which animals did Ben like best?", o: ["the parrots", "the lions", "the monkeys", "the elephants"], a: 0 },
      { q: "Choose the TRUE statement:", o: ["Ben ate an ice cream.", "The parrot said \"Good morning!\"", "Ben went to the zoo with his friends.", "The elephant was pink."], a: 0, s: true }
    ]
  },
  {
    id: "p-garden",
    title: "The Little Garden",
    img: "sunflower",
    text: "Lily has a small garden behind her house. In spring, she planted sunflower seeds. Every day, she watered the seeds. The sun shone on the garden.\nAfter two weeks, little green plants came out. Lily was excited. The plants grew taller and taller. In summer, the sunflowers opened. They were big and yellow like the sun. Bees came to the flowers every morning. Lily loves her little garden.",
    questions: [
      { q: "Where is Lily's garden?", o: ["behind her house", "at her school", "in the park", "on the roof"], a: 0 },
      { q: "What did Lily plant?", o: ["sunflower seeds", "rose seeds", "carrot seeds", "mango trees"], a: 0 },
      { q: "What did Lily do every day?", o: ["She watered the seeds.", "She picked the flowers.", "She counted the bees.", "She cut the grass."], a: 0 },
      { q: "What colour are the sunflowers?", o: ["yellow", "red", "pink", "blue"], a: 0 },
      { q: "Who came to the flowers every morning?", o: ["bees", "birds", "butterflies", "ants"], a: 0 },
      { q: "\"They were big and yellow like the sun.\"\nThe word \"They\" is used for:", o: ["the sunflowers", "the bees", "the seeds", "the gardens"], a: 0, s: true }
    ]
  },
  {
    id: "p-school",
    title: "My School Day",
    img: "school",
    text: "My name is An. I go to school at seven o'clock in the morning. My school has a big playground. My teacher is Miss Hoa. She is kind and tells funny stories.\nIn class, I read books and write in my notebook. At break time, I play hide-and-seek with my friends. My best friend is Nam. We share our snacks. School ends at four o'clock. I love my school.",
    questions: [
      { q: "What time does An go to school?", o: ["at seven o'clock", "at eight o'clock", "at nine o'clock", "at four o'clock"], a: 0 },
      { q: "Who is An's teacher?", o: ["Miss Hoa", "Miss Lan", "Miss Mai", "Miss Roy"], a: 0 },
      { q: "What does An play at break time?", o: ["hide-and-seek", "football", "skipping", "chess"], a: 0 },
      { q: "Who is An's best friend?", o: ["Nam", "Hoa", "Lan", "Ben"], a: 0 },
      { q: "Choose the TRUE statement:", o: ["Miss Hoa tells funny stories.", "School ends at five o'clock.", "An goes to school at eight o'clock.", "An plays football at break time."], a: 0, s: true },
      { q: "Which of these words from the passage are all nouns?", o: ["school, playground, teacher", "read, write, play", "school, write, kind", "play, books, share"], a: 0, s: true }
    ]
  },
  {
    id: "p-kite",
    title: "My Kite (a poem)",
    img: "kite",
    text: "My kite is red, my kite is high,\nIt dances in the big blue sky.\nThe wind blows soft, the wind blows free,\nMy kite flies higher than the tree.\nI hold the string, I run and run,\nFlying kites is so much fun!",
    questions: [
      { q: "What colour is the kite?", o: ["red", "blue", "green", "yellow"], a: 0 },
      { q: "Where does the kite dance?", o: ["in the big blue sky", "on the tree", "in the garden", "on the roof"], a: 0 },
      { q: "What blows soft and free?", o: ["the wind", "the kite", "the tree", "the string"], a: 0 },
      { q: "The kite flies higher than the ________.", o: ["tree", "house", "birds", "clouds"], a: 0 },
      { q: "What does the child hold?", o: ["the string", "the kite", "a ball", "a stick"], a: 0 },
      { q: "Which word from the poem rhymes with \"high\"?", o: ["sky", "tree", "run", "fun"], a: 0, s: true }
    ]
  },
  {
    id: "p-birthday",
    title: "The Birthday Party",
    img: "birthday-cake",
    text: "Today is Mai's birthday. She is eight years old. Mummy baked a chocolate cake. Daddy put eight candles on the cake. Mai wore a pink dress.\nHer friends came at four o'clock. They played games and sang songs. Mai blew out the candles and made a wish. Everyone ate cake and ice cream. Mai got a teddy bear from her best friend Linh. It was the best birthday ever!",
    questions: [
      { q: "How old is Mai?", o: ["eight years old", "seven years old", "nine years old", "ten years old"], a: 0 },
      { q: "Who baked the cake?", o: ["Mummy", "Daddy", "Linh", "Mai"], a: 0 },
      { q: "What did Mai wear?", o: ["a pink dress", "a blue dress", "a white shirt", "a red frock"], a: 0 },
      { q: "How many candles were on the cake?", o: ["eight", "seven", "nine", "six"], a: 0 },
      { q: "What did Linh give Mai?", o: ["a teddy bear", "a doll", "a book", "a kite"], a: 0 },
      { q: "\"They played games and sang songs.\"\nThe word \"They\" is used for:", o: ["Mai's friends", "the candles", "Mummy and Daddy", "the teddy bears"], a: 0, s: true }
    ]
  }
);
