import {HomePage} from "../pages/homepage";
import {DashboardPage} from "../pages/dashboard/dashboardpage";
import {UploadPage} from "../pages/dashboard/uploadpage";

export const RouterPaths = {
    home: "home",
    login: "login",
    dashboard: "dashboard",
    uploadVideo: "upload-video"
}

export const PathMaps = [
    { path: `/`, element: <HomePage/> },
    { path: `/${RouterPaths.home}/*`, element: <HomePage/> },
    { path: `/${RouterPaths.login}`, element: <div>Login</div> },
]

export const DashboardPathMaps = [
    {path: `/`, element: <DashboardPage/>},
    {path: `/${RouterPaths.dashboard}/`, element: <DashboardPage/>},
    {path: `/${RouterPaths.uploadVideo}`, element: <UploadPage/>},
]
