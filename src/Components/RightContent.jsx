import React from "react";
import styled from "styled-components";
import Awards from "./Components/Awards";
import Certifications from "./Components/Certifications";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Summary from "./Components/Summary";

const RightContent = ({ data, color, font }) => {
  // const Right_Content = styled.div`
  //   hr {
  //     margin: 1.5px 0 5px 0;
  //     width: 100%;
  //     border: 0.5px solid #263238;
  //   }
  //   .heading {
  //     font-size: 17px;
  //     font-weight: bold;
  //     margin: 0;
  //     color: #263238;
  //   }
  // `;

  const check = (item) => {
    if (item && item.length > 0) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="right-content">
      {check(data.Summary) && <Summary data={data} font={font} color={color} />}
      {check(data.Summary) && <Education data={data} color={color} />}
      {check(data.Summary) && <Experience data={data} color={color} />}
      {check(data.Summary) && <Certifications data={data} color={color} />}
      {check(data.Summary) && <Projects data={data} color={color} />}
      {check(data.Summary) && <Awards data={data} color={color} />}
    </div>
  );
};

export default RightContent;
