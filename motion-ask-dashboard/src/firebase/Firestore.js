
import { getFirestore } from "firebase/firestore";
import {FirebaseApp} from "./FirebaseApp";

export const Firestore = getFirestore(FirebaseApp)