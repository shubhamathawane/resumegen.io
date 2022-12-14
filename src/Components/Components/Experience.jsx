import { Description, Today, TodayOutlined } from "@mui/icons-material";
import React from "react";
import {
  Company,
  Experiencee,
  Heading,
  HR,
  Position,
  RowTable,
  Year,
} from "../../Styles/RightContentStyles";

const Experience = ({ data, color }) => {
  const exp = data.experience;
  console.log(exp);
  return (
    <Experiencee>
      <Heading>Experience</Heading>
      <HR />
      {exp.map((item, index) => (
        <RowTable>
          <div key={index} className="left-column">
            {item.year && (
              <Year>
                <TodayOutlined style={{ height: "15px" }} />
                {item.year}
              </Year>
            )}
          </div>
          <div className="right-column">
            <Position>{item.position}</Position>
            <Company>{item.position}</Company>
            <Description>{item.description}</Description>
          </div>
        </RowTable>
      ))}
    </Experiencee>
  );
};

export default Experience;
