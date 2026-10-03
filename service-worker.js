importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js','https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey:"AIzaSyA8qVjWmPSaw-BXLAtbWtsfCmQOY3ovISo",
  authDomain:"neetas-food.firebaseapp.com",
  projectId:"neetas-food",
  storageBucket:"neetas-food.firebasestorage.app",
  messagingSenderId:"30666992059",
  appId:"1:30666992059:web:e7d7b00219940dd7bbbc9e"
});
firebase.messaging(); // shows notifications that arrive while the app is closed

self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});
