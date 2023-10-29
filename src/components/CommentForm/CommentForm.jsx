import React, { useState } from 'react';
import './CommentForm.scss';
import ProfileImage from "./../../assets/images/Mohan-muruge.jpg"

const CommentForm = ({onFormSubmit}) =>{
    const [comment, setComment] = useState('');

    const handleChange = (event) => {
        setComment(event.target.value);
      };

    const handleSubmit = (event) => {
        event.preventDefault();

        const commentData = {
            name:"Narmada",
            comment: comment,
          };

          onFormSubmit(commentData);
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
                    <label className='comment-form__label'>
                        JOIN THE CONVERSATION
                        <textarea
                            value={comment}
                            onChange={handleChange}
                            type='text'
                            name='comment'
                            rows="5"
                            className='comment-form__input-textarea'
                            placeholder='Add a new comment'
                            
                            // className={`comment-form__input ${
                            //     isCommentValid()?"":"comment-form__input--invalid"
                            // }`}
                        ></textarea>
                    </label>
                    <button 
                            className="comment-form__submit-button" 
                            name="submit" 
                            type='submit'
                            > SUBMIT </button>
                </div>
            </form>
        </>
    );
}

export default CommentForm;