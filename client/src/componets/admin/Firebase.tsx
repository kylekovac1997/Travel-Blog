import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzfc_5zp-C_7-ms2V4xoPE36_yotjoXEE",
  authDomain: "travel-blog-406109.firebaseapp.com",
  projectId: "travel-blog-406109",
  storageBucket: "travel-blog-406109.appspot.com",
  messagingSenderId: "784130518117",
  appId: "1:784130518117:web:96fab1db32f9c5308fea8c",
  measurementId: "G-NN870YWMMT"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

