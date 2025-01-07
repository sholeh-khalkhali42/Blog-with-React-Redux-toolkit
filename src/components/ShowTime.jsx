
import {parseISO,formatDistanceToNow} from 'date-fns-jalali'


export const ShowTime = ({timeStamp}) => {
let timeAgo='';
     if(timeStamp){
    const date=parseISO(timeStamp);
    const time=formatDistanceToNow(date);
      timeAgo =`before ${time}`;
}
else {
    `not found this`;
}
  return (
<>
<span><i>{timeAgo} </i>
</span> &nbsp;
</>


  )
}

