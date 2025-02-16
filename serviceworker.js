self.addEventListener("install", (event) => {
    console.log("Service Worker instalado");
    event.waitUntil(
      caches.open("pacman-cache").then((cache) => {
        return cache.addAll([
          "/index.html",
          "/manifest.json",
          "/img/pacman-canvas-logo.png",  // Altere para o nome correto do ícone
          "/style.css",
          "/pacman-canvas.css",
          "/js/pacman-canvas.js",
          "/mp3/eat-ghost.mp3",  // Exemplo de som (verifique os arquivos na pasta)
          "/mp3/eat-fruit.mp3"
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  