import './VideoList.scss';

function VideoList(props){
    return(
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
                    className="video-list"
                    >
                        <h2>{video.title}</h2>
                        <img src={video.image} alt="" />
                    </li>

                );
            })
            
            }
        </ul>
    );

}

export default VideoList;