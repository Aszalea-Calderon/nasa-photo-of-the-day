import React, { useState, useEffect } from "react";
import NasaPost from "./nasaPost";
import { ThemeProvider } from "styled-components";
import Theme from "./components/style.js";

import "./App.css";
import axios from "axios";

import { BASE_URL, API_KEY } from "./constants/apiInfo.js";

function App() {
  // const [nasaPost, setNasaPost] = useState("");
  const [photo, setPhoto] = useState();
  const [title, setTitle] = useState();
  const [explanation, setExplanation] = useState();
  const [date, setDate] = useState();

  //Calling the Axios's
  useEffect(() => {
    axios
      .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
      .then((res) => {
        // setNasaPost(res.data);
        console.log(res.data);
        console.log(res.data.url);

        const photo = res.data.url;
        const title = res.data.title;
        const explain = res.data.explanation;
        const date = res.data.date;

        setPhoto(photo);
        setTitle(title);
        setExplanation(explain);
        setDate(date);

        debugger;
      })
      .catch((err) => {
        console.log(err, "the error is here");
        debugger;

        // console.log(err);
      });
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <NasaPost
          photo={photo}
          title={title}
          explain={explanation}
          date={date}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
