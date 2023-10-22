import "./SelectedVideo.scss";


function SelectedVideo(props){
    return(
        <section className="video-player">
            {/* <h2>{props.selectedVideo.title}</h2> */}
            <div className="video-player__background">
                <img className="video-player__video" src={props.selectedVideo.image} alt="" />
            </div>
            
            <div className="video-container">
                <div className="video-container__title">{props.selectedVideo.title}</div>
                <div className="video-container__title">{props.selectedVideo.channel}</div>
                <div className="video-container__title">{props.selectedVideo.timestamp}</div>
                <div className="video-container__title">{props.selectedVideo.views}</div>
                <div className="video-container__title">{props.selectedVideo.likes}</div>
                <div className="video-container__title">{props.selectedVideo.description}</div>
            </div>
        </section>

        

    );

}

export default SelectedVideo;