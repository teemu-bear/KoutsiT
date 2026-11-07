// Nosta VERSION-arvoa, kun tiedostoja muutetaan (make_site.py tekee sen)
const VERSION="v2";
const CACHE="viikkorytmi-"+VERSION;
const ASSETS=["./","index.html","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith("viikkorytmi-")&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
// Verkko ensin (tuore sisältö), välimuisti varalla offline-tilassa. Vain oman sivuston GET-pyynnöt.
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(e.request.method!=="GET"||u.origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(r=>{if(r.ok){const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));}return r;})
    .catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match("index.html"))));});
