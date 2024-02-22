import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC8S8ZDPblBW2qpbibcs0WIdjAFeEulakQ",
    authDomain: "motion-ask-bac31.firebaseapp.com",
    projectId: "motion-ask-bac31",
    storageBucket: "motion-ask-bac31.appspot.com",
    messagingSenderId: "1047191240152",
    appId: "1:1047191240152:web:0532df963ad039ab13c6ad",
    measurementId: "G-3YDB91NG1S"
};
const app = initializeApp(firebaseConfig);

export const FirebaseApp = app