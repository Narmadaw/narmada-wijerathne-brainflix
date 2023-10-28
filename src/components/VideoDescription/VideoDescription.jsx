import "./VideoDescription.scss";
import ViewsIcon from "./../../assets/images/icons/views.svg";
import LikesIcon from "./../../assets/images/icons/likes.svg";
import DateFomatter from "../utill.js";

function VideoDescription({selectedVideo}){
    return(
        <div className="video-container">
                <h1 className="video-container__title">{selectedVideo.title}</h1>

                <div className="video-container__middle-card">
                <p className="video-container__channel">by {selectedVideo.channel}</p>
                <p className="video-container__timestamp">{DateFomatter(selectedVideo.timestamp)}</p>
                
                <div className="video-container__views">
                    <img src={ViewsIcon} alt="view icon" />
                    {selectedVideo.views}
                </div>
                <div className="video-container__likes">
                    <img src={LikesIcon} alt="likes icon" />
                    {selectedVideo.likes}
                </div>

                </div>
                <p className="video-container__description">{selectedVideo.description}</p>
            </div>
    );

}

export default VideoDescription;