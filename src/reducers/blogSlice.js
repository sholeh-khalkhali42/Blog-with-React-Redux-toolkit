// , updateBlog 
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createBlog, getAllblogs,deleteBlog,updateBlog} from "../services/blogServices";
import { current } from "@reduxjs/toolkit";
const initialState = {
  blogsme: [

    // {id:nanoid(),
    //   title:"post 1",
    //   date:new Date().toISOString(),
    //   content:"this is the test",
    //   user:"sjfhjsdhfsdhjkh",
    //   reactions:  {
    //   eye:0,
    //    mound:0,
    //    akhm:0
    //   },
    // },
  ],
  status: "Idle",
  error: null,
};
export const fetchBlogs = createAsyncThunk("/blogse/fetchBlogs/", async () => {
  const response = await getAllblogs();
  console.log(response.data,"responsedata  fetchblogaz blogs")
return response.data;
});


export const addNewblog = createAsyncThunk("/blog/addNewBlog", async initialblog => {
  const response=await createBlog(initialblog);
  console.log(response.data," create asynk response createblog");
 return  response.data;
})
export const deleteApiBlog = createAsyncThunk("/blog/deleteblog", async (initialblogId) => {
  console.log(initialblogId,"initialblogId  dleteapiblog delete");
  await deleteBlog(initialblogId);

 return  initialblogId;
})
export const updateApiBlog = createAsyncThunk("/blog/updatelog", async initialblog => {
  // console.log(initialblog,"initialblogId  updateApi ");
  const response=await updateBlog(initialblog,initialblog.id);
  console.log(initialblog,"initialblog.....Id ");
  console.log(response.data,"response.data updateApi ");
 return  response.data;
})


const BlogSlice = createSlice({
  name: "blogse",
  initialState: initialState,
  reducers: {
  //   blogadded: {
  //     reducer(state, action) {
  //       state.blogsme.push(action.payload);
  //       console.log(state,"state blogslise added");
  //       console.log(state.blogsme,"stateblogsme blogslise added");
  //     },
  //     // prepare(title,content){
  //     //   return{
  //     //     payload:{
  //     //       id:nanoid(),
  //     //       title,
  //     //       date:new Date().toISOString(),
  //     //       content,
  //     //     },
  //     //   };

  //     // },
  //   },
  //   blogUpdated: (state, action) => {
  //     const { id, title, content } = action.payload;
  //     const existblog = state.blogsme.find((blog) => blog.id === id);
  //     // console.log(state.blogse.blogsme,"state blogslise" );
  //       console.log(state.blogsme,"stateblogsme blogslise ");
  //     if (existblog) {
  //       existblog.title = title;
  //       existblog.content = content;
  //     }
  //   },
  //   blogDeleted: (state, action) => {
  //     const { id } = action.payload;
  //     state.blogsme = state.blogsme.filter((blog) => blog.id !== id);
  //   },
    blogReactionAdded: (state, action) => {
      const { blogId, reaction } = action.payload;
      const existingreact = state.blogsme.find((blog) => blog.id === blogId);
      if (existingreact) {
        existingreact.reactions[reaction]++;
      }
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchBlogs.pending, (state,) => {
      state.status = "loading";
    })
    .addCase(fetchBlogs.fulfilled,(state,action)=>{
      state.status="completed";
      state.blogsme=action.payload;
      console.log(action.payload,"get  fetchblog payload to blogsme")
    })
    .addCase(fetchBlogs.rejected,(state, )=>{
      state.status="failed";

    })
    .addCase(addNewblog.fulfilled,(state,action)=>{
   console.log(action.payload,"actionpayload addcase createblog");
      state.blogsme.push(action.payload);
      console.log(current (state.blogsme),"addcase state.blogsme");
    })
    .addCase(deleteApiBlog.fulfilled, (state,action)=>{
      console.log(action,"action");
      console.log(action.payload,"actionPAYLOD");
      state.blogsme=state.blogsme.filter(blog=>blog.id!==action.payload)
    })
    .addCase(updateApiBlog.fulfilled,(state,action)=>{
      console.log(action,"action update");
      const {id}=action.payload;
      const updatedblog=state.blogsme.findIndex(blog=>blog.id===id);
      console.log(action.payload,"update action.paylod")
       state.blogsme[updatedblog]=action.payload;
    });
  },
});
export const selectAllBlogs = (state) => state.blogse.blogsme;


export const selectById = (state, blogId) =>
  state.blogse.blogsme.find((blog) => blog.id === blogId);
export default BlogSlice.reducer;
export const { blogadded, blogUpdated, blogDeleted, blogReactionAdded } =
  BlogSlice.actions;
