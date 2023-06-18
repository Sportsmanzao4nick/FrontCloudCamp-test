import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom";
import RootLayout from "./root-layout";
import MainPage from "../../pages/main-page";
import CreatePage from "../../pages/create-page";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="" element={<RootLayout/>}>
            <Route index element={<MainPage/>}/>
            <Route path="create" element={<CreatePage/>}/>
        </Route>
    )
)

function RoutesComp() {
    return <RouterProvider router={router}/>;
}

export default RoutesComp;