import React from "react";
import styled from "styled-components";
import Video2 from "./Video2";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
  flex-wrap: wrap;
`;

const VideoSet2 = () => {
  return (
    <>
      <Container>
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
      </Container>
    </>
  );
};

export default VideoSet2;
