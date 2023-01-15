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
    <div className="experience">
      <p className="heading" style={{ color: `${color.primary}` }}>
        Experience
      </p>
      <hr style={{ borderColor: `${color.primary}` }} />
      {exp.map((item, index) => (
        <div className="row-table" key={index}>
          <div className="left-column">
            {item.year && (
              <p className="year">
                <TodayOutlined style={{ height: "15px" }} />
                {item.year}
              </p>
            )}
          </div>
          <div className="right-column">
            <p className="position">{item.position}</p>
            <p className="company">{item.company}</p>
            <p className="description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
