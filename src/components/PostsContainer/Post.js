// You will add code in this file
import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";
import dummydata from "../../dummy-data";

// pass props in this file to [x]
const Post = props => {
  // set up state for the likes
  //console.log(props.post)
  //console.log(dummydata[0])


  function liker(e){
    let newData = [...dummydata];

    if (props.isLiked === false){
      newData[props.index].likes = newData[props.index].likes + 1;
      e.target.style.color = `red`;
      e.target.style.transform = 'scale(1.1)';
      props.setIsLiked(true);
    } else{ 
      newData[props.index].likes = newData[props.index].likes - 1;
      e.target.style.color = `black`;
      e.target.style.transform = 'scale(1)';
      props.setIsLiked(false)
    }

    props.setPost(newData);  
  }

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection likes={props.post.likes} like = {liker}/>
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;
