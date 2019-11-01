import React from "react";
import { buttonPrimaryFull, buttonPrimaryGFull } from "components/styles";
import { overlay, overlayContent } from "./style";

const AsideOverlay = ({ cancelFirst, content, submit, cancel }) => {
  return (
    <div css={overlay}>
      <div css={overlayContent}>
        <h3>{content[0]}</h3>
        <p>{content[1]}</p>
        {cancelFirst ? (
          <React.Fragment>
            <button css={buttonPrimaryGFull} autoFocus onClick={cancel}>
              Kembali
            </button>
            <button css={buttonPrimaryFull} onClick={submit}>
              {content[2]}
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button css={buttonPrimaryFull} autoFocus onClick={submit}>
              {content[2]}
            </button>
            <button css={buttonPrimaryGFull} onClick={cancel}>
              Kembali
            </button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default AsideOverlay;
