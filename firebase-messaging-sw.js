importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyA8qVjWmPSaw-BXLAtbWtsfCmQOY3ovISo",
  authDomain: "neetas-food.firebaseapp.com",
  projectId: "neetas-food",
  storageBucket: "neetas-food.firebasestorage.app",
  messagingSenderId: "30666992059",
  appId: "1:30666992059:web:e7d7b00219940dd7bbbc9e",
  measurementId: "G-GWYR626DWM"
});

const messaging = firebase.messaging();

// Handles background notifications when app/browser is closed
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/icon-192x192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
