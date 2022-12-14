import React from "react";

const Interest = ({ data, color }) => {
  const skills = data.skills;
  return (
    <div className="skills">
      <p className="heading">Interest</p>
      <hr />
      <div className="skills-container">
        {skills.map((item, index) => {
          if (item.trim().length > 0) {
            return <div key={index}>
                Coding, singing dddddd
            </div>;
          }
        })}
      </div>
    </div>
  );
};

export default Interest;
