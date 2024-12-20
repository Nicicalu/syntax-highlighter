// Choose a cache name
const cacheName = "cache-v1";
// List the files to precache
const precacheResources = [
  "/",
  "/index.html",
  "/index.css",
  "/index.js",
  "/assets/code-bereinigen.png",
  "/assets/linkedin.svg",
  "/assets/nicolas.png",
  "/assets/RocherColorGX.woff2",
  "/assets/screenshot.png",
  "/assets/syntaxhighlighter.css",
  "/assets/syntaxhighlighter.js",
  "/assets/favicon/android-chrome-192x192.png",
  "/assets/favicon/android-chrome-512x512.png",
  "/assets/favicon/apple-touch-icon.png",
  "/assets/favicon/browserconfig.xml",
  "/assets/favicon/favicon-16x16.png",
  "/assets/favicon/favicon-32x32.png",
  "/assets/favicon/favicon.ico",
  "/assets/favicon/mstile-150x150.png",
  "/assets/favicon/safari-pinned-tab.svg",
  "/assets/favicon/site.webmanifest",
];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener("install", (event) => {
  console.log("Service worker install event!");
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activate event!");
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener("fetch", (event) => {
  console.log("Fetch intercepted for:", event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
