/** @jsx jsx */
import React, { useState } from "react";
import { useService } from "@xstate/react";
import { jsx, css } from "@emotion/core";
import { shortcuts } from "./style";
import Shortcut from "components/shortcut";

const Shortcuts = ({ state, children }) => {
  const [current, send] = useService(state);
  const [active, setActive] = useState(children[0].props.label);

  const onClickShortcutItem = tab => {
    setActive(tab);
  };

  return (
    <div css={shortcuts} aria-label="tablist">
      {children.map(child => {
        const { label } = child.props;
        return (
          <Shortcut
            activeTab={active}
            key={label}
            label={label}
            onClick={onClickShortcutItem}
            action={() => send(String(label).toUpperCase())}
          />
        );
      })}
    </div>
  );
};

export default Shortcuts;
