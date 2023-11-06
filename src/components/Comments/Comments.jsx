import CommentForm from '../../components/CommentForm/CommentForm';
import CommentList from "../CommentList/CommentList";
import "./Comments.scss";


const Comments = ({commentsList, onFormSubmit, onClickIcon}) =>{
    return(
        <div className="l-comments">
            <h2 className="l-comments__title" >{commentsList?.length} comments</h2>
            <CommentForm 
                onFormSubmit={onFormSubmit} />
            {commentsList?.sort((a,b)=>{
                return b.timestamp - a.timestamp;
            }).map((comment,index)=>{
                return(
                    <CommentList
                        key={index}
                        commentData={comment}
                        onClickIcon={onClickIcon}
                    />
                )
            })}
        </div>
    );
}
export default Comments;