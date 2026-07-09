# English Fun — Grade 2 English Web App

A self-contained web app that runs offline, optimized for touch screens (phone / iPad).
The content follows the structure of the Unicus English Olympiad (UEO) Class 2 exam.

## How to open

- **On a computer:** open the `index.html` file directly in Chrome/Safari.
- **On iPad/phone (recommended):** upload the whole folder to a free static host
  (GitHub Pages, Netlify Drop, Cloudflare Pages, etc.) and open the link in Safari/Chrome.
  You can tap "Add to Home Screen" to use it like an app.
  Note: scores and history are saved with localStorage — open the same link and progress is kept across sessions.

## Two modes

1. **Practice** — pick a topic, questions are shuffled randomly, with instant right/wrong feedback plus rewards (stars, effects, sound).
2. **Take a test** — a 35-question test just like the real UEO exam: 30 Classic questions (1 mark) + 5 Scholar questions (2 marks) = 40 marks, a 60-minute countdown timer, scoring + per-question review.

The **My progress** section is for parents: test history, accuracy by topic, and a button to clear progress.

## Add / edit questions

Each topic is a file in `data/`. Open the file and add a line to the `questions` array:

```js
{ q: "Question (use \n for line breaks)", img: "apple", o: ["option 1","2","3","4"], a: 0, s: true },
```

- `img`: image name in the `images/` folder (no `.svg` extension needed). Leave empty if no image is needed.
- `a`: index of the correct answer in the `o` array (0–3). Options are shuffled randomly when displayed, so you can keep the correct answer first while authoring for convenience.
- `s: true`: marks a hard (Scholar) question — the test picks 5 of these, worth 2 marks each.

Reading passages live in `data/comprehension.js`: each passage has its own `text` + `questions` array.

## Illustrations

The animated SVG images in `images/` come from **Microsoft Fluent Emoji** (MIT license).
To add new images: run `npm i @iconify-json/fluent-emoji` then `node tools/build-images.js`
(edit the map in that file), or just drop `.svg`/`.png` files into `images/` and point `img` to the file name.

## Automated checks

```bash
npm i jsdom @iconify-json/fluent-emoji
node tools/smoke-test.js   # runs the whole app flow + checks the data
```
