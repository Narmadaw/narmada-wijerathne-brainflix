import React, { useState } from 'react';
import './CommentForm.scss';
import ProfileImage from "./../../assets/images/Mohan-muruge.jpg"

const CommentForm = ({onCommentFormSubmit}) =>{
    const [comment, setComment] = useState('');

    const handleChangeComment = (event) => {
        setComment(event.target.value);
      };

    const handleSubmit = (event) => {
        event.preventDefault();

        const commentData = {
            name:"Narmada",
            comment: comment,
          };

          onCommentFormSubmit(commentData);
          console.log(commentData);
          setComment('');
    }
    return(
        <>
        <form onSubmit={handleSubmit} className="comment-form">
                <div className="comment-form__img-placeholder">
                    <img className="comment-form__profile-image" src={ProfileImage} alt="profile avatar" />
                </div>
                <div className="comment-form__input-section">
                    {/* <h4 className="comment-form__input-label">JOIN THE CONVERSATION</h4>
                    <textarea className="comment-form__input" name="comment" placeholder="Add a new comment"></textarea>
                    <button className="comment-form__submit-button" name="submit">COMMENT</button> */}

                    <label>
                        JOIN THE CONVERSATION
                        <input
                            value={comment}
                            onChange={handleChangeComment}
                            type='text'
                            name='comment'
                            className='comment-form__input'
                            // className={`comment-form__input ${
                            //     isCommentValid()?"":"comment-form__input--invalid"
                            // }`}
                        />
                        <button 
                            className="comment-form__submit-button" 
                            name="submit" 
                            type='submit'
                            
                            
                            > SUBMIT </button>
                    </label>
                </div>
            </form>
        </>
    );
}

export default CommentForm;