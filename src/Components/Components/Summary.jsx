import React from "react";
import styled from "styled-components";
import { Heading, Item, Sumary, HR } from "../../Styles/RightContentStyles";

const Summary = ({ data, color }) => {
  const summary = data.Summary;
  return (
    <div className="Summary">
      <p className="heading">Summary</p>
      <hr style={{ borderColor: `${color.primary}` }} />
      <div className="item">{summary}</div>
    </div>
  );
};

export default Summary;
