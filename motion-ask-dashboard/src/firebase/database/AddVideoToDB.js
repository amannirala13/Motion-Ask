
import { collection, setDoc, doc } from "firebase/firestore";
import {Firestore} from "../Firestore";

export function AddVideoToDB(data){
    return new Promise((resolve, reject)=>{
        const docRef = doc(Firestore, "videos", data.id)
        setDoc(docRef, data)
            .then(doc=>{
                resolve(doc)
            })
            .catch(e=>{
                reject(e)
            })
    })
}