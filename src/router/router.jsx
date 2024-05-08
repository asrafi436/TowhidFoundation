import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                index:true,
                element: <h1>Home</h1>
            },
            {
                path:"about",
                element: <h1>About</h1>
            }

        ]
    }
])