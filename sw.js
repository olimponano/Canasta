// Service worker mínimo: sólo existe para que Chrome permita instalar Canasta como app.
// No guarda nada en caché, así cada versión nueva que subas se ve al instante.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
