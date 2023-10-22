function SelectedVideo(props){
    return(
        <section className="selected-video">
            <h2>{props.selectedVideo.title}</h2>
            <img src={props.selectedVideo.image} alt="" />
        </section>

    );

}

export default SelectedVideo;