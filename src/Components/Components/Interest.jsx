import React from "react";

const Interest = ({ data, color }) => {
  const skills = data.skills;
  return (
    <div className="skills">
      <p className="heading">Interest</p>
      <hr style={{ borderColor: `${color.primary}` }} />
      <div className="skills-container">
        {skills.map((item, index) => {
          if (item.trim().length > 0) {
            return (
              <div
                className="item"
                key={index}
                style={{ backgroundColor: `${color.primary}`, color:"white" }}
              >
                {item}
              </div>
            );
          } else {
            return false;
          }
        })}
      </div>
    </div>
  );
};

export default Interest;
