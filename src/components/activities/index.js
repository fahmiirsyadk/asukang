/** @jsx jsx */
import React, { useContext } from "react";
import { jsx } from "@emotion/core";
import { aside, nav, activityItem } from "./style";
import context from "./../../context/context";

const Activities = () => {
  const data = useContext(context);
  console.log(data);
  return (
    <aside css={aside}>
      <nav css={nav}>
        <h4>Activities</h4>
      </nav>
      <div>
        {data.map((activity, i) => (
          <div css={activityItem} key={i}>
            <h3>{activity.title}</h3>
            <p>{activity.descriptions}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Activities;
