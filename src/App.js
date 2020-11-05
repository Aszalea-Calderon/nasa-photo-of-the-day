import React, { useState, useEffect } from "react";
import Posts from "./components/Posts/posts";

import "./App.css";
// TASK 1 - import the axios lib from node_modules
import axios from "axios";

// TASK 2 - import the contants from constants/index.js
import { BASE_URL, API_KEY } from "./constants/apiInfo.js";

function App() {
  //Setting the slices of State
  const [posts, setPosts] = useState([]);

  //Calling the Axios's
  useEffect(() => {
    axios
      .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
      .then((res) => {
        debugger;
        // setFriends(res.data);
      })
      .catch((err) => {
        debugger;

        // console.log(err);
      });
  }, []);

  //Doing stuff here, We are going to have a post that we can like
  const likePost = (postId) => {
    setPosts(
      posts.map((item) => {
        return item.id === postId ? { ...item, likes: item.likes + 1 } : item;
      })
    );
  };

  //Shipping it out
  return (
    <div className="App">
      <p>
        <Posts likePost={likePost} posts={posts} />
        Welcome to Nasa's Photo of the day!
        <span role="img" aria-label="go!">
          🚀
        </span>
      </p>
    </div>
  );
}

export default App;
