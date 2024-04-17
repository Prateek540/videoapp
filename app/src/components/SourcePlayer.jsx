import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { TiTick } from "react-icons/ti";
import { PiShareFat } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import RecommendSet from "./RecommendSet";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import VideoPlayer from "./VideoPlayer";
import { UserContext } from "../UserContext";
import CommentList from "./CommentList";

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

const SourcePlayer = () => {
  const { id } = useParams();
  const [video, setVideo] = useState({});
  const [text, setText] = useState("");
  const { userInfo } = useContext(UserContext);
  const nav = useNavigate();

  const commentHandler = () => {
    if (userInfo === null) {
      nav("/auth");
    }
    if (text === "") {
      return;
    }
    axios
      .post(
        `/api/comment/createComment/${userInfo?.id}/${id}`,
        { text },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get(`/api/video/getVideoById/${id}`)
      .then((response) => {
        setVideo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Container>
        <VideoContainer>
          {video.videoURL && <VideoPlayer videoURL={video.videoURL} />}
          <VideoTitle>{video.title}</VideoTitle>
          <AuthorTitle>
            <DetailTitle>
              <ProfileImage src={`/${video.userId?.profilePicture}`} />
              <Author>
                <AuthorName>
                  {video.userId?.username} <TiTick />
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
            <VideoDetailPara>{video.description}</VideoDetailPara>
          </VideoDetail>
          <CommentContainer>
            <CommentHeading>200 Comments</CommentHeading>
            <CommentInput>
              {userInfo && (
                <ProfileImage src={`/${userInfo?.profilePicture}`} />
              )}
              {!userInfo && (
                <FaRegUser
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    cursor: "pointer",
                  }}
                />
              )}
              <Input type="text" onChange={(e) => setText(e.target.value)} />
              <JoinButton onClick={commentHandler}>Comment</JoinButton>
            </CommentInput>
            {video._id && <CommentList id={video._id} />}
          </CommentContainer>
        </VideoContainer>
        {video.userId?._id && <RecommendSet id={video.userId?._id} />}
      </Container>
    </>
  );
};

export default SourcePlayer;
