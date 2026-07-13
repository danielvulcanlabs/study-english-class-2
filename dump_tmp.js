const {JSDOM}=require('jsdom');
const fs=require('fs');const path=require('path');
const initSqlJsRaw=require('sql.js');
require('fake-indexeddb/auto');
const WASM='sql.js/dist/';
const html=fs.readFileSync('/sessions/funny-gallant-galileo/mnt/study-english-class-2/index.html','utf8');
const dataJS=[...html.matchAll(/<script src="(data\/[^"]+)"><\/script>/g)].map(m=>fs.readFileSync('/sessions/funny-gallant-galileo/mnt/study-english-class-2/'+m[1],'utf8')).join("\n");
const inline=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
const combined=inline.find(s=>s.includes("APP_DATA"))+"\n"+dataJS+"\n"+inline.reduce((a,b)=>b.length>a.length?b:a,"")
  +`;window.__api={sceneHtml, setMode:(m)=>{MODE=m;}};`;
const dom=new JSDOM(`<!DOCTYPE html><body><div id="app"></div></body>`,{runScripts:"dangerously",url:"https://x.test/"});
const w=dom.window; w.initSqlJs=()=>initSqlJsRaw({locateFile:f=>path.join(WASM,f)});
w.indexedDB=global.indexedDB; w.requestAnimationFrame=cb=>setTimeout(cb,0);
const s=w.document.createElement("script"); s.textContent=combined; w.document.body.appendChild(s);
setTimeout(()=>{try{
  const modes=["chill","master","elite"]; const items={1:"🍎",3:"💎",5:"🌸",7:"🍄",9:"🍯"};
  let out='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 470">';
  modes.forEach((m,i)=>{ w.__api.setMode(m);
    const svg=w.__api.sceneHtml(i*3+2,10,items).match(/<svg[\s\S]*?<\/svg>/)[0];
    out+=`<g transform="translate(0,${i*160})">`+svg.replace(/^<svg[^>]*>/,'').replace(/<\/svg>$/,'')+`</g>`;
  });
  out+='</svg>';
  fs.writeFileSync("/tmp/v2.svg",out); console.log("dumped ok");}catch(e){console.log("INNER ERR:",e.message,e.stack.split("\n")[1]);}
},900);
