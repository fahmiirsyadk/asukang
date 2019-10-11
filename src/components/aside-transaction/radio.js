import React from "react";
import { radioGroup } from "components/styles";

const RadioSelect = ({ handleOptionChange, selectedOpt }) => (
  <>
    <div css={radioGroup}>
      <input
        id="radio1"
        name="radio"
        type="radio"
        value="hutang"
        onChange={handleOptionChange}
        checked={selectedOpt === "hutang"}
      />
      <label htmlFor="radio1">Hutang</label>
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
      <label htmlFor="radio2">Piutang</label>
    </div>
  </>
);

export default RadioSelect;
