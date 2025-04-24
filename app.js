if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(reg => console.log('Service Worker Registered!', reg))
    .catch(err => console.warn('Error registering service worker', err));
}