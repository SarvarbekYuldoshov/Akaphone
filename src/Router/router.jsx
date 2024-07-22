import { createBrowserRouter } from "react-router-dom";
import Korzinka from "../Components/Korzinka/Korzinka";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/korzinka",
                element: <Korzinka/>,
            } 
        ]
    },
])
export default router


