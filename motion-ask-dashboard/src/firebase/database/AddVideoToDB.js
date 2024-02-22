
import { collection, addDoc } from "firebase/firestore";
import {Firestore} from "../Firestore";

export function AddVideoToDB(data){
    return new Promise((resolve, reject)=>{
        addDoc(collection(Firestore,"videos"), data)
            .then(doc=>{
                resolve(doc)
            })
            .catch(e=>{
                reject(e)
            })
    })
}