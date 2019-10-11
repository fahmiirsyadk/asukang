import React from "react";

import { listWrapper } from "./style";

const ListName = ({ filteredName, action }) => {
  return (
    <div css={listWrapper}>
      {filteredName.map((data, i) => {
        return data.nominal !== 0 ? (
          <div key={i} onClick={() => action(data.name)}>
            <h4>{data.name}</h4>
            <p>{Math.abs(data.nominal)}</p>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default ListName;
