import React, { useState } from "react";
import rupiahFormat from "functions/numeric";
import { buttonPrimaryFull, buttonPrimaryGFull } from "components/styles";
import {
  review,
  reviewDesc,
  reviewBtn,
  reviewCategory,
  reviewCategoryItem
} from "./style";
import food from "assets/images/food.png";
import edu from "assets/images/education.png";
import money from "assets/images/money.png";
import shop from "assets/images/shopping.png";
import transport from "assets/images/transportation.png";
import note from "assets/images/note.png";

const dataCategory = [
  {
    label: "money",
    icon: money
  },
  {
    label: "education",
    icon: edu
  },
  {
    label: "food",
    icon: food
  },
  {
    label: "shop",
    icon: shop
  },
  {
    label: "transport",
    icon: transport
  }
];

const AsideTransactionConfirm = props => {
  const { name, nominal, selectedOpt, desc, submit, back } = props;
  const [selectedCategory, setSelectedCategory] = useState("money");
  const [category, setCategory] = useState(money);
  return (
    <div css={{ position: "relative", height: "100%" }}>
      <h2 css={{ marginBottom: 20 }}>Review transaksi</h2>
      <div css={review}>
        <img id="thumbnail" src={category} alt="icon"></img>
        <h1>{rupiahFormat(nominal)}</h1>
        <h4>
          {selectedOpt} ke {name}
        </h4>
        <div css={reviewDesc}>
          <img src={note} alt="icon_represent_description"></img>
          <p>{desc}</p>
        </div>
      </div>
      <div css={reviewBtn}>
        <div css={reviewCategory}>
          {dataCategory.map(({ label, icon }) => (
            <div
              css={reviewCategoryItem(selectedCategory === label)}
              label={label}
              key={label}
              onClick={() => {
                setCategory(icon);
                setSelectedCategory(label);
              }}
            >
              <img src={icon} alt={label}></img>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <button css={buttonPrimaryFull} onClick={submit}>
          Konfimasi dan bayar
        </button>
        <button css={buttonPrimaryGFull} onClick={back}>
          Edit kembali
        </button>
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