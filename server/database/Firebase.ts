import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore/lite';

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
export const db = getFirestore(app);



// // View all documents in the "Travelled" collection
// export async function viewAllDocuments() {
//   const travelledCol = collection(db, "Travelled ");
//   const travelledSnapshot = await getDocs(travelledCol);

//   travelledSnapshot.forEach((doc) => {
//     console.log(doc.id, '=>', doc.data());
//   });
// }

