import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCcyQ23MutRJfqkNL4a-XJVkhDuy-orfS",
  authDomain: "totalgo-3c5d7.firebaseapp.com",
  projectId: "totalgo-3c5d7",
  storageBucket: "totalgo-3c5d7.firebasestorage.app",
  messagingSenderId: "134463276576",
  appId: "1:134463276576:web:8bce0edf6fbdbf04d1e45"
}

const app = getApps().length === 0? initializeApp(firebaseConfig) : getApps()[0]
const db = getFirestore(app)

export { db }
