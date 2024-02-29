import React from "react";
import styled from "styled-components";
import { TiTick } from "react-icons/ti";

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CoverImage = styled.img`
  width: 80vw;
  height: 200px;
  border-radius: 10px;
`;

const ProfileContainer = styled.div`
  width: 80vw;
  display: flex;
  gap: 20px;
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
`;

const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ChannelName = styled.h1`
  font-size: 2.4rem;
`;

const ChannelInfo = styled.p`
  font-size: 0.9rem;
  color: #373737;
`;

const SubscribeButton = styled.button`
  width: 100px;
  height: 40px;
  font-size: 0.9rem;
  border-radius: 20px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;

  &: hover {
    opacity: 0.8;
  }
`;

const LineGap = styled.hr`
  width: 80vw;
`;

const Channel = () => {
  return (
    <>
      <Container>
        <CoverImage src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-cover-photo-design-template-68e134bfc77fb52ab8c44d7a6f1538c9_screen.jpg?ts=1609783467" />
        <ProfileContainer>
          <ProfileImage src="https://prateek540.github.io/portfolio/static/media/Profile.2496924ff18c9cfe60a8.jpg" />
          <ChannelDetails>
            <ChannelName>
              Prateek Pathak <TiTick />
            </ChannelName>
            <ChannelInfo>
              @PrateekPathak · 2M subscribers · 10 videos
            </ChannelInfo>
            <ChannelInfo>Hi everyone and welcome to my channel.</ChannelInfo>
            <SubscribeButton>Subscribe</SubscribeButton>
          </ChannelDetails>
        </ProfileContainer>
        <LineGap />
      </Container>
    </>
  );
};

export default Channel;
