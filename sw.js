const CACHE = 'kgpk-v3';
const CORE = ['./', './index.html', './manifest.json'];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);

    for (const url of CORE) {
      try {
        const request = new Request(url, { cache: 'reload' });
        const response = await fetch(request);

        if (response.ok) {
          await cache.put(url, response);
        }
      } catch (_) {}
    }

    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();

    await Promise.all(
      keys
        .filter(k => k.startsWith('kgpk-') && k !== CACHE)
        .map(k => caches.delete(k))
    );

    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  // Always try the newest HTML first
  // so GitHub Pages updates appear immediately.
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(event.request, {
          cache: 'no-store'
        });

        const cache = await caches.open(CACHE);
        cache.put('./index.html', response.clone());

        return response;
      } catch (_) {
        return (
          (await caches.match('./index.html')) ||
          Response.error()
        );
      }
    })());

    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(event.request);

    if (cached) return cached;

    try {
      const response = await fetch(event.request);

      if (
        response.ok &&
        new URL(event.request.url).origin === self.location.origin
      ) {
        const cache = await caches.open(CACHE);
        cache.put(event.request, response.clone());
      }

      return response;
    } catch (_) {
      return Response.error();
    }
  })());
});
