import React from "react";
import styled from "styled-components";

const Video = styled.video`
  width: 65vw;
  height: 72vh;
  border-radius: 10px;
  background-color: black;
  object-fit: cover;
`;

const Source = styled.source``;

const VideoPlayer = ({ videoURL }) => {
  return (
    <>
      <Video controls>
        <Source src={`/${videoURL}`} type="video/mp4" />
      </Video>
    </>
  );
};

export default VideoPlayer;
