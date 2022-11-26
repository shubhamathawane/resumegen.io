import React from "react";
import styled from "styled-components";
import Contact from "./Components/Contact";

const LeftContent = ({data, color}) => {

  const Left_Content = styled.div``;

  return (
    <div>
      <Contact data={data} color={color} />
    </div>
  );
};

export default LeftContent;
