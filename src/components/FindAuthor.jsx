import { useSelector } from 'react-redux';
import { selectByIdUser } from '../reducers/userSlice';

const FindAuthor = ({userId}) => {
    const author=useSelector((state)=>selectByIdUser(state,userId));
console.log(author ,"find author")
  return (
   <>
<span>by author:{author ?  author.fullname :  " identify" }</span>
   </>
  )
}

export default FindAuthor;