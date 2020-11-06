import React from "react";
import Style from "styled-components";

const nasaPost = ({ photo, title, explain, date }) => {
  // const [setNasaPost] = setNasaPost.url;
  const Styled = Style.div`
    background-color:${(pr) => pr.theme.backgroundColor};
    color:${(pr) => pr.theme.fontColor};
    padding:${(pr) => pr.theme.padding};
  `;

  return (
    <Styled>
      <h1>NASA PHOTO OF THE DAY</h1>
      <h2>{title}</h2>
      <p>{date}</p>
      <img src={photo} alt="nasa image of the day" />
      <div>{explain}</div>
    </Styled>
  );
};

export default nasaPost;
// this comonent this compnent will = this state. put prop or deconstruct {} =
