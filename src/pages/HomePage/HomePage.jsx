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
  const [likeCount, setLikeCount] = useState(0);
  const [defaultVideoId, setdefaultVideoId] = ([]);

  const apiURL = process.env.REACT_APP_API_URL;
  const params = useParams();
  
  /*
   * GET VIDEO LIST & DEFAULT VIDEO DETAILS
   */ 
  useEffect(()=>{
    const getVideoList = async () =>{
      try{
        const response = await axios.get(`${apiURL}/videos`);
        setVideoList(response.data); 
        console.log(response.data);
        setdefaultVideoId(response.data[0].id);
        console.log(response.data[0].id);

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
    const getSelectedVideo = async (videoId) => {
      try {
        const response = await axios.get(`${apiURL}/videos/${videoId}`);
        setSelectedVideo(response.data);
        setCommentsList(response.data.comments);
      } catch (error) {
        console.error('Error fetching selected video:', error);
      }
    };
    if (!params.id) {
      getSelectedVideo(defaultVideoId);
    } else {
      getSelectedVideo(params.id);
    }
  }, [params.id]);

   /**
   * POST COMMENTS
   */ 

   const postComment = async (commentData) => {
    const videoId = !params.id ? defaultVideoId : params.id;
    try {
      const response = await axios.post(`${apiURL}/videos/${videoId}/comments`, commentData);
      console.log(response.data);
      setCommentsList(response.data);
    } catch (error) {
      console.error('Error posting a comment', error);
      alert('Error posting a comment');
    }
  };

    /**
   * PUT: COMMENTS LIKES
   */
  // useEffect(()=>{
  //   alert("like clicked");
  //   setLikeCount(likeCount + 1);

  // }, []);
    // const putCommentLike = async (commentId)=>{
    //   try{
    //     console.log(commentId);
    //     alert("you clicked like", commentId);
    //     // const response = await axios.put(`${apiURL}/videos/${params.id}/comments/${commentId}`);
    //     // console.log(response.data);
    //     // return response.data;
    //   }
    //   catch(error){
    //     alert("error like comment", error);
    //   }
    // }

  /**
   * DELETE COMMENTS
   */ 
  const deleteComment = async (commentId) => {
    const videoId = !params.id ? defaultVideoId : params.id;
  
    try {
      const response = await axios.delete(`${apiURL}/videos/${videoId}/comments/${commentId}`);
      const updatedCommentsList = commentsList.filter(comment => comment.id !== commentId);
      setCommentsList(updatedCommentsList);
      return response.data;
    } catch (error) {
      console.error('Error deleting comment', error);
      alert('Error deleting comment');
    }
  };


  /********************************** */
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
            onCommentLike={likeCount}
            
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