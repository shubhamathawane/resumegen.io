import { Today, TodayOutlined } from "@mui/icons-material";
import React from "react";
import {
  Certification,
  Course,
  Description,
  Heading,
  HR,
  Institution,
  RowTable,
  Year,
} from "../../Styles/RightContentStyles";

const Certifications = ({ data, color }) => {
  const certificates = data.certifications;
  console.log(certificates);
  return (
    <div className="certifications">
      <p className="heading" style={{ color: `${color.primary}` }}>
        Certifications
      </p>
      <hr style={{ color: `${color.primary}` }} />
      {certificates.map((item, index) => (
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
            <p className="course">{item.course}</p>
            <p className="institution">{item.institution}</p>
            <p className="description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
