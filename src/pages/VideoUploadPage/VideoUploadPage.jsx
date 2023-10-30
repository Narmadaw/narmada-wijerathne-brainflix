import {Link, useNavigate } from 'react-router-dom'
import uploadImage from '../../assets/images/Upload-video-preview.jpg';
import "./VideoUploadPage.scss";

const VideoUploadPage = () =>{
    const navigate  = useNavigate ();
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setTimeout(()=> {
            alert("Video Uploaded!");
            navigate('/');
        },1000) 
      };

    return (
        <>
        <section className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <div className="upload__container">
                <form onSubmit={handleFormSubmit}>
                    <div className='upload__wrapper'>
                    <div className="upload__left-image-panel">
                            <h4 className='upload__label'>VIDEO THUMBNAIL</h4> 
                                <img className="upload__thumbnail" src={uploadImage} alt="a blue bike"/> 
                    </div>
                    <div className="upload__right-input-panel">
                            <h4 className='upload__label'>TITLE YOUR VIDEO</h4>
                            <input className="upload__input" name="title" placeholder="Add a title to your video"/>
                            
                            <h4 className='upload__label upload__label--textarea'>ADD A VIDEO DESCRIPTION</h4>
                            <textarea className="upload__textarea" rows="7" name="text" placeholder="Add a description to your video"></textarea>
                    </div>
                    </div>
                    <div className="upload__button-panel">
                            <button className="upload__submit">PUBLISH</button>
                            <Link to="/"><button className="upload__link">CANCEL</button></Link>
                    </div>
                </form>
            </div>       
        </section>
        </>
    );
}
export default VideoUploadPage;