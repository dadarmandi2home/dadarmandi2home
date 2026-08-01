self.addEventListener("install", (e) => {
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  self.clients.claim();
});
self.addEventListener("fetch", (e) => {
  // pass-through: always use the network, no offline caching for now
  e.respondWith(fetch(e.request));
});
