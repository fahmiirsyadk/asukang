/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { listWrapper } from "./style";

const ListName = ({ filteredName, action }) => {
  return (
    <div css={listWrapper}>
      {filteredName.map((data, i) => (
        <div key={i} onClick={() => action(data.name)}>
          <h4>{data.name}</h4>
          <p>{data.nominal}</p>
        </div>
      ))}
    </div>
  );
};

export default ListName;
