import React from "react";
import styled from "styled-components";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 300px;
  flex: 0 0 calc(25% - 20px);
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

const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50px;
`;

const VideoName = styled.h4`
  font-size: 1rem;
`;

const VideoDetails2 = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

const AuthorName = styled.div`
  font-size: 0.9rem;
  color: #373737;
`;

const ViewDetails = styled.div`
  font-size: 0.8rem;
  color: #373737;
`;

const Video1 = () => {
  return (
    <>
      <Container>
        <Link to="/player" style={{ textDecoration: "none", color: "inherit" }}>
          <VideoImageContainer>
            <VideoImage src="https://www.hubspot.com/hubfs/best-youtube-channels-4.jpg" />
            <VideoLength>02:50</VideoLength>
          </VideoImageContainer>
          <VideoDetails1>
            <ProfileImage src="https://prateek540.github.io/portfolio/static/media/Profile.2496924ff18c9cfe60a8.jpg" />
            <VideoDetails2>
              <VideoName>Best Videos</VideoName>
              <AuthorName>
                Prateek Pathak <TiTick />
              </AuthorName>
              <ViewDetails>20K views · 1 months ago</ViewDetails>
            </VideoDetails2>
          </VideoDetails1>
        </Link>
      </Container>
    </>
  );
};

export default Video1;
