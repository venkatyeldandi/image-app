import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAa56RXjIjOwJs8wcqnYgfQEkKvgb-BXSk",
    authDomain: "image-app-d4e3a.firebaseapp.com",
    projectId: "image-app-d4e3a",
    storageBucket: "image-app-d4e3a.appspot.com",
    messagingSenderId: "735477571889",
    appId: "1:735477571889:web:478a0ce6597ddf6524d010",
    measurementId: "G-9K7HCLXV2R"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
export { auth };
export { firestore };