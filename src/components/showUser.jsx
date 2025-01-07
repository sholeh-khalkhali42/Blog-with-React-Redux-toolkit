import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { selectByIdUser } from "../reducers/userSlice";
import { selectAllBlogs } from "../reducers/blogSlice";
import { Link } from "react-router-dom";
export const ShowUser = () => {
 const {userId} =useParams();
 console.log(userId,"fffff")
 const user=useSelector(state=>selectByIdUser(state, userId));
 const blogsme=useSelector(selectAllBlogs);
 const bloguser=useSelector(state=>{
   const blogs=selectAllBlogs(state);
   console.log("blogs",blogs)

 return blogs.filter(blog=>blog.user === userId);

});
console.log("blogsme",blogsme)

console.log("bloguser",bloguser)

const  totalblog= bloguser.map((blog) => (

<li key={blog.id}>
<Link to={`/blog/${blog.id}`}>{blog.title}</Link>
</li>

  
));
console.log(totalblog.length) ;

  return (
 <>
<section>
<h2> {user.fullname}</h2>
<ul>
  {

    totalblog.length > 0  ? 
    totalblog :
     <li> nothing to see</li> 

  }
</ul>
</section>

 </>
  )
}
