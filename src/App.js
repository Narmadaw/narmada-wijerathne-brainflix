import './App.scss';
import Navigation from './components/Navigation/Navigation';
import VideoList from './components/VideoList/VideoList';
import SelectedVideo from './components/SelectedVideo/SelectedVideo';
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
      <div className="container">
        <SelectedVideo selectedVideo={selectedVideo} />
        <VideoList videoData={videoData}
        selectedVideo={selectedVideo}
        handleVideoSelection={handleVideoSelection}
        />

      </div>
    </div>
  );
}

export default App;
