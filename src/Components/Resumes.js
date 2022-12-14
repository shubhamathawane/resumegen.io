import React from "react";
import styled from "styled-components";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import '../Styles/Resume.css';

function Resumes({ data, color }) {
  return (
    <div className="resume">
      <LeftContent data={data} color={color} />
      <RightContent data={data} color={color} />
    </div>
  );
}

export default Resumes;
