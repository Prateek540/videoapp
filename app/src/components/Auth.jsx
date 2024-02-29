import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormBlock = styled.div`
  width: 400px;
  height: 75vh;
  background-color: #e2dfd2;
`;

const SignIn = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const OrHeading = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 10px;
`;

const FormHeading = styled.h3`
  font-size: 1.5rem;
`;

const SubHeading = styled.p`
  font-size: 1rem;
`;

const SignInForm = styled.form`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 300px;
  height: 20px;
  padding: 6px;
  border-radius: 5px;
  border: none;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const Auth = () => {
  const login = (e) => {
    e.preventDefault();
    alert("SignIN");
  };
  const register = (e) => {
    e.preventDefault();
    alert("SignUP");
  };
  return (
    <>
      <Container>
        <FormBlock>
          <SignIn>
            <FormHeading>Sign in</FormHeading>
            <SubHeading>to continue to VideoApp</SubHeading>
            <SignInForm>
              <Input
                name="email"
                type="email"
                placeholder="email"
                autoComplete="off"
              />
              <Input
                name="password"
                type="text"
                placeholder="password"
                autoComplete="off"
              />
              <Button onClick={login} type="submit">
                Sign in
              </Button>
            </SignInForm>
          </SignIn>
          <OrHeading>or</OrHeading>
          <SignIn>
            <FormHeading>Sign up</FormHeading>
            <SubHeading>to create account in VideoApp</SubHeading>
            <SignInForm>
              <Input
                name="username"
                type="text"
                placeholder="username"
                autoComplete="off"
              />
              <Input
                name="email"
                type="email"
                placeholder="email"
                autoComplete="off"
              />
              <Input
                name="password"
                type="password"
                placeholder="password"
                autoComplete="off"
              />
              <Button onClick={register} type="submit">
                Sign up
              </Button>
            </SignInForm>
          </SignIn>
        </FormBlock>
      </Container>
    </>
  );
};

export default Auth;
