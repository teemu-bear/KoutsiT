// Päivitä versio aina, kun tiedostoja muutetaan, jotta käyttäjät saavat uuden version.
const VERSION="v1";
const CACHE="viikkorytmi-"+VERSION;
const ASSETS=["./","index.html","style.css","data.js","app.js","manifest.webmanifest",
  "icons/icon.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png"];

self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith("viikkorytmi-")&&k!==CACHE).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim()));
});
// Verkko ensin (tuore data), välimuisti varalla offline-tilassa
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET") return;
  e.respondWith(
    fetch(e.request).then(r=>{
      if(r.ok||r.type==="opaque"){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}
      return r;
    }).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match("index.html")))
  );
});
