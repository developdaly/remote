'use strict';const b=new mdc.h.b.a(document.querySelector(".mdc-drawer")),c=new mdc.o.f.a(document.querySelector(".mdc-top-app-bar"));c.l(document.querySelector(".main-content"));c.j("MDCTopAppBar:nav",()=>{b.open=!b.open});mdc.m.c.a(document.querySelector(".mdc-text-field"));var d=document.querySelector("#ip-address");document.addEventListener("click",(a)=>{e("http://"+d.value+":8060/keypress/"+a.target.value).then((a)=>console.log(JSON.stringify(a))).catch((a)=>console.error(a))});
function e(a=""){return fetch(a,{method:"POST",mode:"no-cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify({})}).then((a)=>a.json())}try{navigator.i("screen").then((a)=>{a.g()})}catch(a){}navigator.serviceWorker.register("service-worker.js",{scope:"./"});
