import React from "react";

const Involvement = ({ data, color }) => {
  const involvement = data.Involvement;
  console.log(involvement)
  return (
    <div className="involvement">
      <p className="heading" style={{ color: `${color.primary}` }}>Involvement</p>
      <hr style={{borderColor:`${color.primary}`}}/>
      {involvement.map((item, index) => (
        <div className="involvement-item">
          {item.name &&(
            <div className="item">
              <p className="text rname">{item.name}</p>
            </div>
          )}
          {item.design &&(
            <div className="item">
              <p className="text rname">{item.design}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Involvement;
