import { Link } from "react-router-dom";
import './VideoList.scss';

const VideoList = ({videoList, selectedVideo}) =>{
    
    return(
        <section className="l-video-list">
            <h2 className="section-title">NEXT VIDEOS</h2>
            <ul className="video-list">
                {videoList
                .filter((video) => video.id !== selectedVideo.id)
                .map((video) => {
                    return(
                    <li key={video.id}className="video-list__item">
                        <div className="video-list__video-card">
                        <Link to={`/${video.id}`}>
                            <img 
                                className="video-list__video" 
                                //src= {`${process.env.REACT_APP_API_URL}/${video.image}}
                                src={`${process.env.REACT_APP_API_URL}/${video.image}`}
                                alt="video" /> </Link>
                        </div>
                        <div className="video-list__text-container">
                            <p className="video-list__title">{video.title}</p>
                            <p className="video-list__channel">{video.channel}</p>
                        </div>                     
                    </li>
                    );
                })              
                } 
            </ul>
        </section>
    );
}
export default VideoList;