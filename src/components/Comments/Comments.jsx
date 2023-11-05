import CommentForm from '../../components/CommentForm/CommentForm';
import CommentList from "../CommentList/CommentList";
import "./Comments.scss";


const Comments = ({commentsList, onFormSubmit, onClickDeleteButton, onCommentLike}) =>{
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
                        onClickDelete={onClickDeleteButton} 
                        onClickLike={onCommentLike}
                       

                    />
                )
            })}
        </div>
    );
}
export default Comments;