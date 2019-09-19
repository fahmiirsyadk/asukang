import React from "react";

const ListName = ({ filteredName }) => {
  return (
    <div>
      {filteredName.map(data => (
        <div key={data.id}>
          <h4>{data.name}</h4>
          <p>{data.hutang}</p>
        </div>
      ))}
    </div>
  );
};

export default ListName;
