//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

const PostsPage = props => {
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {/* TL QUESTIONS: Is using index as Key bad practice? */}
      {/* So uhhh passing props one at a time sucks, should probably do this with an object or a class or something*/}
      {props.posts.map((aPost, index) =>
      {return <Post post = {aPost} key= {`${aPost.username}${aPost.timestamp}`} setPost = {props.setPosts} index = {index} isLiked = {props.isLiked} setIsLiked = {props.setIsLiked}/>})}
      {/*map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;
