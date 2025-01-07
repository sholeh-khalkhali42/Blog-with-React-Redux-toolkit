
import { Link } from "react-router-dom"
export const Navbar = () => {
  return (
    <nav className="nav">
<section >
    <h1 >redux blog</h1>
<div  className='navContent'>
<div className='navlink'>
<Link  to={`/`} style={{padding:"10px "}} > blog</Link>
<Link  to={`/users`} style={{padding:"10px "}} > authers</Link>
</div>

</div>    
</section>

    </nav>
   
  )
}

