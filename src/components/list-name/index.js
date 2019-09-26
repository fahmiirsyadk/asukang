/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { listWrapper } from "./style";

const ListName = ({ filteredName }) => {
  return (
    <div css={listWrapper}>
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
