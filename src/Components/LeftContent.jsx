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

  // const Left_Content = styled.div`
  //   width: 260px;
  //   background-color: {color.background};
  //   color: #0a0a0a;
  //   padding: 5px 5px;
  //   text {
  //     font-size: 14px;
  //     color: #0c0c0c;
  //   }
  //   .heading {
  //     font-size: 15px;
  //     margin-right: 6px;
  //     color: #263238;
  //   }
  // `;

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
