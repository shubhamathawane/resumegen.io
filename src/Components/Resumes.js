import React from "react";
import styled from "styled-components";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import '../Styles/Resume.css';

// style={{ fontFamily: `${font.value}` }}

function Resumes({ data, color, font }) {
  return (
    <div className="resume" id="resume" >
      <LeftContent data={data} font={font} color={color} />
      <RightContent data={data} font={font} color={color} />
    </div>
  );
}

export default Resumes;
