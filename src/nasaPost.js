import React from "react";

const nasaPost = ({ photo, title, explain, date }) => {
  // const [setNasaPost] = setNasaPost.url;

  return (
    <div>
      <h1>NASA PHOTO OF THE DAY</h1>
      <h2>{title}</h2>
      <p>{date}</p>
      <img src={photo} alt="nasa image of the day" />
      <div>{explain}</div>
    </div>
  );
};

export default nasaPost;
// this comonent this compnent will = this state. put prop or deconstruct {} =
