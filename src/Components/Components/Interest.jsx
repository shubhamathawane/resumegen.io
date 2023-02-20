import React from "react";

const Interest = ({ data, color }) => {
  const interests = data.interests;
  return (
    <div className="skills">
      <p className="heading" style={{ color: `${color.primary}` }}>Interests</p>
      <hr style={{ borderColor: `${color.primary}` }} />
      <div className="skills-container">
        {interests.map((item, index) => {
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
