import Page from "../page";
import {Outlet} from "react-router-dom";

function RootLayout() {
    return (
        <Page>
            <Outlet/>
        </Page>
    )
}

export default RootLayout;