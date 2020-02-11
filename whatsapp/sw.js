let swCache = 'whatsappopenchat-sw-v1';

self.addEventListener('install', event => {

  // console.log('SW Install Event');
  // console.log(event);

  event.waitUntil(
    caches.open(swCache).then(cache => {
      return cache.addAll([
        './icon/apple-icon-57x57.png',
        './icon/apple-icon-60x60.png',
        './icon/apple-icon-72x72.png',
        './icon/apple-icon-76x76.png',
        './icon/apple-icon-114x114.png',
        './icon/apple-icon-120x120.png',
        './icon/apple-icon-144x144.png',
        './icon/apple-icon-152x152.png',
        './icon/apple-icon-180x180.png',
        './icon/android-icon-192x192.png',
        './icon/favicon-32x32.png',
        './icon/favicon-96x96.png',
        './icon/favicon-16x16.png',
        './icon/ms-icon-144x144.png',
        './index.html'
      ]).then(() => self.skipWaiting())
    })
  );
});

self.addEventListener('activate',  event => {

  // console.log('SW Activate Event');
  // console.log(event);

  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {

  // console.log('SW Fetch Event');
  // console.log(event);

  event.respondWith (
    caches.match(event.request, {ignoreSearch:true, ignoreMethod:true, ignoreVary:true, cacheName:swCache}).then(response => {
      return response || fetch(event.request);
    })
  )
});