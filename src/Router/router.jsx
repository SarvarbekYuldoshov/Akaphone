import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Shopping from "../Components/Shopping/Shopping";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/shopping",
                element: <Shopping/>,
            } 
        ]
    },
])
export default router


