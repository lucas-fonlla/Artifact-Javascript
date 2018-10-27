!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function a(e,t){return e=function(){let n=e;return function(){t(),n.apply(this)}}()}let o;n.r(t);const s=(e,t)=>{let n=document.createElement("div");return n.classList.add("blank"),null!=e&&(t?e.appendChild(n):e.insertBefore(n,e.firstChild)),{div:n}},r=(e,t)=>{let n="../node_modules/artifactdb/assets",s=document.createElement("div"),r=()=>{},l={div:s,player:t};s.classList.add("card",e.Color);let d=e.Name.replace(/\s/g,"_").replace("'","").toLowerCase(),i=document.createElement("IMG");i.draggable=!1,i.src=`${n}/artwork/large/${d}.jpg`,s.appendChild(i),"Hero"==e.CardType&&(l.respawn=0,l.Bounty=5),"Creep"==e.CardType&&(l.Bounty=1),l.arrow=0;let c=["left","middle","right"],u=document.createElement("div");u.classList.add("arrow",c[1+l.arrow]),s.appendChild(u),r=a(r,function(){u.classList.remove("left","middle","right"),u.classList.add("arrow",c[1+e.arrow])}),l.currentHealth=e.Health;let p=document.createElement("div");p.classList.add("icon-container","health");let m=document.createElement("IMG");m.draggable=!1,m.src=`${n}/icon/cardstat-health.png`;let f=document.createElement("div");f.textContent=l.currentHealth,p.appendChild(m),p.appendChild(f),s.appendChild(p),r=a(r,function(){f.textContent=e.currentHealth});let v=document.createElement("div");v.classList.add("icon-container","attack");let h=document.createElement("IMG");h.draggable=!1,h.src=`${n}/icon/cardstat-attack.png`;let g=document.createElement("div");g.textContent=e.Attack,v.appendChild(h),v.appendChild(g),s.appendChild(v),r=a(r,function(){g.textContent=e.Attack});let y=document.createElement("div");y.classList.add("icon-container","armor");let L=document.createElement("IMG");L.draggable=!1,L.src=`${n}/icon/cardstat-armor.png`;let E=document.createElement("div");return E.textContent=e.Armor,y.appendChild(L),y.appendChild(E),s.appendChild(y),r=a(r,function(){E.textContent=e.Armor}),s.addEventListener("click",function(){console.log(e.player.name)}),s.ondragstart=function(t){o=e},l.updateDisplay=r,e=Object.assign({},e,l)};var l=(()=>{const e=document.getElementById("zoom-btn"),t=document.getElementById("zoom-btn-left"),n=document.getElementById("zoom-btn-middle"),a=document.getElementById("zoom-btn-right");e.addEventListener("click",function(){b.div.classList.toggle("zoom-out"),M.div.classList.toggle("zoom-out"),b.lanes[M.getCurrentLane()].div.scrollIntoView({inline:"center"})}),t.addEventListener("click",function(){b.div.classList.remove("zoom-out"),M.div.classList.remove("zoom-out"),b.lanes[0].div.scrollIntoView({inline:"center"})}),n.addEventListener("click",function(){b.div.classList.remove("zoom-out"),M.div.classList.remove("zoom-out"),b.lanes[1].div.scrollIntoView({inline:"center"})}),a.addEventListener("click",function(){b.div.classList.remove("zoom-out"),M.div.classList.remove("zoom-out"),b.lanes[2].div.scrollIntoView({inline:"center"})});return{updateActive:()=>{switch(M.getCurrentLane()){case 0:t.classList.add("active"),n.classList.remove("active"),a.classList.remove("active");break;case 1:t.classList.remove("active"),n.classList.add("active"),a.classList.remove("active");break;case 2:t.classList.remove("active"),n.classList.remove("active"),a.classList.add("active")}}}})();var d=(()=>{const e=document.getElementById("pass-btn-bottom"),t=document.getElementById("pass-btn-top"),n=()=>{e.classList.add("display-none"),t.classList.add("display-none")};return n(),setTimeout(function(){e.onclick=M.pass,t.onclick=M.pass},100),{enable:()=>{M.getTurn()?t.disabled=!1:e.disabled=!1,M.getTurn()?e.disabled=!0:t.disabled=!0},disable:()=>{e.disabled=!0,t.disabled=!0},hide:n,show:()=>{e.classList.remove("display-none"),t.classList.remove("display-none")}}})();const i=[],c=document.createElement("button");let u=[];function p(e){e.preventDefault()}function m(e){e.target.classList.add("dragover")}function f(e){e.target.classList.remove("dragover")}function v(){const e=document.createElement("div");e.classList.add("bottom","display-none");const t=document.createElement("div");t.classList.add("top","display-none"),i.push(e),i.push(t),i.forEach(function(e){e.classList.add("stage","UI"),M.div.appendChild(e)}),c.classList.add("deploy-btn","btn","UI","display-none"),c.textContent="Deploy",M.div.appendChild(c),c.addEventListener("click",function(){i[0].hasChildNodes()||i[1].hasChildNodes()?alert("Need to choose lanes for all Heros"):function(){(function(){for(let e=0;e<2;e++)i[e].classList.add("display-none"),b.lanes.forEach(function(t){t.stages[e].classList.add("display-none")})})(),c.classList.add("display-none");for(let e=0;e<3;e++){let t=b.lanes[e];u.forEach(function(n,a){for(;t.cards.reduce(N,[[],[]])[a].length<n[e].length;){let e=Math.random()<.5,n=[s(t.playAreas[0],e),s(t.playAreas[1],e)];e?t.cards.push(n):t.cards.unshift(n)}}),u.forEach(function(n,a){n[e].forEach(function(e){let n=t.cards.reduce(N,[[],[]])[a];n=n[Math.floor(Math.random()*n.length)];let o=t.cards[n][a].div;o.parentNode.replaceChild(e.div,o),t.cards[n][a]=e})})}b.lanes.forEach(function(e){0!=M.getRound()&&e.cards.forEach(function(t,n){t.forEach(function(a,o){if(null!=a.Name){if(null==t[1-o].Name){let t=Math.random();t=t>.75?1:(t>.25)-1,null!=e.cards[n+t]&&null!=e.cards[n+t][1-o].Name||(t=0),a.arrow=t}a.updateDisplay()}})}),console.log(e.cards)}),d.show()}()}),b.lanes.forEach(function(e,t){e.stages.forEach(function(e,n){e.ondragover=p,e.ondragenter=m,e.ondragleave=f,e.ondrop=function(a){a.preventDefault(),f(a),o.player==M.players[n]&&(e.appendChild(o.div),u[n][t].push(o),o.div.draggable=!1)}})})}function h(){u[0]=[[],[],[]],u[1]=[[],[],[]],null==i[0]&&v(),b.div.classList.add("zoom-out"),M.div.classList.add("zoom-out"),function(){for(let e=0;e<2;e++)i[e].classList.remove("display-none"),b.lanes.forEach(function(t){t.stages[e].classList.remove("display-none")})}(),u.forEach(function(e,t){for(let n=0;n<2;n++){let n=Math.floor(3*Math.random()),a=r(L.Cards[132],M.players[t]);e[n].push(a),b.lanes[n].stages[t].appendChild(a.div)}if(0==M.getRound()){let a=function(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}([0,1,2]);for(var n=0;n<3;n++){let o=M.players[t].getHeros()[n];b.lanes[a[n]].stages[t].appendChild(o.div),e[a[n]].push(o)}}M.players[t].getHeros().forEach(function(n){if(0==n.respawn&&0!=M.getRound())if(M.players[t].computer){let a=Math.floor(3*Math.random());e[a].push(n),b.lanes[a].stages[t].appendChild(n.div)}else i[t].appendChild(n.div),n.div.draggable=!0;n.respawn-=1})}),c.classList.remove("display-none")}var g=(()=>{const e=document.getElementById("shop"),t=document.createElement("button");t.innerHTML="Done",t.classList.add("close-btn","btn"),t.type="submit",e.appendChild(t),t.addEventListener("click",function(){e.classList.add("display-none"),h()});return{show:()=>{e.classList.remove("display-none"),t.focus()}}})();var y=()=>{const e=[],t=[document.getElementById("info-bottom"),document.getElementById("info-top")];M.players.forEach(function(n,a){t[a].classList.remove("display-none"),t[a].getElementsByClassName("name")[0].textContent=`${n.name}`,e.push(t[a].getElementsByClassName("gold")[0]),e[a].textContent=n.gold});return{updateDisplay:()=>{M.players.forEach(function(t,n){e[n].textContent=t.gold})}}};n.d(t,"game",function(){return M}),n.d(t,"board",function(){return b}),n.d(t,"cardData",function(){return L}),n.d(t,"posAvail",function(){return N});let L="not loaded yet";!function(e){var t=new XMLHttpRequest;t.overrideMimeType("application/json"),t.open("GET","../node_modules/artifactdb/cards-manifest.json",!0),t.onreadystatechange=function(){4==t.readyState&&"200"==t.status&&e(t.responseText)},t.send(null)}(function(e){L=JSON.parse(e).Sets[0]});const E=(e,t)=>{let n=document.createElement("div"),a=!1;let o={currentHealth:e,div:n,Name:"tower",Armor:0,updateDisplay:()=>{o.currentHealth<=0&&(M.score[1-t]+=1,a||(a=!a,o.currentHealth=80,n.classList.add("ancient"))),n.textContent=o.currentHealth}};return o},C=()=>{let e=E(40,1);return{name:void 0,div:void 0,cards:[],towers:[E(40,0),e],playAreas:[void 0,void 0],stages:[],passCount:0}},b={div:document.getElementById("board"),lanes:[C(),C(),C()]},w=(e,t,n=!1)=>{let a={};setTimeout(function(){(t=t.map(function(e){return r(L.Cards.find(function(t){return t.Name==e}),a)}))[3].respawn=1,t[4].respawn=2},100);return a.getHeros=(()=>t),a.name=e,a.computer=n,a.gold=0,a},M=(()=>{const e=document.getElementById("game");document.getElementById("pass-btn-bottom"),document.getElementById("pass-btn-top");let t,n=[w("Radiant",["Keefe the Bold","Fahrvhan the Dreamer","J'Muy the Wise","Debbi the Cunning","Crystal Maiden"]),w("Dire",["Keefe the Bold","Fahrvhan the Dreamer","J'Muy the Wise","Debbi the Cunning","Crystal Maiden"],!0)],a=0,o=0,r=0,i=[0,0];const c=()=>{b.lanes[r].passCount+=1,b.lanes[r].passCount>1&&(!function(){let e=b.lanes[M.getCurrentLane()];e.cards.forEach(function(t,n){t.forEach(function(t,a){if(null==t.Name)return;let o=e.cards[n+t.arrow][1-a];null!=o&&null!=o.Name||(o=a?e.towers[0]:e.towers[1]),o.currentHealth-=t.Attack-o.Armor})}),e.cards.flat().forEach(function(t){null!=t.currentHealth&&t.currentHealth<=0&&function(e,t){let n=t.cards.flat().indexOf(e),a=s();e.div.classList.add("condemned"),e.div.parentNode.replaceChild(a.div,e.div),t.cards[Math.floor(n/2)][n%2]=a,e.player==M.players[0]?M.players[1].gold+=e.Bounty:M.players[0].gold+=e.Bounty,null!=e.respawn&&(e.respawn=1,e.currentHealth=e.Health,e.updateDisplay())}(t,e)}),function e(){let t=!1;b.lanes.forEach(function(e){e.cards.forEach(function(t,n){t.forEach(function(t,a){null!=t.Name&&null==e.cards[n+t.arrow][1-a].Name&&(t.arrow=0)})}),e.cards.forEach(function(n,a){null==n[0].Name&&null==n[1].Name&&(t=!0,n[0].div.parentNode.removeChild(n[0].div),n[1].div.parentNode.removeChild(n[1].div),e.cards.splice(a,1))})}),t&&e()}(),e.cards.flat().forEach(function(e){null!=e.Name&&e.updateDisplay()}),e.towers[1].updateDisplay(),e.towers[0].updateDisplay(),M.infoDisplayUpdate(),M.gameOver()}(),b.lanes[r].div.classList.remove("active"),(r+=1)>2&&(d.hide(),g.show(),r=0,o+=1),b.lanes[r].div.classList.add("active"),l.updateActive(),b.lanes[r].passCount=0),a=1-a,d.enable(),n[a].computer&&setTimeout(c,300)};return{div:e,getCurrentLane:()=>r,hand:[],startGame:()=>{console.log("Game Started"),function(){let e=["left-lane","middle-lane","right-lane"],t=["bottom","top"];b.lanes.forEach(function(n,a){n.div=document.createElement("div"),n.name=e[a],n.div.classList.add("lane",e[a]),b.div.appendChild(n.div);for(var a=1;a>=0;a--)n.playAreas[a]=document.createElement("div"),n.playAreas[a].classList.add("playarea",`playarea-${t[a]}`),n.towers[a].div.classList.add("tower",`tower-${t[a]}`),n.towers[a].div.textContent=n.towers[a].currentHealth,n.div.appendChild(n.playAreas[a]),n.div.appendChild(n.towers[a].div),n.playAreas[a].addEventListener("scroll",function(){n.playAreas[1-a].scrollLeft=n.playAreas[a].scrollLeft}),n.stages[a]=document.createElement("div"),n.stages[a].classList.add("stage",`stage-${t[a]}`,"display-none"),n.div.appendChild(n.stages[a])})}(),t=y(),b.lanes[r].div.classList.add("active"),h(),d.enable(),l.updateActive()},getRound:()=>o,score:i,gameOver:()=>!(i[0]<2&&i[1]<2||(i[0]>=2&&i[1]>=2?console.log("Tie Game"):i[0]>=2?console.log(`${n[0].name} Wins`):i[1]>=2&&console.log(`${n[1].name} Wins`),d.hide(),0)),getTurn:()=>a,pass:c,players:n,infoDisplayUpdate:()=>{t.updateDisplay()}}})();function N(e,t,n){return null==t[0].Name&&e[0].push(n),null==t[1].Name&&e[1].push(n),e}document.getElementById("start-game-btn").addEventListener("click",function(){this.parentNode.removeChild(this),M.startGame()})}]);