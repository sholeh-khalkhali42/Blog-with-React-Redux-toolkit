// blogadded 
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewblog} from "../reducers/blogSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const CreateblogForm = () => {
   const [title,setTitle]=useState("");
   const[content,setContent]=useState("");
   const[userId,setUserId]=useState("");
   const[requestStatus,setRequestStatue]=useState("idle");
   const dispatch=useDispatch();
   const navigate=useNavigate();
   const users=useSelector((state)=>state.users);
   console.log(users,"users")
   const OnTitleChange=(e)=>setTitle(e.target.value);
   const OnContentChange=(e)=>setContent(e.target.value);
   const OnUserIdChange=(e)=>setUserId(e.target.value);
   const canSave=[title,content,userId].every(Boolean)&&requestStatus==="idle";
   const handleSubmitForm= async()=>{
            if(canSave){
              setRequestStatue("pending")
              console.log("createblogsholeh");
  try{
   await dispatch(addNewblog(
    {
      id:nanoid(),
       date:new Date().toISOString(),title,content,
  user:userId,
  reactions:
  { eye:"10",
    mound:"0",
    akhm:"0",}})); console.log("createblogsholehfull");
    setTitle("");
            setContent("");
            setUserId("");
            navigate("/");
  }catch(error){
    console.log("failed to save",error);
  }
  finally{
    setRequestStatue("idle")

  }
 



  }
}
// dispatch(blogadded({id:nanoid(), date:new Date().toISOString(),title,content,user:userId,reactions:{ eye:10,mound:0,
//   akhm:0,}}));
//         setTitle("");
//         setContent("");
//         setUserId("");
//         navigate("/");
//         }
    
  return (
   <>
   <section>
   <h2>add new post</h2>
    <form>
        <label>post title</label>
        <input name="titlepost" type="text" onChange={OnTitleChange} value={title}/>
        <label>choose author</label>
        <select  name="author" value={userId} onChange={OnUserIdChange}>
        <option  value="">nothing</option>
{users.map(user=> (<option  key={user.id} value={user.id}>{user.fullname}</option>))}



        </select>
        <label>post content</label>
        <textarea name="titlepost" type="text" onChange={OnContentChange} value={content}/>
        <button  disabled={!canSave} onClick={handleSubmitForm}>Add Post</button>
    </form>
    </section>
   </>
  )
}
