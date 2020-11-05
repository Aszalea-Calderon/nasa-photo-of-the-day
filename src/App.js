import React, { useState, useEffect } from "react";
import NasaPost from "./nasaPost";

import "./App.css";
import axios from "axios";

import { BASE_URL, API_KEY } from "./constants/apiInfo.js";

function App() {
  // const [nasaPost, setNasaPost] = useState("");
  const [url, setUrl] = useState();
  const [title, setTitle] = useState();
  const [explanation, setExplanation] = useState();

  //Calling the Axios's
  useEffect(() => {
    axios
      .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
      .then((res) => {
        // setNasaPost(res.data);
        console.log(res.data);
        console.log(res.data.url);

        const imageUrl = res.data.url;
        const title = res.data.title;
        const explain = res.data.explanation;

        setUrl(imageUrl);
        setTitle(title);
        setExplanation(explain);

        debugger;
      })
      .catch((err) => {
        console.log(err, "the error is here");
        debugger;

        // console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <NasaPost imageUrl={url} title={title} explain={explanation} />
    </div>
  );
}

export default App;

//create a style the component to inset the dta
//nasa post.. call axios within it. style the post within it. pass nasa post. later- adding them by dates
