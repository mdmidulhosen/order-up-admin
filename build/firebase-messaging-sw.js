/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
// This a service worker file for receiving push notifitications.
// See `Access registration token section` @ https://firebase.google.com/docs/cloud-messaging/js/client#retrieve-the-current-registration-token

// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
importScripts('https://cdn.jsdelivr.net/npm/idb-keyval@6/dist/umd.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: 'AIzaSyDn5BBe9mlgVMBo8oxyTuQTDpDlNrm8b20',
  authDomain: "orderup-8328a.firebaseapp.com",
  projectId: "orderup-8328a",
  storageBucket: "orderup-8328a.appspot.com",
  messagingSenderId: "562599534458",
  appId: "1:562599534458:web:1f69ab88bdbde6d0bdc0c3",
  measurementId: 'G-33B6SJJKC9',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// Handle incoming messages while the app is not in focus (i.e in the background, hidden behind other tabs, or completely closed).
messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
  idbKeyval.set(notificationTitle, notificationOptions.body);
});
