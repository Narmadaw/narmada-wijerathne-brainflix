import { useEffect, useState } from "react";
import DateFomatter from "../utill.js"
import DeleteIcon from './../../assets/images/icons/icon-delete.svg';
import LikeIcon from './../../assets/images/icons/icon-like.svg';
import "./CommentList.scss";

const CommentList = ({commentData, onClickDelete,onClickLike}) =>{
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
                        <img className="comment-list-item__like-icon" src={LikeIcon}  alt="like icon"  /> <p>Likes  {onClickLike} </p>
                        {/* <img className="comment-list-item__like-icon" src={LikeIcon}  alt="like icon" onClick={()=>onClickLike(commentData.id)} /> <p>Likes  </p> */}
                        </div>
                    </div> 
                </div>   
            </div>
        </>
    );

}

export default CommentList;