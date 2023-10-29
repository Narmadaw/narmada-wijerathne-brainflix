import "./SelectedVideo.scss";


function SelectedVideo({image, video}){
    
    
    return(
        <div className="video-player">
            <div className="wrapper">
            <video className="background-video" poster={image} controls>
                <source src= {`${video}?api_key=test`} type="video/mp4"/>
            </video>
            </div>  
        </div>
    );
}

export default SelectedVideo;