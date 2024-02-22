import {NavButton} from "../buttons";

export function NavBar(){
    return(
        <div className={"min-w-[20%] h-[100vh] bg-[#1c1624]"}>
            <div className={"w-full grid place-content-center p-8 text-white font-bold border-b-2 border-white/10"}>MOTION ASK</div>
            <NavButton text={"Dashboard"} path={"/"}/>
            <NavButton text={"Content Manager"}/>
            <NavButton text={"Settings"}/>
            <NavButton text={"About"}/>
        </div>
    )
}