import {Image} from "@chakra-ui/react";

export const ContentCard = ({id="",creator="Alex Smith", title="React Developer", description="This is a course on react development", duration="54"})=>{
    return(
        <div className={"group p-4 flex gap-4 rounded-lg hover:bg-gradient-to-br from-violet-400 to-purple-600 hover:text-white hover:cursor-pointer hover:shadow-purple-400 hover:shadow-3xl w-full shadow-lg min-h-[20%]"}>
            <div>
                <Image className={"bg-black/20 group-hover:bg-white/40 lg:min-w-[200px] min-w-[150px] min-h-full rounded-lg"} src={""}/>
            </div>
            <div className={"pt-8 w-full h-full"}>
                <div className={"text-xl font-semibold text-left"}>
                    {title}
                </div>
                <div className={"text-sm text-left"}>
                    {description}
                </div>
                <div className={"text-sm text-left font-semibold mt-8"}>
                    By {creator}
                </div>
                <div className={"w-full text-left font-semibold text-sm align-bottom mt-8"}>
                    Duration: <span className={"ml-2"}>{duration}mins</span>
                </div>
            </div>
        </div>
    )
}