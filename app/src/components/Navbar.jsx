import React from "react";
import styled from "styled-components";
import { PiVideoBold } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoUploadLine } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  position: fixed;
  z-index: 10;
  top: 0;
  height: 60px;
  width: 100vw;
  background-color: white;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const MenuBar = styled.div`
  display: flex;
  margin-left: 10px;
  padding: 10px;
  border-radius: 50px;

  &:hover {
    background-color: #e5e4e2;
  }
`;

const IconBar = styled.div`
  display: flex;
  gap: 2px;
  margin-left: 15px;
`;

const IconHeading = styled.h1`
  font-size: 1.6rem;
`;

const SearchBar = styled.div`
  display: flex;
  margin-left: 15vw;
`;

const Search = styled.input`
  width: 500px;
  padding: 10px 15px;
  border: 2px solid #dddddd;
  border-radius: 50px 0px 0px 50px;
  font-size: 1rem;
  outline: none;
`;

const Button1 = styled.button`
  padding: 10px 20px 8px 20px;
  border: 2px solid #dddddd;
  border-radius: 0px 50px 50px 0px;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    background-color: #e5e4e2;
  }
`;

const Button2 = styled.button`
  padding: 8px 10px;
  margin-left: 1vw;
  border: 2px solid #dddddd;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: #e5e4e2;
  }
`;

const UploadBar = styled.div`
  margin-left: 15vw;
  display: flex;
  gap: 2.5vw;
`;

const Navbar = ({ hoverMenu, setHoverMenu }) => {
  return (
    <>
      <Nav>
        <Container>
          <MenuBar>
            <CiMenuBurger
              onClick={() => setHoverMenu(!hoverMenu)}
              style={{
                minWidth: "1.5rem",
                minHeight: "1.5rem",
                cursor: "pointer",
              }}
            />
          </MenuBar>
          <IconBar>
            <PiVideoBold style={{ width: "2rem", height: "2rem" }} />
            <IconHeading>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                VideoApp
              </Link>
            </IconHeading>
          </IconBar>
          <SearchBar>
            <Search type="text" name="search" placeholder="Search" />
            <Button1>
              <IoSearchOutline />
            </Button1>
            <Button2>
              <FaMicrophone />
            </Button2>
          </SearchBar>
          <UploadBar>
            <RiVideoUploadLine
              style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
            />
            <CiBellOn
              style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
            />
            <Link to="/profile" style={{ color: "black" }}>
              <FaRegUser
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
              />
            </Link>
          </UploadBar>
        </Container>
      </Nav>
    </>
  );
};

export default Navbar;
