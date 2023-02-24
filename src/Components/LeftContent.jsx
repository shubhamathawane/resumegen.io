import React from "react";
import styled from "styled-components";
import Contact from "./Components/Contact";
import Interest from "./Components/Interest";
import Involvement from "./Components/Involvement";
import Skills from "./Components/Skills";

const LeftContent = ({ data, color }) => {

  const check = (item) => {
    if (item && item.length > 0) {
      return true;
    } else return false;
  };
  
  return (
    <div className="left-content" style={{backgroundColor:`${color.background}`}}>
      <Contact data={data} color={color} />
      {check(data.skills) && <Skills data={data} color={color} />}
      {check(data.interests) && <Interest data={data} color={color}/>}
      {check(data.Involvement) && <Involvement data={data} color={color}/>}
    </div>
  );    
};

export default LeftContent;
