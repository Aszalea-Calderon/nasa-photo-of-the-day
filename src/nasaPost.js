import React from "react";

const nasaPost = ({ imageURL, title, explain }) => {
  // const [setNasaPost] = setNasaPost.url;

  return (
    <div>
      <h1>NASA PHOTO OF THE DAY</h1>
      <h2>{title}</h2>
      <img src={imageURL} alt="nasa image of the day" />
      <div>{explain}</div>
    </div>
  );
};

export default nasaPost;
// this comonent this compnent will = this state. put prop or deconstruct {} =
