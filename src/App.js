import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import VideoUpload from './pages/VideoUploadPage/VideoUploadPage';



function App() {
 
  return (
    <BrowserRouter>

    <div>
    <Navigation />
    </div>


    {/* TODO:: ADD A ERROR PAGE FOR 404  */}

    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/:id" element={<HomePage/>}/>
    <Route path="/videoupload" element={<VideoUpload/>}/>

    </Routes>
    </BrowserRouter>

  );
}

export default App;
