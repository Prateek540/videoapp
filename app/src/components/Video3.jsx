import React from "react";
import styled from "styled-components";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  gap: 10px;
  width: 350px;
  height: 90px;
  cursor: pointer;
`;

const VideoImageContainer = styled.div`
  position: relative;
`;

const VideoImage = styled.img`
  width: 170px;
  height: 90px;
  border-radius: 10px;
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

const VideoDetails = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

const VideoTitle = styled.h1`
  font-size: 1rem;
`;

const VideoAuthor = styled.p`
  font-size: 0.8rem;
  color: #373737;
`;

const ViewDetails = styled.div`
  font-size: 0.8rem;
  color: #373737;
`;

const Video3 = ({ video }) => {
  return (
    <>
      <Link
        to={`/player/${video._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Container>
          <VideoImageContainer>
            <VideoImage src={`/${video.imgURL}`} />
            <VideoLength>02:50</VideoLength>
          </VideoImageContainer>
          <VideoDetails>
            <VideoTitle>{video.title}</VideoTitle>
            <VideoAuthor>
              {video.userId.username} <TiTick />
            </VideoAuthor>
            <ViewDetails>20K views · 1 months ago</ViewDetails>
          </VideoDetails>
        </Container>
      </Link>
    </>
  );
};

export default Video3;
