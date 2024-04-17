import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50px;
`;

const Username = styled.h1`
  font-size: 0.8rem;
`;

const CommentDate = styled.span`
  font-size: 0.7rem;
  color: #373737;
  font-weight: normal;
`;

const CommentText = styled.p`
  font-size: 0.9rem;
`;

const Comment = ({ comment }) => {
  return (
    <>
      <Container>
        <ProfileImage src={`/${comment.userId.profilePicture}`} />
        <ProfileDetail>
          <Username>
            {comment.userId.username} <CommentDate>3 years ago</CommentDate>
          </Username>
          <CommentText>{comment.text}</CommentText>
        </ProfileDetail>
      </Container>
    </>
  );
};

export default Comment;
