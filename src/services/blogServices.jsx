
import axios from 'axios'
const SERVER_URL="http://localhost:9000";

export const getAllusers=()=>{
const url=`${SERVER_URL}/usersme`;
console.log(url,"url")
return axios.get(url);

}
export const getAllblogs=()=>{
    const url=`${SERVER_URL}/blogs`;
    console.log(url,"url")
    return axios.get(url);
    }
export const geBlog=(blogId)=>{
const url=`${SERVER_URL}/blogs/${blogId}`;
return axios.get(url);
}    
export const getUser=(userId)=>{
const url=`${SERVER_URL}/usersme/${userId}`;
return axios.get(url);
}  
export const addUser=(user)=>{
const url=`${SERVER_URL}/usersme`;
return axios.post(url,user);
}  
export const createBlog=(blog)=>{
const url=`${SERVER_URL}/blogs`;
return axios.post(url,blog);
}  
export const updateBlog=(blog,blogId)=>{
    const url=`${SERVER_URL}/blogs/${blogId}`;
    console.log(blog,"initialblogId  service");
    console.log(blogId,"initialblogId  service");
 return axios.put(url,blog);
}  
export const deleteBlog=(blogId)=>{
    const url=`${SERVER_URL}/blogs/${blogId}`;
return axios.delete(url);
}  
export const deleteuser=(userId)=>{
    const url=`${SERVER_URL}/usersme/${userId}`;
    console.log(userId ,"from bank axios")
    return axios.delete(url);
}
  
