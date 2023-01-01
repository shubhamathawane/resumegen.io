import React from "react";

const Skills = ({ data, color }) => {
  const skills = data.skills;
  return (
    <div className="skills">
      <p className="heading" style={{ color: `${color.primary}` }}>
        Skills
      </p>
      <hr style={{ borderColor: `${color.primary}` }} />
      <div className="skills-container">
        {skills.map((item, index) => {
          if (item.trim().length > 0) {
            return (
              <div
              className="item"
                key={index}
                style={{
                  backgroundColor: `${color.primary}`,
                  boxShadow: `0 0 0 1x ${color.primary}`,
                  color:"white"
                }}
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
