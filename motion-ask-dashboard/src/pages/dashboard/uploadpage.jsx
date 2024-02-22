import UploadVideoFile from "../../aws/UploadVideoFile";
import {CloseButton, Heading} from "@chakra-ui/react";

export const UploadPage = ()=>{
    return(
        <div className={"w-full h-[100vh] grid place-content-center bg-gray-50"}>
            <div className={"w-full h-fit  rounded-xl shadow-lg"}>
                <CloseButton
                <Heading className={"mb-8 text-center"}>Upload a new content</Heading>
                <div className={"grid w-full h-full"}>
                    <UploadVideoFile/>
                </div>
            </div>
        </div>
    )
}