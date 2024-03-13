import React from "react";
import styled from "styled-components";
import Video3 from "./Video3";

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const RecommendSet = () => {
  return (
    <>
      <Container>
        <Video3 />
        <Video3 />
        <Video3 />
        <Video3 />
        <Video3 />
        <Video3 />
        <Video3 />
        <Video3 />
        <Video3 />
        <Video3 />
      </Container>
    </>
  );
};

export default RecommendSet;
