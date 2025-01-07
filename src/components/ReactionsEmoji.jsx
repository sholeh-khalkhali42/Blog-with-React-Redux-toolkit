import { useDispatch } from "react-redux";
import {blogReactionAdded} from '../reducers/blogSlice.js'
const reactionsEmoji = {
  eye: "P)",
  mound: ":)",
  akhm: "<)",
};
const ReactionsButtons= ({ blog }) => {
  const dispatch=useDispatch();
  const reaction = Object.entries(reactionsEmoji).map(([name, emoji]) => {
    return (
      <button key={name} className="muted-button  reaction-button" onClick={() =>dispatch(blogReactionAdded({blogId:blog.id,reaction:name}))}>
        {emoji} {blog.reactions[name]}
      </button>
    );
  });
  return(
   <div> {reaction}</div>
  )
  
};

export default  ReactionsButtons;
