import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import App from "../App";
import { Singleblog } from "../components/Singleblog";
import { CreateblogForm } from "../components/CreateblogForm";
import { EditBlogForm } from "../components/EditBlogForm";
import { Authorlist } from "../components/Authorlist";
import { ShowUser } from "../components/showUser";
import { CreateNewUser } from "../components/CreateNewUser";
export const router=createBrowserRouter([
   
    {
path:"/",
element:<Mainlayout/>,
errorElement:(
    <h3>not found</h3>
),
children:[
    {
        path:"/",
        element: <App/>,
    }, 
    {
        path:"/blog/:blogId",
        element:<Singleblog/>

    },
    {
        path:"/blog/createPost",
        element:<CreateblogForm/>

    },
    {
        path:"/editBlog/:blogId",
        element:<EditBlogForm/>

    },
    {
        path:"/users",
        element:<Authorlist/>

    },
    {
        path:"/users/:userId",
        element:<ShowUser/>

    },
    {path:"/users/createuser",
        element:<CreateNewUser/>
    },
]



    }
])