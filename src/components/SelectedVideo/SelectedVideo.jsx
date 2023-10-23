import "./SelectedVideo.scss";


function SelectedVideo(props){
    return(
        <section className="video-player">
                <video className="background-video" poster={props.selectedVideo.image} controls>
                <source src= {`${props.selectedVideo.video}?api_key=test`} type="video/mp4"/>
            </video>
        </section>
    );
}

export default SelectedVideo;