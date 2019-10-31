import React, { useState } from "react";
import { useService } from "@xstate/react";
import { shortcuts, shortcuts__mobile } from "./style";
import Shortcut from "components/shortcut";

const Shortcuts = ({ state, data, mobile }) => {
  const [current, send] = useService(state);
  const [active, setActive] = useState(data[0].label);

  const onClickShortcutItem = tab => {
    setActive(tab);
  };

  return (
    <div
      css={mobile ? [shortcuts] : [shortcuts, shortcuts__mobile]}
      aria-label="tablist"
    >
      {data.map(child => {
        const { label, icon } = child;
        return (
          <Shortcut
            activeTab={active}
            key={label}
            label={label}
            icon={icon}
            onClick={onClickShortcutItem}
            action={() => send(String(label).toUpperCase())}
          />
        );
      })}
    </div>
  );
};

export default Shortcuts;
