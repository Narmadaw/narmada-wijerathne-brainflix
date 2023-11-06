import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import VideoList from '../../components/VideoList/VideoList';
import SelectedVideo from '../../components/SelectedVideo/SelectedVideo';
import VideoDescription from '../../components/VideoDescription/VideoDescription';
import Comments from '../../components/Comments/Comments';
import "./HomePage.scss";

const HomePage = () => {
  const [selectedVideo, setSelectedVideo] = useState({});
  const [videoList, setVideoList] = useState([]);
  const [commentsList, setCommentsList] = useState([]);
  const [commentId, setCommentId] = useState('');
  const [defaultVideoId, setdefaultVideoId] = useState('');
  const [flag, setFlag] = useState('');
  const apiURL = process.env.REACT_APP_API_URL;
  const params = useParams();
  
  /******************************************
   * GET VIDEO LIST & DEFAULT VIDEO DETAILS
   ******************************************/ 
  useEffect(()=>{
    const getVideoList = async () =>{
      try{
        const response = await axios.get(`${apiURL}/videos`);
        setVideoList(response.data); 
        setdefaultVideoId(response.data[0].id);
      }
      catch(error){
        console.log("Error fetching video list:" ,error);
      }
    }
    getVideoList();
  }, []);

  /***************************************************************
   * USEEFFECT ::  GET SELECTED VIDEO, COMMENTS LIKE & DELETE LIKE
   ***************************************************************/ 
  useEffect(() => {
    //1. get video list by defaultId or paramId
    const getVideoList = async (videoId) => {
      try {
        const response = await axios.get(`${apiURL}/videos/${videoId}`);
        console.log(response.data);
        setSelectedVideo(response.data);
        setCommentsList(response.data.comments);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    //2. handle like and delete when a passing a flag
    const handleLikeOrDelete = async (videoId, commentId) => {
      console.log(videoId, commentId, flag)
      try {
        let response;
        if (flag === 'like') {
          response = await axios.put(`${apiURL}/videos/${videoId}/comments/${commentId}`);
        } else if(flag === 'delete') {
          response = await axios.delete(`${apiURL}/videos/${videoId}/comments/${commentId}`);
        }
        getVideoList(videoId);
        setFlag(null); // clear the flag 
        setCommentId(null); // clear the commentId 
        return response.data;
      } catch (error) {
        console.error(`Error ${flag} operation:`, error);
      }
    };
    if (!params.id) {
      getVideoList(defaultVideoId);
    } else {
      getVideoList(params.id);
    }
  
    if (commentId) {
      handleLikeOrDelete(params.id || defaultVideoId, commentId);
    }
    //dependancy array
  }, [defaultVideoId, params.id, commentId, flag]);  


   /********************************************
   *        POST COMMENTS
   *********************************************/ 
   const postComment = async (commentData) => {
    const videoId = !params.id ? defaultVideoId : params.id;
    try {
      const response = await axios.post(`${apiURL}/videos/${videoId}/comments`, commentData);
      console.log(response.data);
      setCommentsList(response.data);
    } catch (error) {
      console.error('Error posting a comment', error);
    }
  };

  //callback function to update flag and comment id states
  const setLikeOrDelete = (commentId, flag) => {
    setCommentId(commentId);
    setFlag(flag);
  }
 
  return (
    <>
    <div className="home-page">
      <SelectedVideo 
        image={selectedVideo.image}
        video={selectedVideo.video} />
    </div>
      <div className="container">
        <div className='container__left-pannel'>
          <VideoDescription selectedVideo={selectedVideo}/>
          <Comments 
            commentsList={commentsList}
            onFormSubmit={postComment} 
            onClickIcon={setLikeOrDelete}
          />
        </div>
        <div className='container__right-pannel'>
          <VideoList videoList={videoList} selectedVideo={selectedVideo}/>
        </div>
      </div>
    </>
  );
}
export default HomePage;