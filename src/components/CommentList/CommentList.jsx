import DateFomatter from "../utill.js"
import DeleteIcon from './../../assets/images/icons/icon-delete.svg';
import LikeIcon from './../../assets/images/icons/icon-like.svg';
import "./CommentList.scss";

const CommentList = ({commentData, onClickIcon}) =>{
    return(
        <>
            <div className="comment-list">
                <div className="comment-list-item">
                    <div className="comment-list-item__img-placeholder"></div>
                    <div className="comment-list-item__comment-header">
                        <p className="comment-list-item__name">{commentData.name}</p>
                        <p className="comment-list-item__date">{DateFomatter(commentData.timestamp)}</p>
                        <p className="comment-list-item__comment-body">{commentData.comment}</p>
                        <div className="comment-list-item__delete-section">
                            <div className="comment-list-item__icon-pannel">
                                <img className="comment-list-item__like-icon" src={LikeIcon}  alt="like icon" onClick={()=> onClickIcon(commentData.id, 'like')} /> 
                                <p className="comment-list-item__like-icon-count">{commentData.likes} </p>
                            </div>
                            <img className="comment-list-item__delete-icon" src={DeleteIcon}  alt="delete icon" onClick={()=> onClickIcon(commentData.id, 'delete')} />
                        </div>
                    </div> 
                </div>   
            </div>
        </>
    );
}

export default CommentList;