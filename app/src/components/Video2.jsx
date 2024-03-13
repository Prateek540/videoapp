import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 300px;
  flex: 0 0 calc(33.33% - 80px);
  margin: 10px;
  box-sizing: border-box;
  cursor: pointer;
`;

const VideoImageContainer = styled.div`
  position: relative;
`;

const VideoImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 15px;

  &: hover {
    border-radius: 5px;
  }
`;

const VideoLength = styled.span`
  position: absolute;
  background-color: #000000;
  color: #f9f6ee;
  padding: 1px 2px;
  font-size: 0.8rem;
  bottom: 10px;
  right: 10px;
  border-radius: 5px;
`;

const VideoDetails1 = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 5px;
`;

const VideoName = styled.h4`
  font-size: 1rem;
`;

const VideoDetails2 = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

const ViewDetails = styled.div`
  font-size: 0.8rem;
  color: #373737;
`;

const Video2 = () => {
  return (
    <>
      <Container>
        <VideoImageContainer>
          <VideoImage src="https://www.hubspot.com/hubfs/best-youtube-channels-4.jpg" />
          <VideoLength>02:50</VideoLength>
        </VideoImageContainer>
        <VideoDetails1>
          <VideoDetails2>
            <VideoName>Best Videos</VideoName>
            <ViewDetails>20K views · 1 months ago</ViewDetails>
          </VideoDetails2>
        </VideoDetails1>
      </Container>
    </>
  );
};

export default Video2;
