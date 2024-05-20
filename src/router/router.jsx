import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { AboutUs } from "../pages/AboutUs";
import { Services } from "../pages/Services";
import { Education } from "../pages/Education";
import { Medical } from "../pages/Medical";
import { Ambulance } from "../pages/Ambulance";
import { Others } from "../pages/Others";
import { Activities } from "../pages/Activities";
import { Notices } from "../pages/Notices";
import { Login } from "../pages/Login";

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
                path:"about-us",
                element: <AboutUs/>
            },
            {
                path:"/services",
                element: <Services/>,
                children:[
                    {
                        path:"/services/education",
                        element:<Education/>
                    },
                    {
                        path:"/services/medical",
                        element:<Medical/>
                    },
                    {
                        path:"/services/ambulance",
                        element:<Ambulance/>
                    },
                    {
                        path:"/services/others-services",
                        element:<Others/>
                    },                    
                ]
            },
            {
                path:"/activities",
                element: <Activities/>
            },
            {
                path:"/notice",
                element: <Notices/>
            },
            {
                path:"/login",
                element: <Login/>
            },

            

        ]
    }
])