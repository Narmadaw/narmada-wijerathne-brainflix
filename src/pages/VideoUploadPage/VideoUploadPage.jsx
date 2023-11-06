import {Link, useNavigate  } from 'react-router-dom'
import uploadImage from '../../assets/images/Upload-video-preview.jpg';
import axios from 'axios';
import "./VideoUploadPage.scss";
import { useEffect, useState } from 'react';

const VideoUploadPage = () =>{
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    
    useEffect(() =>{
        if(images.length < 1){
            setImageURLs([uploadImage]);
        }else{
            const newImageURLs = images.map(image => URL.createObjectURL(image));
            setImageURLs(newImageURLs);
        }
    }, [images]);

    function onImageChange(event){
        setImages([...event.target.files]);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const image = event.target.image.files[0];
        const title = event.target.title.value;
        const description = event.target.description.value;
        if (!image) {
            alert('Please upload an image');
          } else if (!title) {
            alert('Please add a title');
          } else if (!description) {
            alert('Please add a description');
          } else {
            const videoData = {
              image: image,
              title: title,
              description: description
            };
        
            try {
              const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/videos`,
                videoData,
                {
                  headers: {
                    'Content-Type': 'multipart/form-data',
                  },
                }
              );
              alert('Image upload success...!');
              navigate("/");
              // window.history.back();
            } catch (error) {
              console.error('Error:', error);
            }
          }
        };

    const handleCancel = (e) => {
        e.preventDefault();
        window.history.back();
      };

    return (
        <>
        <section className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <div className="upload__container">
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <div className='upload__wrapper'>
                    <div className="upload__left-image-panel">
                        <div className='upload__image-container'>
                            <h4 className='upload__label'>VIDEO THUMBNAIL</h4> 
                            {imageURLs.map(imageSrc => <img key={imageSrc} className="upload__thumbnail" src={imageSrc} alt="a blue bike"/>)}
                        </div>
                        <div className='upload__btn-container'>
                            <input className='upload__upload-btn' type='file' multiple name="image" accept='image/*' onChange={onImageChange} />
                        </div> 
                    </div>
                    <div className="upload__right-input-panel">
                            <h4 className='upload__label'>TITLE YOUR VIDEO</h4>
                            <input className="upload__input" name="title" placeholder="Add a title to your video"/>
                            
                            <h4 className='upload__label upload__label--textarea'>ADD A VIDEO DESCRIPTION</h4>
                            <textarea className="upload__textarea" rows="7" name="description" placeholder="Add a description to your video"></textarea>
                    </div>
                    </div>
                    <div className="upload__button-panel">
                            <button className="upload__btn-submit">PUBLISH</button>
                            <button className="upload__btn-cancel" onClick={handleCancel}>CANCEL</button>
                    </div>
                </form>
            </div>       
        </section>
        </>
    );
}
export default VideoUploadPage;