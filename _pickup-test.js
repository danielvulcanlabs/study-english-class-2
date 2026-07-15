const fs=require('fs');const {JSDOM}=require('jsdom');
const html=fs.readFileSync('index.html','utf8');
const dom=new JSDOM(html,{runScripts:'dangerously',resources:'usable',pretendToBeVisual:true});
const w=dom.window;
// stub audio + rAF + getBBox + getBoundingClientRect so game code runs headless
w.AudioContext=undefined;w.requestAnimationFrame=cb=>cb();
w.Element.prototype.getBBox=()=>({x:0,y:0,width:10,height:10});
w.Element.prototype.getBoundingClientRect=()=>({left:0,top:0,width:10,height:10});
// wait for scripts (data files are local, sql/wasm blocked but app seeds from LS)
setTimeout(()=>{
  try{
    // start a topic practice round
    w.MODE='chill';
    w.startPractice(0);
    const P=w.P;
    // force a known item at the step the hog reaches after 1 correct answer
    P.items={1:'💎'};
    const before=Object.values(w.store.bag||{}).reduce((a,b)=>a+b,0);
    // answer the current question correctly
    const q=P.queue[P.idx];
    w.answerPractice(q.correctPos);
    const bag=w.store.bag||{};
    const after=Object.values(bag).reduce((a,b)=>a+b,0);
    console.log('bag before:',before,'after:',after);
    console.log('gem count:',bag['💎']||0);
    console.log('itemsRound:',JSON.stringify(P.itemsRound));
    console.log('bagCount el:',w.document.getElementById('bagCount') && w.document.getElementById('bagCount').textContent);
    console.log(after===before+1 && (bag['💎']||0)===1 ? 'PASS: item picked into bag' : 'FAIL: item not added');
    // second check: correct answer with NO item at that step -> bag unchanged
    P.items={};
    const b2=after;
    const q2=P.queue[P.idx];
    w.answerPractice(q2.correctPos);
    const after2=Object.values(w.store.bag).reduce((a,b)=>a+b,0);
    console.log(after2===b2?'PASS: no phantom items when trail empty':'FAIL: phantom item added ('+b2+'->'+after2+')');
  }catch(e){console.log('ERROR',e.message,e.stack);}
},1500);
