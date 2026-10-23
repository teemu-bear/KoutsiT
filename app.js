let phase="marraskuu", type=null, open=null;
try{const h=location.hash.slice(1); if(P[h]) phase=h;}catch(e){}

const $=id=>document.getElementById(id);
function css(v){return `var(${v})`}

function renderTabs(){
  $("tabs").innerHTML="";
  Object.entries(P).forEach(([k,p])=>{
    const b=document.createElement("button");
    b.setAttribute("role","tab");b.id="tab-"+k;
    b.setAttribute("aria-selected",k===phase);
    b.innerHTML=`${p.name}<small>${p.dates}</small>`;
    b.onclick=()=>{phase=k;type=null;open=null;try{history.replaceState(null,"","#"+k)}catch(e){};render()};
    $("tabs").appendChild(b);
  });
}
function render(){
  renderTabs();
  const types=P[phase].types;
  if(!type||!types[type]) type=Object.keys(types)[0];
  $("seg").innerHTML="";
  Object.entries(types).forEach(([k,t])=>{
    const b=document.createElement("button");b.id="type-"+k;
    b.textContent=t.name;b.setAttribute("aria-pressed",k===type);
    b.onclick=()=>{type=k;open=null;render()};
    $("seg").appendChild(b);
  });
  $("seg").parentElement.hidden=Object.keys(types).length<2;
  const W=types[type];
  $("note").textContent=W.note;
  const se=S.filter(s=>s.ph===phase);
  $("schoolWrap").hidden=!se.length;
  $("school").innerHTML=se.map(s=>`<div class="row"><span class="when">${s.d}<br>vk ${s.w}</span><span class="what"><strong>${s.t}</strong><span>${s.e}</span></span></div>`).join("");
  $("bars").innerHTML="";$("daylabels").innerHTML="";
  W.days.forEach((d,i)=>{
    const t=T[d.t];
    const b=document.createElement("button");b.className="bar"+(open===i?" sel":"");
    b.setAttribute("aria-label",`${DN[i]}: ${d.title}`);
    b.innerHTML=`<span class="b" style="height:${t.h}%;background:${css(t.c)}"></span>`;
    b.onclick=()=>toggle(i,true);
    $("bars").appendChild(b);
    const l=document.createElement("div");l.innerHTML=`${DN[i]}<small>${t.n}</small>`;
    $("daylabels").appendChild(l);
  });
  $("legend").innerHTML=Object.values(T).map(t=>`<span><i style="background:${css(t.c)}"></i>${t.n}</span>`).join("");
  $("list").innerHTML="";
  W.days.forEach((d,i)=>{
    const t=T[d.t];
    const el=document.createElement("div");el.className="day";el.id="day-"+i;
    const btn=document.createElement("button");btn.setAttribute("aria-expanded",open===i);
    btn.innerHTML=`<span class="stripe" style="background:${css(t.c)}">${DN[i]}</span>
      <span class="title"><strong>${d.title}</strong><span>${d.sub||""}</span></span>
      <span class="pill" style="color:${css(t.c)}">${d.rpe||t.n}</span>`;
    btn.onclick=()=>toggle(i,false);
    el.appendChild(btn);
    if(open===i){
      const det=document.createElement("div");det.className="detail";
      if(d.rows.length){
        det.innerHTML=`<div class="tw"><table>${d.rows.map(r=>`<tr><td>${r[0]?r[0]+" min":"–"}</td><td>${r[1]}</td></tr>`).join("")}</table></div>`;
      } else det.innerHTML=`<p>Ei harjoitusta.</p>`;
      el.appendChild(det);
    }
    $("list").appendChild(el);
  });
}
function toggle(i,scroll){
  open=open===i?null:i;render();
  if(scroll&&open!==null){const e=$("day-"+i);e&&e.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"nearest"})}
}
$("allBody").innerHTML=S.map(s=>`<tr><td>${s.d}</td><td>${s.w}</td><td>${s.t}</td><td>${s.e}</td></tr>`).join("");
window.addEventListener("hashchange",()=>{const h=location.hash.slice(1);if(P[h]){phase=h;type=null;open=null;render()}});
render();

// Offline-tuki ja asennettavuus
if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
}
