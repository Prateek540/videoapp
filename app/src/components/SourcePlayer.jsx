import React from "react";
import styled from "styled-components";
import video from "../assets/Sample.mp4";
import { TiTick } from "react-icons/ti";
import { PiShareFat } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Comment from "./Comment";
import RecommendSet from "./RecommendSet";

const Container = styled.div`
  display: flex;
  gap: 10px;
  padding: 80px 50px;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Video = styled.video`
  width: 65vw;
  height: 72vh;
  border-radius: 10px;
  background-color: black;
  object-fit: cover;
`;

const Source = styled.source``;

const VideoTitle = styled.h1`
  font-size: 1.6rem;
`;

const AuthorTitle = styled.div`
  width: 65vw;
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

const DetailTitle = styled.div`
  display: flex;
  gap: 5px;
`;

const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50px;
`;

const Author = styled.div`
  display: flex;
  gap: 2px;
  flex-direction: column;
`;

const AuthorName = styled.h1`
  font-size: 1rem;
  cursor: pointer;
`;

const AuthorDetails = styled.div`
  font-size: 0.8rem;
  color: #373737;
`;

const Buttons = styled.div`
  display: flex;
  gap: 5px;
`;

const JoinButton = styled.button`
  width: 110px;
  height: 40px;
  font-size: 0.9rem;
  border-radius: 20px;
  border: none;
  background-color: #edeade;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  &: hover {
    opacity: 0.8;
  }
`;

const SubscribeButton = styled.button`
  width: 110px;
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

const LikeButton = styled.button`
  width: 70px;
  height: 40px;
  font-size: 0.9rem;
  border-radius: 20px;
  border: none;
  background-color: #edeade;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  &: hover {
    opacity: 0.8;
  }
`;

const VideoDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 64vw;
  height: auto;
  border-radius: 10px;
  padding: 10px;
  background-color: #e5e4e2;
`;

const VideoDetailHeading = styled.h1`
  font-size: 1rem;
`;

const VideoDetailPara = styled.p`
  font-size: 0.9rem;
`;

const CommentContainer = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const CommentHeading = styled.h1`
  font-size: 1.2rem;
`;

const CommentInput = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Input = styled.input`
  width: 54vw;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 8px;
  font-size: 1rem;
  outline: none;
`;

const CommentList = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 20px;
  flex-direction: column;
`;

function SourcePlayer() {
  return (
    <>
      <Container>
        <VideoContainer>
          <Video controls>
            <Source src={video} type="video/mp4" />
          </Video>
          <VideoTitle>My First Video !!!</VideoTitle>
          <AuthorTitle>
            <DetailTitle>
              <ProfileImage src="https://prateek540.github.io/portfolio/static/media/Profile.2496924ff18c9cfe60a8.jpg" />
              <Author>
                <AuthorName>
                  Prateek Pathak <TiTick />
                </AuthorName>
                <AuthorDetails>2M subscribers</AuthorDetails>
              </Author>
              <Buttons>
                <JoinButton>Join</JoinButton>
                <SubscribeButton>Subscribe</SubscribeButton>
              </Buttons>
            </DetailTitle>
            <Buttons>
              <LikeButton>
                <AiOutlineLike style={{ width: "1.5rem", height: "1.5rem" }} />
                2K
              </LikeButton>
              <LikeButton>
                <AiOutlineDislike
                  style={{ width: "1.5rem", height: "1.5rem" }}
                />
              </LikeButton>
              <JoinButton>
                <PiShareFat style={{ width: "1.5rem", height: "1.5rem" }} />
                Share
              </JoinButton>
              <JoinButton>
                <MdOutlineFileDownload
                  style={{ width: "1.5rem", height: "1.5rem" }}
                />
                Download
              </JoinButton>
              <LikeButton>
                <BiDotsHorizontalRounded
                  style={{ width: "1.5rem", height: "1.5rem" }}
                />
              </LikeButton>
            </Buttons>
          </AuthorTitle>
          <VideoDetail>
            <VideoDetailHeading>2M views 4 years ago</VideoDetailHeading>
            <VideoDetailPara>
              #video #funny This video is all about my channel Prateek Pathak.
              Please like share and subscribe to my channel.
            </VideoDetailPara>
          </VideoDetail>
          <CommentContainer>
            <CommentHeading>200 Comments</CommentHeading>
            <CommentInput>
              <ProfileImage src="https://prateek540.github.io/portfolio/static/media/Profile.2496924ff18c9cfe60a8.jpg" />
              <Input type="text" />
              <JoinButton>Comment</JoinButton>
            </CommentInput>
            <CommentList>
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </CommentList>
          </CommentContainer>
        </VideoContainer>
        <RecommendSet />
      </Container>
    </>
  );
}

export default SourcePlayer;
