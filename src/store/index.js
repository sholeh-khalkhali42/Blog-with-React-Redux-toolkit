import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from '../reducers/blogSlice';
import userReducer from '../reducers/userSlice';
import { fetchUsers } from "../reducers/userSlice";
import { fetchBlogs} from "../reducers/blogSlice";

export const store=configureStore({

    reducer:{
        blogse:blogsReducer,
        users:userReducer,
    },
})
store.dispatch(fetchUsers());
store.dispatch(fetchBlogs());

// store.dispatch(addNewblog());
// store.dispatch(deleteApiBlog());
// store.dispatch(updateApiBlog());