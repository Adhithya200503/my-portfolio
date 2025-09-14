import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./components/Home";
import ProjectDescription from "./components/ProjectDescription";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
               path:"/project",
               element:<ProjectDescription />
            },
            {
                path:"/about",
                element:<p>Hello</p>
            }
        ]
    }
])