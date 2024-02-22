import {useNavigate} from "react-router";

export function NavButton({text="", path="/"}){
    const nav = useNavigate()
    return(
        <div onClick={()=>{nav(path)}} className={"hover:bg-gradient-to-b from-violet-400 to-violet-600 grid place-content-center font-semibold font-mono p-6 m-4 hover:shadow-lg rounded-lg text-white"}>
            {text}
        </div>
    )
}