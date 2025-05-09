// project settings, you can change only PROJECT_NAME, BASE_URL and WEBSITE_URL otherwise it can break the app
export const PROJECT_NAME = 'Foodyman marketplace';
export const BASE_URL =
  process.env.REACT_APP_BASE_URL || 'https://api.foodyman.org';
export const WEBSITE_URL = 'https://foodyman.org';
export const api_url = BASE_URL + 'http://3.88.45.144:8000/api/v1/';
export const api_url_admin = BASE_URL + 'http://3.88.45.144:8000/api/v1/dashboard/admin/';
export const api_url_admin_dashboard = BASE_URL + 'http://3.88.45.144:8000/api/v1/dashboard/';
export const IMG_URL = '';
export const export_url = BASE_URL + '/storage/';
export const example = BASE_URL + '/';

// map api key, ypu can get it from https://console.cloud.google.com/apis/library
export const MAP_API_KEY = 'AIzaSyDwJRYNFNk1V9oZP6VtxwbXIQVj9y7m0Zo';

// firebase keys, do not forget to change to your own keys here and in file public/firebase-messaging-sw.js
export const VAPID_KEY =
  '';
export const API_KEY = 'AIzaSyDn5BBe9mlgVMBo8oxyTuQTDpDlNrm8b20';
export const AUTH_DOMAIN = 'orderup-8528a.firebaseapp.com';
export const PROJECT_ID = 'orderup-8328a';
export const STORAGE_BUCKET = 'orderup-8528a.firebasestorage.app';
export const MESSAGING_SENDER_ID = '562599534458';
export const APP_ID = '1:562599534458:web:1f69ab88bdbde6d0bdc0c3';
export const MEASUREMENT_ID = 'G-33B6SJJKC9';

// recaptcha key, you can get it from https://www.google.com/recaptcha/admin/create
export const RECAPTCHASITEKEY = '6Ld_FzQrAAAAAEHjmPQ3kKeA15A8iYY4j8S-s-NV';

// demo data, no need to change
export const LAT = 47.4143302506288;
export const LNG = 8.532059477976883;
export const DEMO_SELLER = 334; // seller_id
export const DEMO_SELLER_UUID = '3566bdf6-3a09-4488-8269-70a19f871bd0'; // seller_id
export const DEMO_SHOP = 599; // seller_id
export const DEMO_DELIVERYMAN = 375; // deliveryman_id
export const DEMO_MANEGER = 114; // deliveryman_id
export const DEMO_MODERATOR = 297; // deliveryman_id
export const DEMO_ADMIN = 107; // deliveryman_id
export const SUPPORTED_FORMATS = [
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'image/svg',
];
