import React from "react";

import "./Comments.scss";
import DateFomatter from "../utill.js"


function Comments({commentsList}){
    
    
    return(
        <section className="l-comments">
            <h2 className="l-comments__title" >{commentsList?.length} comments</h2>
           
            
            
            <ul className="comment-list">
                {commentsList?.map((comment, index) => {
                    return <li className="comment-list-item" key={index}>
                        <div className="comment-list-item__img-placeholder"></div>
                        <div className="comment-list-item__comment-header">
                            <p className="comment-list-item__name">{comment.name}</p>
                            <p className="comment-list-item__date">{DateFomatter(comment.timestamp)}</p>
                            <p className="comment-list-item__comment-body">{comment.comment}</p>
                            
                            <button >Delete</button>
                            
                            
                        </div> 
                    </li>;
                    })}
            </ul>
        </section>
    );
}

export default Comments;