import ReactPlayer from "react-player";
import {useEffect, useState} from "react";
import {doc, getDoc} from "firebase/firestore";
import {Firestore} from "../../firebase";
import {useParams} from "react-router-dom";
import {Media, Video } from '@vidstack/player-react';

export function CoursePage(){
    const {id} = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        if (id){
            console.log("ID: ", id)
            getDoc(doc(Firestore, "videos", id))
                .then(doc=>{
                    setData(doc.data())
                })
                .catch(e=>{
                    console.error(e)
                })
        }
    }, []);

    return(
        (!data)?
            <div className={"w-full h-full grid place-content-center"}>
                No content selected
            </div>
            :
            <div className={"w-full h-full grid place-content-center"}>
                <div className={"w-full"}>
                    <Media>
                        <Video loading="visible" poster={"https://i.imgur.com/BYm1MKX.jpeg"} controls preload="true">
                            <video loading="visible" poster={"https://i.imgur.com/BYm1MKX.jpeg"} src={data.content} preload="none" data-video="0" controls />
                        </Video>
                    </Media>
                </div>
                <div className={""}>
                    <div className={"font-bold text-3xl mt-4 ml-8"}>{data.title}</div>
                    <div className={"text-xl mt-2 ml-8"}>{data.description}</div>
                    <div className={"font-semibold text-xl mt-8 ml-8"}>Duration: {data.duration}mins</div>
                </div>

                <div className={"w-full h-[200px] grid place-content-center"}>
                    Chat Interface
                </div>
            </div>
    )
}