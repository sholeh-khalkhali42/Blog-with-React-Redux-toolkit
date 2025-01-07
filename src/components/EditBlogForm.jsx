import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { updateApiBlog, selectById } from "../reducers/blogSlice";
import { useNavigate, useParams } from "react-router-dom";
export const EditBlogForm = () => {
    const {blogId}=useParams();
    console.log(blogId);
    const blog=useSelector((state)=>selectById(state,blogId));
    const [title,setTitle]=useState(blog.title);
    const[content,setContent]=useState(blog.content);
   
   const  dispatch=useDispatch();
   const navigate=useNavigate();
   const OnTitleChange=(e)=>setTitle(e.target.value);
   const OnContentChange=(e)=>setContent(e.target.value);

   const handleSubmitForm=()=>{
        if(title&&content){
  console.log(title,"title-kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"),
dispatch(updateApiBlog({id:blogId,date:blog.date,title,content,user:blog.user,
    reactions:
    { eye:"10",
      mound:"0",
      akhm:"0",},
}));
       
        navigate(`/blog/${blogId}`);
        setTitle("");
        setContent("");
        }
    }
    if(!blog){
        return(
            <section>
                there is not this post
            </section>
        )
    }
  return (
   <>
      <section>
   <h2>Edit post</h2>
    <form>
        <label>post title</label>
        <input name="titlepost" type="text" onChange={OnTitleChange} value={title}/>
        <label>post content</label>
        <textarea name="titlepost" type="text" onChange={OnContentChange} value={content}/>
        <button onClick={handleSubmitForm}>edit Post</button>
    </form>
    </section>
   </>
  )
}
