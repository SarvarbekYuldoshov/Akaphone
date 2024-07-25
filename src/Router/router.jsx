import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Shopping from "../Components/Shopping/Shopping";
import Home from "../Components/Home";
import Details from "../Components/Detail/Details";

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
            } ,
            {
                path: "/detail/:id",
                element: <Details/>
            }
        ]
    },
])
export default router


