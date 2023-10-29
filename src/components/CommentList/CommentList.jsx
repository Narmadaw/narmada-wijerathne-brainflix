import DateFomatter from "../utill.js"
import DeleteIcon from './../../assets/images/icons/icon-delete.svg';
import "./CommentList.scss";

const CommentList = ({commentData, onClickDelete}) =>{
    // const handleOnclick = ()=>{

    // }
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
                        <img className="comment-list-item__delete-icon" src={DeleteIcon}  alt="delete icon" onClick={()=>onClickDelete(commentData.id)} />
                        </div>
                        
                        
                    </div> 
                </div>   
            </div>
        </>
    );

}

export default CommentList;