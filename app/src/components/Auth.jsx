import React, { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { CgProfile } from "react-icons/cg";
import { SlPicture } from "react-icons/sl";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormBlock = styled.div`
  width: 400px;
  height: 84vh;
  background-color: #e2dfd2;
`;

const SignIn = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const OrHeading = styled.h3`
  font-size: 1.2rem;
  text-align: center;
`;

const FormHeading = styled.h3`
  font-size: 1.4rem;
`;

const SubHeading = styled.p`
  font-size: 1rem;
`;

const SignInForm = styled.form`
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
  width: 300px;
  height: 20px;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid black;
  outline: none;
  border: none;
`;

const Label = styled.label``;

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
`;

const Auth = () => {
  //Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState({
    email: "",
    password: "",
    server: "",
  });

  //Signup
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [username, setUsername] = useState("");
  const [emailR, setEmailR] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [signupError, setSignupError] = useState({
    file1: "",
    file2: "",
    username: "",
    emailR: "",
    passwordR: "",
    server: "",
  });

  const { setUserInfo } = useContext(UserContext);
  const nav = useNavigate();

  const login = (e) => {
    e.preventDefault();
    setLoginError({ email: "", password: "", server: "" });
    const data = {
      email,
      password,
    };
    const error = {
      email: "",
      password: "",
      server: "",
    };

    if (data.email === "") {
      error.email = "Email is empty";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      error.email = "Email is incorrect";
    }

    if (data.password === "") {
      error.password = "Password is empty";
    } else if (data.password.length < 6 || data.password.length > 20) {
      error.password = "Password limit is 6 to 20 characters";
    }

    if (error.email !== "" || error.password !== "") {
      setLoginError(error);
      return;
    }
    axios
      .post("/api/auth/login", data, {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
      .then((response) => {
        setUserInfo(response.data);
        nav("/");
      })
      .catch((err) => {
        error.server = "Server error please try again.";
        setLoginError(error);
      });
    setEmail("");
    setPassword("");
  };

  const register = (e) => {
    e.preventDefault();
    setSignupError({
      file1: "",
      file2: "",
      username: "",
      emailR: "",
      passwordR: "",
      server: "",
    });

    const data = {
      file1,
      file2,
      username,
      emailR,
      passwordR,
    };

    const error = {
      file1: "",
      file2: "",
      username: "",
      emailR: "",
      passwordR: "",
      server: "",
    };

    const isValidFile = (file) => {
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      const maxFileSize = 1024 * 1024 * 5; // 5MB

      return allowedTypes.includes(file.type) && file.size <= maxFileSize;
    };

    if (!data.file1) {
      error.file1 = "Please upload profile picture";
    } else if (!isValidFile(data.file1)) {
      error.file1 =
        "Only .jpg, .jpeg and .png format allowed with file size less than 5 mb";
    }

    if (!data.file2) {
      error.file2 = "Please upload cover picture";
    } else if (!isValidFile(data.file2)) {
      error.file2 =
        "Only .jpg, .jpeg and .png format allowed with file size less than 5 mb";
    }

    if (data.username === "") {
      error.username = "Username is empty";
    } else if (data.username.length < 6 || data.username.length > 20) {
      error.username = "Username limit is 6 to 20 characters";
    }

    if (data.emailR === "") {
      error.emailR = "Email is empty";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.emailR)) {
      error.emailR = "Email is incorrect";
    }

    if (data.passwordR === "") {
      error.passwordR = "Password is empty";
    } else if (data.passwordR.length < 6 || data.passwordR.length > 20) {
      error.passwordR = "Password limit is 6 to 20 characters";
    }

    if (
      error.file2 !== "" ||
      error.file1 !== "" ||
      error.username !== "" ||
      error.emailR !== "" ||
      error.passwordR !== ""
    ) {
      setSignupError(error);
      return;
    }

    axios
      .post("/api/auth/register", data, {
        headers: { "Content-Type": "multipart/form-data" },
        credentials: "include",
      })
      .then((response) => {
        setUserInfo(response.data);
        nav("/");
      })
      .catch((err) => {
        error.server = "Server error please try again.";
        setSignupError(error);
      });
    setFile1(null);
    setFile2(null);
    setUsername("");
    setEmailR("");
    setPasswordR("");
  };

  return (
    <>
      <Container>
        <FormBlock>
          <SignIn>
            <FormHeading>Sign in</FormHeading>
            <SubHeading>to continue to VideoApp</SubHeading>
            <SignInForm>
              <InputErrorContainer>
                <Input
                  name="email"
                  value={email}
                  type="email"
                  placeholder="email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Error>{loginError.email}</Error>
              </InputErrorContainer>
              <InputErrorContainer>
                <Input
                  name="password"
                  value={password}
                  type="password"
                  placeholder="password"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Error>{loginError.password}</Error>
              </InputErrorContainer>
              <Button onClick={login} type="submit">
                Sign in
              </Button>
              <Error>{loginError.server}</Error>
            </SignInForm>
          </SignIn>
          <OrHeading>or</OrHeading>
          <SignIn>
            <FormHeading>Sign up</FormHeading>
            <SubHeading>to create account in VideoApp</SubHeading>
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
                  <CgProfile />
                </Label>
              </InputErrorContainer>
              <Error>{signupError.file1}</Error>
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
                  <SlPicture />
                </Label>
              </InputErrorContainer>
              <Error>{signupError.file2}</Error>
              <InputErrorContainer>
                <Input
                  name="username"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username"
                  autoComplete="off"
                />
                <Error>{signupError.username}</Error>
              </InputErrorContainer>
              <InputErrorContainer>
                <Input
                  name="email"
                  type="email"
                  onChange={(e) => setEmailR(e.target.value)}
                  placeholder="email"
                  autoComplete="off"
                />
                <Error>{signupError.emailR}</Error>
              </InputErrorContainer>
              <InputErrorContainer>
                <Input
                  name="password"
                  type="password"
                  onChange={(e) => setPasswordR(e.target.value)}
                  placeholder="password"
                  autoComplete="off"
                />
                <Error>{signupError.passwordR}</Error>
              </InputErrorContainer>
              <Button onClick={register} type="submit">
                Sign up
              </Button>
              <Error>{signupError.server}</Error>
            </SignInForm>
          </SignIn>
        </FormBlock>
      </Container>
    </>
  );
};

export default Auth;
