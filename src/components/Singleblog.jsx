// blogDeleted,
import { useSelector,useDispatch } from "react-redux";
import { useParams ,Link, useNavigate} from "react-router-dom"
import {  deleteApiBlog, selectById } from "../reducers/blogSlice";
import { ShowTime } from "./ShowTime";
import FindAuthor from "./FindAuthor";
export const Singleblog = () => {
    const{blogId}=useParams();
    const navigate=useNavigate();
  const dispatch=useDispatch();
    const blog =useSelector(state=>selectById(state,blogId))
        if(!blog){
            return(
                <p className="text-center">there is no post dear</p>
            )
           
        }
    const    handelDelete= ()=>{
            if(blog){
             
              dispatch(deleteApiBlog(blog.id));
           navigate("/");
            }
        }
  return (
 <>
    <h3>title:{blog.title}</h3>
    <ShowTime timeStamp={blog.date} /><FindAuthor userId={blog.user}/>
<p>{blog.content}</p>
<Link  to={`/editBlog/${blog.id}`} className="button mr-10"> Edit Post</Link>  
<button className="button" onClick={handelDelete}>delete</button>

   </>
  )
}
