import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Shopping from "../Components/Shopping/Shopping";
import Home from "../Components/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path: "/shopping",
                element: <Shopping/>,
            } 
        ]
    },
])
export default router


