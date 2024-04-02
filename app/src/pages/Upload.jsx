import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaPhotoVideo } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { UserContext } from "../UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormBlock = styled.div`
  width: 900px;
  height: 80vh;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 10px 10px 5px #e2dfd2;
`;

const SignInForm = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const InputErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 500px;
  height: 20px;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid black;
  outline: none;
  border: none;
`;

const FormHeading = styled.h3`
  font-size: 1.4rem;
  text-align: center;
  margin-top: 10px;
  color: gray;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &: hover {
    background-color: #e5e4e2;
  }
`;

const Error = styled.span`
  color: #f26969;
  font-weight: bold;
  display: block;
  font-size: 0.8rem;
  text-align: right;
  margin-bottom: -1px;
`;

const Label = styled.label``;

const Upload = () => {
  const { userInfo } = useContext(UserContext);
  const nav = useNavigate();
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState({
    file1: "",
    file2: "",
    title: "",
    description: "",
    server: "",
  });

  const upload = (e) => {
    e.preventDefault();
    setError({
      file1: "",
      file2: "",
      title: "",
      description: "",
      server: "",
    });

    const data = {
      title,
      file1,
      file2,
      description,
    };

    const error = {
      file1: "",
      file2: "",
      title: "",
      description: "",
      server: "",
    };

    const isValidFile = (file) => {
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      const maxFileSize = 1024 * 1024 * 5; // 5MB

      return allowedTypes.includes(file.type) && file.size <= maxFileSize;
    };

    const isValidVideo = (file) => {
      const allowedTypes = ["video/mp4", "video/mpeg", "video/quicktime"];
      const maxFileSize = 1024 * 1024 * 10; // 10MB

      return allowedTypes.includes(file.mimetype) && file.size <= maxFileSize;
    };

    if (!data.file1) {
      error.file1 = "Please upload video thumbnail";
    } else if (!isValidFile(data.file1)) {
      error.file1 =
        "Only .jpg, .jpeg and .png format allowed with file size less than 5 mb";
    }

    if (!data.file2) {
      error.file2 = "Please upload video";
    } else if (!isValidVideo(data.file2)) {
      error.file2 =
        "Only .mp4, .mpeg and .png format allowed with file size less than 5 mb";
    }

    if (!data.title) {
      error.title = "Title is empty";
    } else if (data.title.length < 6 || data.title.length > 50) {
      error.title = "Title limit is 6 to 50 characters only";
    }

    if (!data.description) {
      error.description = "Description is empty";
    } else if (data.description.length < 6 || data.description.length > 100) {
      error.description = "Description limit is 6 to 100 characters only";
    }

    if (
      error.file2 !== "" ||
      error.file1 !== "" ||
      error.title !== "" ||
      error.description !== ""
    ) {
      setError(error);
      return;
    }

    axios
      .post(`/api/video/createVideo/${userInfo._id}`, data, {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
      .then((response) => {
        nav("/");
      })
      .catch((err) => {
        error.server = "Server error please try again";
        setError(error);
      });
  };

  return (
    <Container>
      <FormBlock>
        <FormHeading>Upload Videos</FormHeading>
        <SignInForm>
          <InputErrorContainer>
            <Input
              type="file"
              name="file1"
              id="file1"
              onChange={(e) => setFile1(e.target.files[0])}
              accept=".jpg,.jpeg,.png"
              style={{ display: "none" }}
            />
            <Label htmlFor="file1" style={{ cursor: "pointer" }}>
              <FaPhotoVideo style={{ width: "1.2rem", height: "1.2rem" }} />
            </Label>
          </InputErrorContainer>
          <Error>{error.file1}</Error>
          <InputErrorContainer>
            <Input
              type="file"
              name="file2"
              id="file2"
              onChange={(e) => setFile2(e.target.files[0])}
              accept=".jpg,.jpeg,.png"
              style={{ display: "none" }}
            />
            <Label htmlFor="file2" style={{ cursor: "pointer" }}>
              <FaUpload style={{ width: "1.2rem", height: "1.2rem" }} />
            </Label>
          </InputErrorContainer>
          <Error>{error.file2}</Error>
          <InputErrorContainer>
            <Input
              type="text"
              value={title}
              placeholder="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Error>{error.title}</Error>
          </InputErrorContainer>
          <InputErrorContainer>
            <Input
              type="text"
              value={description}
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Error>{error.description}</Error>
          </InputErrorContainer>
          <Button onClick={upload} type="submit">
            Upload
          </Button>
          <Error>{error.server}</Error>
        </SignInForm>
      </FormBlock>
    </Container>
  );
};

export default Upload;
