import {Link, useNavigate } from 'react-router-dom'
import uploadImage from '../../assets/images/Upload-video-preview.jpg';
import "./VideoUploadPage.scss";




function VideoUploadPage(){
    const navigate  = useNavigate ();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setTimeout(()=> {
            alert("Video Uploaded!");
            navigate('/');
        },2000) 

      };

    return (
        <>
        <section className="upload">
                <h1 className="upload__title">Upload Video</h1>
                
                    <form onSubmit={handleFormSubmit}>
                    <div className="upload__container">
                        <div className="upload__left">
                            <label className='upload__label'>
                                VIDEO THUMBNAIL
                                <img className="upload__thumbnail" src={uploadImage} alt="a blue bike"/>
                            </label>    
                        </div>

                        <div className="upload__right">
                            <label className='upload__label'>
                                TITLE YOUR VIDEO
                                <input className="upload__input" name="title" placeholder="Add a title to your video"/>
                            </label>

                            <label className='upload__label'>
                                ADD A VIDEO DESCRIPTION
                                <textarea className="upload__textarea" rows="7" name="text" placeholder="Add a description to your video"></textarea>
                            </label>
                        </div>
                        </div>
                        <div className="upload__action">
                            <button className="upload__submit">PUBLISH</button>
                            <Link to="/"><button className="upload__link">CANCEL</button></Link>
                        </div>
                        
                    </form>
                
                    
            </section>
        </>
    );

}

export default VideoUploadPage;