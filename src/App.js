import './App.scss';
import Navigation from './components/Navigation/Navigation';
import VideoList from './components/VideoList/VideoList';
import SelectedVideo from './components/SelectedVideo/SelectedVideo';
import VideoDescription from './components/VideoDescription/VideoDescription';
import Comments from './components/Comments/Comments';
import VideoJsonData from "./data/video-details.json";
import { useState } from 'react';


function App() {
  const [videoData, setVideoData] = useState(VideoJsonData);
  const [selectedVideo, setSelectedVideo] = useState(VideoJsonData[0]);
  

  function handleVideoSelection(id){
    const foundVideo = videoData.find((video) => video.id === id);
    setSelectedVideo(foundVideo);
  }
  return (
    <div className="App">
      <Navigation />
      <SelectedVideo selectedVideo={selectedVideo} />
      <div className="container">
        <div className='container__left'>
          <VideoDescription selectedVideo={selectedVideo}/> 
          <Comments selectedVideo={selectedVideo}/>
        </div>

        <div className='container__right'>
          <VideoList videoData={videoData}
            selectedVideo={selectedVideo}
            handleVideoSelection={handleVideoSelection}/>
        </div>
      </div>
    </div>
  );
}

export default App;
