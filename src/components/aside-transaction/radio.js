import React from "react";
import { radioGroup } from "components/styles";

const RadioSelect = ({ handleOptionChange, selectedOpt }) => (
  <>
    <div css={radioGroup}>
      <input
        id="radio1"
        name="radio"
        type="radio"
        value="utang"
        onChange={handleOptionChange}
        checked={selectedOpt === "utang"}
      />
      <label htmlFor="radio1">Anda berhutang (utang)</label>
    </div>
    <div css={radioGroup}>
      <input
        id="radio2"
        name="radio"
        value="piutang"
        type="radio"
        onChange={handleOptionChange}
        checked={selectedOpt === "piutang"}
      />
      <label htmlFor="radio2">Dia berhutang (piutang)</label>
    </div>
  </>
);

export default RadioSelect;
