import "./SelectedVideo.scss";


const SelectedVideo = ({image, video}) =>{
    return(
        <div className="video-player">
            <div className="video-player__wrapper">
            <video className="video-player__background-image" poster={`${process.env.REACT_APP_API_URL}/${video.image}`} controls>
                {/* <source className="video-player__background-video" src={video} type="video/mp4"/> */}
                <source className="video-player__background-video" src="" type="video/mp4"/>
            </video>
            </div>  
        </div>
    );
}
export default SelectedVideo;