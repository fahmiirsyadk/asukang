import React from "react";
import rupiahFormat from "functions/numeric";
import { buttonPrimaryFull, buttonPrimaryGFull } from "components/styles";
import { review, reviewDesc, reviewBtn } from "./style";
import note from "assets/images/note.png";

const AsideTransactionConfirm = props => {
  const { name, nominal, selectedOpt, uuid, desc, submit, back } = props;
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <h2 style={{ marginBottom: 20 }}>Review transaksi</h2>
      <div css={review}>
        <h1>{rupiahFormat(nominal)}</h1>
        <h4>
          {selectedOpt} ke {name}
        </h4>
        <h6>ID{uuid}</h6>
        <div css={reviewDesc}>
          <img src={note} alt="icon_represent_description"></img>
          <p>{desc}</p>
        </div>
        <div css={reviewBtn}>
          <button css={buttonPrimaryFull} onClick={submit}>
            Konfimasi dan bayar
          </button>
          <button css={buttonPrimaryGFull} onClick={back}>
            Edit kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default AsideTransactionConfirm;

/**
 * TODO:
 * - Add Name as title
 * - Add description
 * - Add nominal
 * - add text ( berhutang / pituang ke <name> )
 * - Add category selection
 * - Tombol batalkan
 * - Tombol konfimasi dan bayar
 */
