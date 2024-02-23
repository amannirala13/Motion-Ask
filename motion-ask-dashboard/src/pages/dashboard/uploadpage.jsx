import UploadVideoFile from "../../aws/UploadVideoFile";
import {CloseButton, Heading} from "@chakra-ui/react";
import {useNavigate} from "react-router";

export const UploadPage = ()=>{
    const nav=useNavigate()
    return(
        <div className={"w-full h-[100vh] grid place-content-center bg-gray-50"}>
            <div className={"w-full h-fit  rounded-xl shadow-lg"}>
                <CloseButton size={"lg"} m={8} onClick={()=>{nav(-1)}}/>
                <Heading className={"mb-8 text-center"}>Upload a new content</Heading>
                <div className={"grid w-full h-full"}>
                    <UploadVideoFile/>
                </div>
            </div>
        </div>
    )
}