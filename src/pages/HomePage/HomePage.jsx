import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

import VideoList from '../../components/VideoList/VideoList';
import SelectedVideo from '../../components/SelectedVideo/SelectedVideo';
import VideoDescription from '../../components/VideoDescription/VideoDescription';
import Comments from '../../components/Comments/Comments';



function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState({});
  const [videoList, setVideoList] = useState([]);
  const [commentsList, setCommentsList] = useState([]);
  const apiKey = "20e34fd8-3ad6-47e0-8ac4-2747c23ed021";
  const params = useParams();
  
  /*
   * GET VIDEO LIST & DEFAULT VIDEO DETAILS
   */ 
  useEffect(()=>{
    const getVideoList = async () =>{
      try{
        const response = await axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`);
        setVideoList(response.data);
        let defaultVideoId = response.data[0].id;
    
        if(!params.id){
          const response = await axios.get(`https://project-2-api.herokuapp.com/videos/${defaultVideoId}?api_key=${apiKey}`);
          setSelectedVideo(response.data);
          setCommentsList(response.data.comments);
        }
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
      try {
        const response = await axios.get(`https://project-2-api.herokuapp.com/videos/${params.id}?api_key=${apiKey}`);
        setSelectedVideo(response.data);
        setCommentsList(response.data.comments);
        
      } catch (error) {
        console.error('Error fetching selected video:', error);
      }
    };
    
    if (params.id) {
      getSelectedVideo();
    } else {
      setSelectedVideo({});
    }

    getSelectedVideo();

  }, [params.id]);

   /**
   * POST COMMENTS
   */ 

  const postComment = async (commentData) =>{
    console.log(commentData);
    try{
      const response = await axios.post(`https://project-2-api.herokuapp.com/videos/${params.id}/comments?api_key=${apiKey}`, commentData);
      /*add new comments to previous list*/
      return setCommentsList([...commentsList, response.data]);
      
    }
    catch(error){
      alert("error posting a comment", error);
    }
  }

  /**
   * DELETE COMMENTS
   */ 
  const deleteComment = async (commentId) =>{
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

  
  return (

    <div className="Home">
      <SelectedVideo 
        image={selectedVideo.image}
        video={selectedVideo.video} />
    
      <div className="container">
        <div className='container__left'>
          <VideoDescription selectedVideo={selectedVideo}/>
          <Comments 
            commentsList={commentsList}
            onFormSubmit={postComment} 
            onClickDeleteButton={deleteComment}
          />
        </div>
        <div className='container__right'>
          <VideoList videoList={videoList} selectedVideo={selectedVideo}/>
        </div>
      </div>
    </div>
  );
}
    
export default HomePage;