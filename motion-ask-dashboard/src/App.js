import {Route, Routes} from "react-router-dom";
import {PathMaps} from "./router";
import {UploadVideoFile} from "./aws/UploadVideoFile";
function App() {
    console.log(PathMaps)
  return (
    <div className="App w-[100%]">
        <div>
            <Routes>
                {
                    PathMaps.map((path, index)=>{
                        return  <Route key={index} path={path.path} element={path.element}/>
                    })
                }
            </Routes>
        </div>
    </div>
  );
}

export default App;
