
import VideoThumbnail from 'react-video-thumbnail';
import {useNavigate, useParams} from "react-router";
import {RouterPaths} from "../../router";

export const ContentCard = ({data})=>{
    const nav = useNavigate()

    return(
        <div className={"group p-4 flex gap-4 rounded-lg hover:bg-gradient-to-br from-violet-400 to-purple-600 hover:text-white hover:cursor-pointer hover:shadow-purple-400 hover:shadow-3xl w-full shadow-lg min-h-[20%]"}
        onClick={()=>{nav(`/home/${RouterPaths.course}/${data.id}`)}}>
            <VideoThumbnail
                videoUrl={data.content}
                thumbnailHandler={(thumbnail) => console.log(thumbnail)}
            />
            <div className={"pt-8 w-full h-full"}>
                <div className={"text-3xl font-semibold text-left"}>
                    {data.title}
                </div>
                <div className={"text-left"}>
                    {data.description}
                </div>
                <div className={"text-left font-semibold mt-8"}>
                    By {data.creator}
                </div>
                <div className={"w-full text-left font-semibold align-bottom mt-8"}>
                    Duration: <span className={"ml-2"}>{data.duration} mins</span>
                </div>
            </div>
        </div>
    )
}