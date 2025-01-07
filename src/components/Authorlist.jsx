import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fetchdelete } from "../reducers/userSlice";

export const Authorlist = () => {
    const users=useSelector((state)=>state.users);
    const navigate=useNavigate();
    const dispatch=useDispatch();
 const   handeldelete=(userId)=>{
dispatch(fetchdelete(userId));
 }
 const  renderuser=users.map(user=>   ( 
    <li  type="I"  key={user.id}> 

<Link to={`/users/${user.id}`}>{user.fullname}  </Link>
<Link onClick={()=>handeldelete(user.id)} >&otimes;</Link>
    </li>


  ) );
// let counter=0;

    
  return (
    <>
    <button style={{width:"100%" ,border:"1px solid"}} onClick={()=>navigate("/users/createuser")}>add user</button>
    <section>
    <h3>  list Authers</h3>
        <ul>
       { renderuser}
        </ul>
    </section>
{/* {users.map(user=>(   
<div key={user.id} >

 <h4  key={user.id}><span style={{color:"#ae6565"}}>{counter+=1})</span>{user.fullname}</h4>
<h>fjsdhfjkhdsfjkh</h>
</div>
 ))} */}





   

    </>
  )
}
