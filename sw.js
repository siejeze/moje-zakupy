// Service worker — pozwala zainstalować apkę i działać bez internetu.
// Strategia "sieć najpierw": gdy jest internet, zawsze pobiera najnowszą wersję
// (więc aktualizacje z GitHuba pojawiają się od razu); offline korzysta z kopii.
// Numer w nazwie cache podbijamy przy każdej aktualizacji plików.
const CACHE = "zakupy-v3";
const ASSETS = [
  ".",
  "index.html",
  "data.js",
  "manifest.webmanifest",
  "icon-192.png",
  "icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    // sieć najpierw; przy okazji odświeżamy kopię w cache
    fetch(e.request).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() =>
      // brak sieci → kopia z cache (a dla nawigacji fallback na index.html)
      caches.match(e.request).then((hit) => hit || caches.match("index.html"))
    )
  );
});
