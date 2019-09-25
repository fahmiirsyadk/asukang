import React from "react";

const ListName = ({ filteredName }) => {
  return (
    <div>
      {filteredName.map((data, i) => (
        <div key={i}>
          <h4>{data.name}</h4>
          <p>{data.hutang}</p>
        </div>
      ))}
    </div>
  );
};

export default ListName;
