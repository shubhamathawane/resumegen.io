import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import styled from "styled-components";

// const PhotoContainer = styled.div`
//   width: 120px;
//   height: 120px;
//   overflow: hidden;
//   margin: 10px auto 0 auto;
//   border-radius: 100%;
//   img {
//     width: 100%;
//     height: 100%;
//   }
// `;
// const Name = styled.div`
//   padding: 15px;
//   font-size: 28px;
//   font-weight: bold;
//   text-align: center;
// `;
// const Contacts = styled.div`
//   /* display: flex; */
//   /* flex-direction: row; */
//   /* justify-content: center; */
//    /* align-items: center; */
// `;
// const Item = styled.div`
//     margin: 5px 0 23px;
//     padding: 0;
//     font-size: 15px;
//     font-weight: light;
// `;

const Contact = ({ data, color }) => {
  const { name, photoUrl, location, phone, email, linkedin, github, website } =
    data.contact;

  return (
    <>
      <div className="photo-container">
        {photoUrl === "" ? null : <img src={photoUrl} alt="" />}
      </div>

      {name === "" ? null : (
        <div className="name" style={{ color: `${color.primary}` }}>
          {name}
        </div>
      )}
      <div className="contact">
        {location && (
          <div className="item">
            <LocationOnIcon
              style={{
                color: `${color.primary}`,
                margin: "2px 6px",
                height: "17px",
              }}
            />
            {location}
          </div>
        )}
        {phone && (
          <div className="item">
            <PhoneIcon
              style={{
                color: `${color.primary}`,
                margin: "2px 5px",
                height: "17px",
              }}
            />
            <a href={phone}>{phone}</a>
          </div>
        )}
        {email && (
          <div className="item">
            <EmailIcon
              style={{
                color: `${color.primary}`,
                margin: "2px 5px",
                height: "17px",
              }}
            />
            <a href={email}>{email}</a>
          </div>
        )}
        {linkedin && (
          <div className="item">
            <LinkedInIcon
              style={{
                color: `${color.primary}`,
                margin: "2px 5px",
                height: "17px",
              }}
            />
            <a href={"https://www." + linkedin}>linkedin</a>
          </div>
        )}
        {github && (
          <div className="item">
            <GitHubIcon
              style={{
                color: `${color.primary}`,
                margin: "4px 6px",
                height: "17px",
              }}
            />
            <a href={"https://www." + github}>github</a>
          </div>
        )}
        {website && (
          <div className="item">
            <LanguageIcon
              style={{
                color: `${color.primary}`,
                margin: "4px 6px",
                height: "17px",
              }}
            />
            <a href={"https://www." + website}>website</a>
          </div>
        )}
      </div>
    </>
  );
};
export default Contact;
