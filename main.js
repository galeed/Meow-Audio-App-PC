// main.js - Inicialización PWA para Meow Audio App

// 1. Registro del Service Worker para soporte Offline
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((registration) => {
        console.log('🐾 [SW] Service Worker registrado con éxito:', registration.scope);
      })
      .catch((error) => {
        console.error('🐾 [SW] Error al registrar el Service Worker:', error);
      });
  });
}

// 2. Control para la instalación como PWA / App independiente
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Previene que el navegador muestre el banner automático por defecto
  e.preventDefault();
  deferredPrompt = e;
  console.log('🐾 [PWA] Lista para ser instalada.');
});

// 3. Confirmación de inicio en modo Standalone / App
window.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('🐾 [PWA] Ejecutándose en modo aplicación independiente.');
  }
});
