/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { aside, nav, activityItem } from "./style";
import useData from "functions/useData";

const Activities = () => {
  const { getActivities } = useData();
  return (
    <aside css={aside}>
      <nav css={nav}>
        <h4>Activities</h4>
      </nav>
      <div>
        {getActivities().map((activity, i) => (
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
