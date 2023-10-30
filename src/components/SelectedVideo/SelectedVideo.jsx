import "./SelectedVideo.scss";


const SelectedVideo = ({image, video}) =>{
    return(
        <div className="video-player">
            <div className="video-player__wrapper">
            <video className="video-player__background-image" poster={image} controls>
                <source className="video-player__background-video" src= {`${video}?api_key=test`} type="video/mp4"/>
            </video>
            </div>  
        </div>
    );
}
export default SelectedVideo;