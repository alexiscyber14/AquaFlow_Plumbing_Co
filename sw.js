self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["https://alexiscyber14.github.io/portfolio/","./index.html", "./src/style.css","./src/index.js","./images/dev2.png","./images/1.jpg","./images/cn.png","./images/cy.png","./images/dev1.png","./images/dev3.png","./images/er.jpg","./images/favicon.png","./images/icons8-android-66.png","./images/icons8-angular-64.png","./images/icons8-asp-64.png","./images/icons8-c-50.png","./images/icons8-c-96.png","./images/icons8-c-100.png","./images/icons8-database-64.png","./images/icons8-db-48.png","./images/icons8-django-64.png","./images/icons8-go-32.png","./images/icons8-ios-48.png","./images/icons8-java-48.png","./images/icons8-javascript-64.png","./images/icons8-microsoft-48.png","./images/icons8-mongodb-48.png","./images/icons8-mysql-48.png","./images/icons8-node-js-64.png","./images/icons8-oracle-pl-sql-100.png","./images/icons8-php-64.png","./images/icons8-postgresql-48.png","./images/icons8-python-48.png","./images/icons8-ruby-48.png","./images/icons8-science-64.png","./images/icons8-vue-js-48.png","./images/it.png","./images/mk.png","./images/MYSITE1.jpg","./images/MYSITE2.jpg","./images/MYSITE3.Jpg","./images/p1.jpg","./images/red.png","./images/se.png","./images/sh1.jpg","./images/sh2.png","./images/sh3.png","./images/sh4.jpeg","./images/sh5.jpg","./images/sh6.jpg","./images/sm.png","./images/ui.png","./images/upd.png","./images/vec.png","./images/web-development-800x500.webp"]);
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