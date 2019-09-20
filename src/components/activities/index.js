/** @jsx jsx */
import React, { useContext } from "react";
import { jsx } from "@emotion/core";
import { DataContext } from "context/dataContext";
import { aside, nav, activityItem } from "./style";

const Activities = () => {
  const [state, setState] = useContext(DataContext);

  return (
    <aside css={aside}>
      <nav css={nav}>
        <h4>Activities</h4>
      </nav>
      <div>
        {state.dataActivities.map((activity, i) => (
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
