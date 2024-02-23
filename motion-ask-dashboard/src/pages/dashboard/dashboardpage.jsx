import {ContentCard} from "../../components/cards";
import {Button, Input} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import {FiUpload} from "react-icons/fi";
import {useNavigate} from "react-router";
import {RouterPaths} from "../../router";
import { collection, getDocs } from "firebase/firestore";
import {Firestore} from "../../firebase";
import {useEffect, useState} from "react";

export function DashboardPage(){

    const [videosList, setVideosList] = useState([])

    useEffect(() => {
        getDocs(collection(Firestore, "videos"))
            .then(docs=>{
                let list = []
                docs.forEach((doc)=>{
                    let d = doc.data()
                    d.id = doc.id
                    list.push(d)
                })
                setVideosList(list)
            })
            .catch(e=>{
                console.error(e)
            })
    }, []);

    const nav = useNavigate()
    return(
        <div className={"grid justify-center p-4 m-4"}>
            <div className={"flex gap-4 items-center justify-center flex-nowrap"}>
                <div className={`bg-gray-100 rounded-[500px] p-4 w-full font-semibold text-lg flex`}>
                    <BiSearch className={"text-3xl text-center mr-4 text-black/50"}/> <Input
                    placeholder={"Search anything"} variant={"unstyled"}/>
                </div>
                <div
                    className={"py-4 px-2 text-white text-center grid place-content-center font-semibold text-lg rounded-xl h-fit min-w-[25%] flex-grow bg-gradient-to-b from-violet-400 to-violet-600 hover:shadow-xl hover:shadow-purple-300 hover:cursor-pointer"}
                    onClick={()=>{nav(`/home/${RouterPaths.uploadVideo}`)}}>
                    <div className={"flex gap-4 items-center"}>
                        <FiUpload/><span>Upload video</span>
                    </div>
                </div>
            </div>
            <div className={`w-full grid grid-cols-1 gap-4 h-full p-4 mt-8`}>
                {
                   videosList.map((video, index)=>{
                       return <ContentCard data={video}/>
                   })
                }
            </div>
        </div>
    )
}