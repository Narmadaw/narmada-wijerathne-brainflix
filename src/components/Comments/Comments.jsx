import React from "react";
import ProfileImage from "./../../assets/images/Mohan-muruge.jpg"
import "./Comments.scss";
import DateFomatter from "./../../data/utill.js"

function Comments(props){
    return(
        <section className="l-comments">
            <h1 className="l-comments__title" >3 Comments</h1>

            <form id="comment-form" className="comment-form">
                <div className="comment-form__img-placeholder">
                    <img className="comment-form__profile-image" src={ProfileImage} alt="profile avatar" />
                </div>
                <div className="comment-form__input-section">
                    <h4 className="comment-form__input-label">JOIN THE CONVERSATION</h4>
                    <textarea className="comment-form__input" name="comment" placeholder="Add a new comment"></textarea>
                    <button className="comment-form__submit-button" name="submit">COMMENT</button>
                </div>
            </form>
            
            <ul className="comment-list">
                {props.selectedVideo.comments.map((comment, index) => {
                    return <li className="comment-list-item" key={index}>
                        <div className="comment-list-item__img-placeholder"></div>
                        <div className="comment-list-item__comment-header">
                            <p className="comment-list-item__name">{comment.name}</p>
                            <p className="comment-list-item__date">{DateFomatter(comment.timestamp)}</p>
                            <p className="comment-list-item__comment-body">{comment.comment}</p>
                        </div> 
                    </li>;
                    })}
            </ul>
        </section>
    );
}

export default Comments;