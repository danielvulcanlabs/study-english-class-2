// Smoke test running the whole app flow with jsdom (no real browser needed)
// Run: node tools/smoke-test.js  (requires: npm i jsdom)
const { JSDOM } = require("jsdom");
const path = require("path");

const file = "file://" + path.join(__dirname, "..", "index.html");
const errors = [];

JSDOM.fromURL(file, {
  runScripts: "dangerously",
  resources: "usable",
  pretendToBeVisual: true,
  beforeParse(window) {
    window.confirm = () => true;
    window.HTMLElement.prototype.scrollIntoView = function(){};
    window.scrollTo = () => {};
    window.addEventListener("error", e => errors.push("JS error: " + e.message));
  }
}).then(dom => {
  const w = dom.window, d = w.document;
  setTimeout(() => {
    try {
      const assert = (cond, msg) => { if (!cond) errors.push("FAIL: " + msg); else console.log("ok  - " + msg); };

      assert(w.APP_DATA.topics.length === 10, "10 topics loaded");
      assert(w.APP_DATA.passages.length === 6, "6 reading passages loaded");
      assert(d.querySelectorAll(".bigmenu .btn").length === 3, "home screen has 3 big buttons");

      // ---- Practice flow ----
      w.goTopics();
      assert(d.querySelectorAll(".topic-card").length === 11, "topic screen has 11 cards (10 topics + reading)");
      w.startPractice(0);
      assert(d.querySelectorAll(".opt").length === 4, "practice question has 4 options");
      // correct answer
      let q = w.eval("P").queue[w.eval("P").idx];
      w.answerPractice(q.correctPos);
      assert(d.querySelector(".feedback.good"), "correct choice -> shows praise");
      assert(w.eval("store").stars > 0, "correct answer -> adds a star");
      w.nextPractice();
      // wrong answer
      q = w.eval("P").queue[w.eval("P").idx];
      w.answerPractice((q.correctPos + 1) % 4);
      assert(d.querySelector(".feedback.bad"), "wrong choice -> shows encouragement");
      assert(d.querySelector(".feedback.bad").textContent.includes(q.o[q.a]), "wrong choice -> shows the correct answer");
      w.practiceSummary();
      assert(d.querySelector(".score-big"), "practice summary shows score");

      // ---- Reading practice ----
      w.startPractice(-1);
      assert(d.querySelector(".passage"), "reading practice shows the passage");

      // ---- Test flow ----
      w.startTest();
      assert(w.eval("T").qs.length === 35, "test has 35 questions");
      assert(w.eval("T").qs.reduce((s,x)=>s+x.marks,0) === 40, "total test marks = 40");
      assert(w.eval("T").qs.filter(x=>x.passage).length === 6, "test has 6 reading questions");
      assert(w.eval("T").qs.filter(x=>x.marks===2).length === 5, "test has 5 scholar questions worth 2 marks");
      const badPos = w.eval("T").qs.filter(x=>x.o[x.order[x.correctPos]] !== x.o[x.a]).length;
      assert(badPos === 0, "shuffling options keeps the correct answer position");
      // answer all: first 20 correct, rest wrong
      for (let i = 0; i < 35; i++) {
        w.eval("T").idx = i;
        const qq = w.eval("T").qs[i];
        w.eval("T").answers[i] = i < 20 ? qq.correctPos : (qq.correctPos + 1) % 4;
      }
      w.renderTestQ();
      const expected = w.eval("T").qs.slice(0,20).reduce((s,x)=>s+x.marks,0);
      w.submitTest(false);
      assert(d.querySelector(".score-big"), "result screen shows score");
      const last = w.eval("store").tests[w.eval("store").tests.length-1];
      assert(last && last.score === expected, "scoring is correct (got " + (last&&last.score) + ", expected " + expected + ")");
      assert(last.correct === 20, "correct-answer count is accurate");
      assert(d.querySelectorAll(".review-item").length === 35, "review section has all 35 questions");

      // ---- localStorage (jsdom blocks it on file://, app has try/catch) ----
      let lsOK=true; try{ w.localStorage.getItem("x"); }catch(e){ lsOK=false; }
      console.log("note- localStorage "+(lsOK?"works":"blocked in jsdom (normal), app uses try/catch"));

      // ---- History + reset ----
      w.goHistory();
      assert(d.querySelector("table"), "progress screen shows history table");
      w.resetProgress();
      const cleared = w.eval("store");
      assert(cleared.tests.length === 0 && cleared.stars === 0, "reset button clears all progress");

      // ---- images in HTML point to real files ----
      const fs = require("fs");
      const imgDir = path.join(__dirname, "..", "images");
      w.goHome();
      const missing = [...d.querySelectorAll("img")].map(im => decodeURIComponent(im.getAttribute("src")))
        .filter(src => src.startsWith("images/"))
        .filter(src => !fs.existsSync(path.join(__dirname, "..", src)));
      assert(missing.length === 0, "all UI images exist" + (missing.length ? " (missing: " + missing.join(",") + ")" : ""));

      console.log(errors.length ? "\nERRORS:\n" + errors.join("\n") : "\nALL SMOKE TESTS PASSED");
      process.exit(errors.length ? 1 : 0);
    } catch (e) {
      console.error("CRASH:", e);
      process.exit(1);
    }
  }, 1500);
}).catch(e => { console.error("LOAD FAIL:", e.message); process.exit(1); });
