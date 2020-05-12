/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import dummydata from "./dummy-data";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import PostsPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBarContainer";

const App = () => {

  let [isLiked, setIsLiked] = useState(false)
  let [postData, setPostData] = useState(dummydata);
  let [searchTerm, setSearch] = useState('');
  
  
  //const updateLikes = {}


  return (
    <div className="App">
      <SearchBar term={searchTerm} setTerm={setSearch} />
      <PostsPage posts={postData} setPosts={setPostData} isLiked = {isLiked} setIsLiked = {setIsLiked}/>
    </div>
  );
};

export default App;
