import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAddUsers } from "../reducers/userSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

   

export const CreateNewUser = () => {
    const [fullname,setfullname]=useState("");
   
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const addChangeUser=e=>setfullname(e.target.value);
    
  const  handleSubmitForm=()=>{  
    if(fullname){ 
       
        console.log("fullename",fullname)
  
   dispatch(fetchAddUsers({id:nanoid(),fullname}))
   setfullname("");
   navigate("/users");



}
  }
  return (
   <form   >
    <label>
        <input type="text" value={fullname} name="fullname" id="fullname" onChange={addChangeUser}/>
    </label>
    <button disabled={!fullname} onClick={handleSubmitForm} >add user</button>
    </form>
  )
}
