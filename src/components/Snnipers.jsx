
export const Snniper = ({text,size}) => {
    const header=text?<h2>text</h2>:null;
  return (
   <>
<div>
    {header} 
    <div className='loader' style={{height:size,width:size}}></div>
</div>

   </>


  )
}
