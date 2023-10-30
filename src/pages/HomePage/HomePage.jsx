import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import VideoList from '../../components/VideoList/VideoList';
import SelectedVideo from '../../components/SelectedVideo/SelectedVideo';
import VideoDescription from '../../components/VideoDescription/VideoDescription';
import Comments from '../../components/Comments/Comments';
import "./HomePage.scss";



function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState({});
  const [videoList, setVideoList] = useState([]);
  const [commentsList, setCommentsList] = useState([]);
  const apiKey = "20e34fd8-3ad6-47e0-8ac4-2747c23ed021";
  const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const params = useParams();
  
  /*
   * GET VIDEO LIST & DEFAULT VIDEO DETAILS
   */ 
  useEffect(()=>{
    const getVideoList = async () =>{
      try{
        const response = await axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`);
        setVideoList(response.data); 
      }
      catch(error){
        alert("Error fetching video list:" ,error);
      }
    }
    getVideoList();
  }, []);

  /*
   * GET SELECTED VIDEO
   */ 
  useEffect(() => {
    const getSelectedVideo = async () => {
      if(!params.id){
        try {
          const response = await axios.get(`https://project-2-api.herokuapp.com/videos/${defaultVideoId}?api_key=${apiKey}`);
          setSelectedVideo(response.data);
          setCommentsList(response.data.comments);

        } catch (error) {
          console.error('Error fetching selected video:', error);
        }
      }
      else{
        try {
          const response = await axios.get(`https://project-2-api.herokuapp.com/videos/${params.id}?api_key=${apiKey}`);
          setSelectedVideo(response.data);
          setCommentsList(response.data.comments);
          
        } catch (error) {
          console.error('Error fetching selected video:', error);
        }
      }
    };
    getSelectedVideo();

  },[params.id]);

   /**
   * POST COMMENTS
   */ 

  const postComment = async (commentData) =>{
    console.log(commentData);
    if(!params.id){
      try{
        const response = await axios.post(`https://project-2-api.herokuapp.com/videos/${defaultVideoId}/comments?api_key=${apiKey}`, commentData);
        return setCommentsList([...commentsList, response.data]);
      }
      catch(error){
        alert("error posting a comment", error);
      }

    }
    else{
      try{
        const response = await axios.post(`https://project-2-api.herokuapp.com/videos/${params.id}/comments?api_key=${apiKey}`, commentData);
        return setCommentsList([...commentsList, response.data]);
      }
      catch(error){
        alert("error posting a comment", error);
      }
    }
  }

  /**
   * DELETE COMMENTS
   */ 
  const deleteComment = async (commentId) =>{
    if(!params.id){
      try{
        const response = await axios.delete(`https://project-2-api.herokuapp.com/videos/${defaultVideoId}/comments/${commentId}?api_key=${apiKey}`);
        const updatedCommentsList = commentsList.filter(comment => comment.id !== commentId);
        setCommentsList(updatedCommentsList);
        return response.data;
      }
      catch(error){
        alert("error deleting comment", error);
      }
    }

    else{
      try{
        const response = await axios.delete(`https://project-2-api.herokuapp.com/videos/${params.id}/comments/${commentId}?api_key=${apiKey}`);
        const updatedCommentsList = commentsList.filter(comment => comment.id !== commentId);
        setCommentsList(updatedCommentsList);
        return response.data;
      }
      catch(error){
        alert("error deleting comment", error);
      }
    }
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
            onClickDeleteButton={deleteComment}
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