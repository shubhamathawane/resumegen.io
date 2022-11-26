import React from "react";
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import styled from "styled-components";


const PhotoContainer = styled.div``;
const Name = styled.div``;
const Contacts = styled.div``;
const Item = styled.div``;

const Contact = ({data, color}) => {
    const { name, photoUrl, location, phone, email, linkedin, github, website } = data.contact;
  return (
    <>
      <PhotoContainer>
        <img src="" alt="" />
      </PhotoContainer>
      <Name>Shubham</Name>
      <Contacts>
        <Item>
          <LocationOnIcon
            style={{
            //   color: `${color.primary}`,
              margin: "2px 6px",
              height: "17px",
            }}
          />
          location
        </Item>
        <Item>
          <PhoneIcon
            style={{
            //   color: `${color.primary}`,
              margin: "2px 5px",
              height: "17px",
            }}
          />
          <a href="">Phone</a>
        </Item>
        <Item>
          <EmailIcon
            style={{
            //   color: `${color.primary}`,
              margin: "2px 5px",
              height: "17px",
            }}
          />
          <p>email</p>
        </Item>
        <Item>
          <LinkedInIcon
            style={{
            //   color: `${color.primary}`,
              margin: "2px 5px",
              height: "17px",
            }}
          />

          <p>linked</p>
        </Item>
        <Item>
          <GitHubIcon
            style={{
            //   color: `${color.primary}`,
              margin: "4px 6px",
              height: "17px",
            }}
          />
          <p>geethub</p>
        </Item>
        <Item>
          <LanguageIcon
            style={{
            //   color: `${color.primary}`,
              margin: "4px 6px",
              height: "17px",
            }}
          />

          <p>Website</p>
        </Item>
      </Contacts>
    </>
  );
};

export default Contact;
