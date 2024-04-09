import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Video1 from "./Video1";
import axios from "axios";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  margin-top: 60px;
`;

const VideoSet1 = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    axios
      .get("/api/video/getAllVideos")
      .then((response) => {
        setVideo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(video);
  return (
    <>
      <Container>
        {video.map((vid) => {
          return <Video1 key={vid._id} />;
        })}
      </Container>
    </>
  );
};

export default VideoSet1;
