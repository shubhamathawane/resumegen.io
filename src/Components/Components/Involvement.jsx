import React from "react";

const Involvement = ({ data, color }) => {
  const involvement = data.Involvement;
  return (
    <div className="involvement">
      <p className="headign">Involvement</p>
      <hr />
      {involvement.map((item, index) => (
        <div className="involvement-item">
          {item.name &&(
            <div className="item">
              <p className="text rname">{item.name}</p>
            </div>
          )}
          {item.design &&(
            <div className="item">
              <p className="text desing">{item.design}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Involvement;
