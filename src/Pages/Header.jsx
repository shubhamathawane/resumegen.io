import React, { useState } from "react";
// import NightsStayIcon from "@mui/icons-material/NightsStay";
import styled from "styled-components";
// import LightModeIcon from "@mui/icons-material/LightModd";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Button = styled.button`
    border: none;
    background-color: transparent;
    color: gray;
    cursor: pointer;
  `;

  return (
    <Nav>
      <Logo href="">
        ResumeGen.io
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        {/* <Button
          title="change Theme"
          onClick={() => setDarkMode(!darkMode)}
          variant="outlined"
          pill
        >
          {darkMode ? (
            <LightModeIcon style={{ color: "#55f56a84" }} />
          ) : (
            <NightsStayIcon color="primary" />
          )}
        </Button> */}

        <Slink to="/">Home</Slink>
        <Slink to="">About</Slink>
        <Slink to="">Contact</Slink>
      </Menu>
    </Nav>
  );
};

export default Header;

const Slink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  transition: all 0.3s ease-in;
  font-size: 1rem;
  &:hover {
    color: white;
    background-color:#67bc98;
    border-radius:7px;
  }
`

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  font-size:30px;
  align-items: center;
  font-family: jetBrains Mono;
  flex-wrap: wrap;
  /* background: ${({ theme }) => theme.bg}; */
  /* background-color: black; */
  background-color:white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #67bc98;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position:sticky;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #55f56a84;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
