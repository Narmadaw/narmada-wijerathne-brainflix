import DateFomatter from "../utill.js"

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
                        <button className="comment-list-item__delete-button" onClick={()=>onClickDelete(commentData.id)}>Delete</button>
                    </div> 
                </div>   
            </div>
        </>
    );

}

export default CommentList;