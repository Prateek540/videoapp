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
  const [video, setVideo] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/video/getAllVideosUser/${id}`)
      .then((response) => {
        setVideo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <>
      <Container>
        {video.map((vid) => {
          return <Video2 key={vid._id} video={vid} />;
        })}
      </Container>
    </>
  );
};

export default VideoSet2;
