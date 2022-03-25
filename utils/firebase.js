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
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSENGER_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

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
