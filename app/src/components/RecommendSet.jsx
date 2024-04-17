import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Video3 from "./Video3";
import axios from "axios";

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const RecommendSet = ({ id }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/video/getAllVideosUser/${id}`)
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <Container>
        {videos.map((video) => {
          return <Video3 key={video._id} video={video} />;
        })}
      </Container>
    </>
  );
};

export default RecommendSet;
