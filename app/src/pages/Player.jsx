import React from "react";
import styled from "styled-components";

const Video = styled.video``;

const Source = styled.source``;

function Player() {
  return (
    <>
      <Video width="320" height="240" controls>
        <Source src="https://youtu.be/8F8sp-umS20" type="video/mp4" />
      </Video>
    </>
  );
}

export default Player;
