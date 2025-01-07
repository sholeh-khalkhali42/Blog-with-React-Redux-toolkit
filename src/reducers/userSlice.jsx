import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllusers ,addUser,deleteuser} from "../services/blogServices";
// const initialState = [
//   { id: "1", fullname: "sholeh khalkhali" },
//   { id: "2", fullname: "hamze jahani" },
//   { id: "3", fullname: "danial hazeri" }, 
// ];
export const fetchUsers=createAsyncThunk("/userse/fetcrs",async()=>{
    const response =await getAllusers();
    console.log(response.data,"data az bank user")
    return response.data;
   
});
export const fetchAddUsers=createAsyncThunk("/userse/Adduser",async(inisialUser)=>{
    const response =await addUser(inisialUser);
    console.log(response.data," create asynk response createuser");
      return response.data;
   
});
export const fetchdelete=createAsyncThunk("/users/fetchdelete",async (intialId)=>{
  console.log(intialId," delete asynk response createuser");
   deleteuser(intialId);
   return intialId
})
const userSlice=createSlice({
    name:"users",
    initialState:[],
    reducers:{},
    extraReducers:builder=>{
      builder
      .addCase(fetchUsers.fulfilled,(state,action)=>{
        return action.payload;
      }).addCase(fetchAddUsers.fulfilled,(state,action)=>{ 
      
        console.log(action.payload," addcase  actionpayload createuser");

         state.push(action.payload);
      
    }).addCase(fetchdelete.fulfilled,(state,action)=>{
      console.log(action.payload,"action paylod  fetchdeltet")
return state.filter(user=>user.id !==action.payload);
    })
  }
});

export const selecAllUser=(state)=>state.users;
export const selectByIdUser=(state,userId)=>state.users.find(user=>user.id===userId);
export default userSlice.reducer;