import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                index:true,
                element: <Home/>
            },
            {
                path:"/home",
                element: <Home/>
            },
            
            {
                path:"about",
                element: <h1>About</h1>
            }

        ]
    }
])