function CommentDate(props) {
  let d = props.date.toLocaleDateString()
  return(
    <div className='Comment-date'>{d}</div>
  )
      
    }
  
    export default CommentDate
