import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Video2 from "./Video2";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
  flex-wrap: wrap;
`;

const VideoSet2 = ({ id }) => {
  const [video, setVideo] = useState({});
  useEffect(() => {
    axios
      .get(`/api/video/getAllVideosUser/${id}`, {}, { credentials: "include" })
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
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
        <Video2 />
      </Container>
    </>
  );
};

export default VideoSet2;
