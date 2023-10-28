import "./SelectedVideo.scss";


function SelectedVideo({image, video}){
    
    
    return(
        
        <section className="video-player">
                <video className="background-video" poster={image} controls>
                <source src= {`${video}?api_key=test`} type="video/mp4"/>
            </video> 
        </section>
    );
}

export default SelectedVideo;