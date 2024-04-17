import react, { useEffect, useState } from "react";
import styled from "styled-components";
import { TiTick } from "react-icons/ti";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoSet2 from "./VideoSet2";

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

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const JoinButton = styled.button`
  width: 100px;
  height: 40px;
  font-size: 0.9rem;
  border-radius: 20px;
  border: none;
  background-color: #edeade;
  color: black;
  cursor: pointer;

  &: hover {
    opacity: 0.8;
  }
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

const ChannelOther = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`/api/user/getUserByUsername/${username}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Container>
        <CoverImage src={`/${user.coverPicture}`} />
        <ProfileContainer>
          <ProfileImage src={`/${user.profilePicture}`} />
          <ChannelDetails>
            <ChannelName>
              {user.username} <TiTick />
            </ChannelName>
            <ChannelInfo>
              @{user.email} · 2M subscribers · 10 videos
            </ChannelInfo>
            <ChannelInfo>{user.description}</ChannelInfo>
            <Buttons>
              <JoinButton>Join</JoinButton>
              <SubscribeButton>Subscribe</SubscribeButton>
            </Buttons>
          </ChannelDetails>
        </ProfileContainer>
        <LineGap />
      </Container>
      {user._id && <VideoSet2 id={user._id} />}
    </>
  );
};

export default ChannelOther;
