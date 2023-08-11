self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["https://alexiscyber14.github.io/AquaFlow_Plumbing_Co/","./index.html", "./src/style.css","./src/index.js","./images/b1.jpg","./images/b3.jpg","./images/back.jpg","./images/w1.png","./images/w2.png","./images/w3.png"]);
        })
    );
});

self.addEventListener("fetch", e =>{
  e.respondWith(
    caches.match(e.request).then(response =>{
        return response || fetch(e.request);
    })
  )
})
