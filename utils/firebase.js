import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  query,
  where,
  onSnapshot,
} from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSENGER_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// const unsub = onSnapshot(collection(db, 'favourites'), (doc) => {
//   console.log('Current data: ', doc.data());
// });

async function addData(recipeId) {
  try {
    const docRef = await setDoc(doc(db, 'favourites', `${recipeId}`), {
      id: recipeId,
    });
    if (docRef.id) {
      return true;
    }
  } catch (err) {
    return false;
  }
}

async function getData() {
  try {
    const querySnapshot = await getDocs(collection(db, 'favourites'));
    const ids = querySnapshot.docs.map((q) => q.data());
    return ids;
  } catch (err) {
    return [];
  }
}

async function removeData(id) {
  try {
    const favouritesRef = collection(db, 'favourites');
    const q = query(favouritesRef, where('id', '==', id));
    console.log(q);
    // await deleteDoc(doc(db, 'favourites', id));
    return true;
  } catch (err) {
    return false;
  }
}

export { db, auth, addData, getData, removeData };
