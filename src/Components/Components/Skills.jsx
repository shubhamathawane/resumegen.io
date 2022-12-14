import React from "react";

const Skills = ({ data, color }) => {
  const skills = data.skills;
  return (
    <div className="skills">
      <p className="heading">Skills</p>
      <hr />
      <div className="skill-container">
        {skills.map((item, index) => {
          if (item.trim().length > 0) {
            return (
              <div
                key={index}
                style={{
                  backgroundColor: `${color.skills}`,
                  boxShadow: `0 0 0 1x ${color.primary}`,
                }}
                className="item"
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

export default Skills;
