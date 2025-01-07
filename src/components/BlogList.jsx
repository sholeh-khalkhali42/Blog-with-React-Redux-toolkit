import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { selectAllBlogs } from '../reducers/blogSlice';
import { ShowTime } from './ShowTime';
import FindAuthor from './FindAuthor';
import  ReactionsButtons from './ReactionsEmoji';
import { useEffect } from 'react';
import {fetchBlogs} from '../reducers/blogSlice'
//import { nanoid } from '@reduxjs/toolkit';
import { Snniper } from './Snnipers';
export const BlogList = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const blogs=useSelector(selectAllBlogs);
  const blogStatus=useSelector((state)=>state.blogse.status);
  useEffect(()=>{ 
    if(blogStatus==="Idle"){
   
      dispatch(fetchBlogs());
    }
   
  },[blogStatus,dispatch]);
  let content;
  if( blogStatus==="loading"){
    content=<Snniper text="loading ..."/>
    }
else if( blogStatus==="completed"){
  const orderlist=blogs.slice().sort((a,b)=>b.date.localeCompare(a.date));
 content =orderlist.map(blog=>(
<article key={blog.id} className='blog-content'>
<h3>{blog.title}</h3>
<div style={{margin:"10px"}}>
<ShowTime timeStamp={blog.date} /><FindAuthor userId={blog.user}/>
<ReactionsButtons blog={blog}/>
</div>

<p >
{blog.content}
</p>
<Link to={`/blog/${blog.id}`}  style={{backgroundColor:"#5449d7"}}className="button muted-button">  show total text</Link>

</article>

));
}else if(blogStatus==="failed"){
content =<div>error</div>

}
  

  return (
  <>
  <section >
  <button style={{width:"100%" ,border:"1px solid",backgroundColor:"#3127a7"}} onClick={()=>navigate("/blog/createPost")}>Add Post</button>
  <h2>Total Post</h2>
    {content}
    </section>
  </>
  );
}

