import React from "react";
import styled from "styled-components";
import Video1 from "./Video1";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  margin-top: 60px;
`;

const VideoSet1 = () => {
  return (
    <>
      <Container>
        <Video1 />
        <Video1 />
        <Video1 />
        <Video1 />
        <Video1 />
        <Video1 />
        <Video1 />
        <Video1 />
        <Video1 />
        <Video1 />
        <Video1 />
        <Video1 />
        <Video1 />
        <Video1 />
        <Video1 />
        <Video1 />
      </Container>
    </>
  );
};

export default VideoSet1;
