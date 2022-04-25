import CommentDate from "./CommentDate";
import CommentText from "./CommentText";
import UserInfo from "./UserInfo";

function Comment (props){
 
    return(
        <div className='Comment'>
        <UserInfo author={props.author} text={props.text} date={props.date}/>
      </div>
    )
}

export default Comment
