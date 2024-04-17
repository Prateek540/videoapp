import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import axios from "axios";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 20px;
  flex-direction: column;
`;

const CommentList = ({ id }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/comment/getComment/${id}`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Container>
        {comments.map((comment) => {
          return <Comment key={comment._id} comment={comment} />;
        })}
      </Container>
    </>
  );
};

export default CommentList;
