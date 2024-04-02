import React, { useContext } from "react";
import styled from "styled-components";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";
import { MdWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";
import { MdMovie } from "react-icons/md";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { GiHanger } from "react-icons/gi";
import { FaPodcast } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaFlag } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import { MdFeedback } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { UserContext } from "../UserContext";
import axios from "axios";

const Menu = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  height: calc(100vh - 60px);
  width: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;
  background-color: #fff;
`;

const Container = styled.div`
  width: 100%;
`;

const Heading = styled.h4`
  margin: 0 30px;
  padding: 10px;
`;

const List = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: initial;
  gap: 20px;
  margin: 0 5px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  &: hover {
    background-color: #dddddd;
  }
`;

const ItemIcon = styled.span`
  display: flex;
  font-size: 1.4rem;
`;

const ItemHeading = styled.p`
  font-size: 0.9rem;
`;

const HeadingGap = styled.hr`
  margin: 5px 0;
`;

const LeftMenu = ({ hoverMenu }) => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const nav = useNavigate();

  const logoutHandler = () => {
    axios
      .post("/api/auth/logout")
      .then((response) => {
        setUserInfo(null);
        nav("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Menu style={{ display: `${hoverMenu ? "" : "none"}` }}>
        <Container>
          <List>
            <Item>
              <ItemIcon>
                <IoMdHome />
              </ItemIcon>
              <ItemHeading>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Home
                </Link>
              </ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <SiYoutubeshorts />
              </ItemIcon>
              <ItemHeading>Shorts</ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <MdSubscriptions />
              </ItemIcon>
              <ItemHeading>Subscriptions</ItemHeading>
            </Item>
          </List>
          <HeadingGap />
          <Heading>You</Heading>
          <List>
            <Item>
              <ItemIcon>
                <FaUser />
              </ItemIcon>
              <ItemHeading>
                <Link
                  to="/profile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Your channel
                </Link>
              </ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <FaHistory />
              </ItemIcon>
              <ItemHeading>History</ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <BiSolidVideos />
              </ItemIcon>
              <ItemHeading>Your Videos</ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <MdWatchLater />
              </ItemIcon>
              <ItemHeading>Watch Later</ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <AiFillLike />
              </ItemIcon>
              <ItemHeading>Liked Videos</ItemHeading>
            </Item>
            {userInfo && (
              <Item onClick={logoutHandler}>
                <ItemIcon>
                  <IoLogOut />
                </ItemIcon>
                <ItemHeading>Logout</ItemHeading>
              </Item>
            )}
          </List>
          <HeadingGap />
          <Heading>Subscriptions</Heading>
          <List>
            <Item>
              <ItemIcon>
                <FaCircleUser />
              </ItemIcon>
              <ItemHeading>Prateek Pathak</ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <FaCircleUser />
              </ItemIcon>
              <ItemHeading>Sandeep Pathak</ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <IoMdAddCircle />
              </ItemIcon>
              <ItemHeading>Browse Channels</ItemHeading>
            </Item>
          </List>
          <HeadingGap />
          <Heading>Explore</Heading>
          <List>
            <Item>
              <ItemIcon>
                <FaMoneyBillTrendUp />
              </ItemIcon>
              <ItemHeading>Trending</ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <FaShoppingBag />
              </ItemIcon>
              <ItemHeading>Shopping</ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <IoMdMusicalNote />
              </ItemIcon>
              <ItemHeading>Music</ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <MdMovie />
              </ItemIcon>
              <ItemHeading>Movies</ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <MdOutlineLiveTv />
              </ItemIcon>
              <ItemHeading>Live</ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <FaGamepad />
              </ItemIcon>
              <ItemHeading>Gaming</ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <IoNewspaper />
              </ItemIcon>
              <ItemHeading>News</ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <FaTrophy />
              </ItemIcon>
              <ItemHeading>Sports</ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <FaBookOpen />
              </ItemIcon>
              <ItemHeading>Learning</ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <GiHanger />
              </ItemIcon>
              <ItemHeading>Fashion & Beauty</ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <FaPodcast />
              </ItemIcon>
              <ItemHeading>Podcasts</ItemHeading>
            </Item>
          </List>
          <HeadingGap />
          <Heading>More</Heading>
          <List>
            <Item>
              <ItemIcon>
                <IoSettings />
              </ItemIcon>
              <ItemHeading>Settings</ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <FaFlag />
              </ItemIcon>
              <ItemHeading>Report History</ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <IoIosHelpCircle />
              </ItemIcon>
              <ItemHeading>Help</ItemHeading>
            </Item>
            <Item>
              <ItemIcon>
                <MdFeedback />
              </ItemIcon>
              <ItemHeading>Send Feedback</ItemHeading>
            </Item>
          </List>
          <HeadingGap />
        </Container>
      </Menu>
    </>
  );
};

export default LeftMenu;
