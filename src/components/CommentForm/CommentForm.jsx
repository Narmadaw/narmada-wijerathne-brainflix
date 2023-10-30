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
          setComment('');
    }
    return(
        <>
        <form onSubmit={handleSubmit} >
            <div className="comment-form">
                <div className="comment-form__container">
                    <div className="comment-form__img-placeholder">
                        <img className="comment-form__profile-image" src={ProfileImage} alt="profile avatar" />
                    </div>
                    <div className="comment-form__input-section">
                        <h4 className='comment-form__label'>JOIN THE CONVERSATION</h4>
                        <textarea
                            value={comment}
                            onChange={handleChange}
                            type='text'
                            name='comment'
                            rows="5"
                            className='comment-form__input-textarea'
                            placeholder='Add a new comment'
                        ></textarea>
                    </div>
                </div>
                <div className='comment-form__button-pannel' >
                    <button 
                        className="comment-form__submit-button" 
                        name="submit" 
                        type='submit'
                        > COMMENT 
                    </button>
                </div>        
            </div>
        </form>
        </>
    );
}

export default CommentForm;