import './VideoList.scss';

function VideoList(props){
    return(
        <section className="l-video-list">
            <h1 className="section-title">NEXT VIDEOS</h1>
            <ul className="video-list">
                {props.videoData
                .filter((video) => video.id !== props.selectedVideo.id)
                .map((video) => {
                    return(
                    <li
                    onClick={() => {
                        props.handleVideoSelection(video.id);
                    }}
                    key={video.id}
                    className="video-list__item">
                        <div className="video-list__video-card">
                            <img className="video-list__video" src={video.image} alt="video" />
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