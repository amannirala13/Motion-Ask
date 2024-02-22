import UploadVideoFile from "../aws/UploadVideoFile";
import {Route, Routes} from "react-router-dom";
import {DashboardPathMaps} from "../router/paths";
import {NavBar} from "../components/nav";

export const HomePage = ()=>{
    return(
        <div className={`flex max-w-[100%]`}>
            <NavBar/>
            <div className={"w-full h-full"}>
                <Routes>
                    {DashboardPathMaps.map((item, index)=>{
                        return (<Route key={index} path={item.path} element={item.element}/>)
                    })}
                </Routes>
            </div>
        </div>
    )
}