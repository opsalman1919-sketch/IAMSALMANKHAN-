const CACHE='kgpk-v8-owner-render-repair-20261114';
const CORE=['./','./index.html','./manifest.json'];

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    await Promise.all(CORE.map(async url=>{
      try{
        const response=await fetch(new Request(url,{cache:'reload'}));
        if(response.ok) await cache.put(url,response);
      }catch(error){console.warn('[KHANS SW] Pre-cache skipped:',url,error);}
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith('kgpk-')&&key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET') return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin) return;

  if(request.mode==='navigate'){
    event.respondWith((async()=>{
      try{
        const fresh=await fetch(request,{cache:'no-store'});
        if(fresh.ok){
          const cache=await caches.open(CACHE);
          await cache.put('./index.html',fresh.clone());
        }
        return fresh;
      }catch(error){
        return (await caches.match('./index.html'))||Response.error();
      }
    })());
    return;
  }

  event.respondWith((async()=>{
    const cached=await caches.match(request);
    if(cached) return cached;
    try{
      const fresh=await fetch(request);
      if(fresh.ok){
        const cache=await caches.open(CACHE);
        await cache.put(request,fresh.clone());
      }
      return fresh;
    }catch(error){
      return Response.error();
    }
  })());
});
