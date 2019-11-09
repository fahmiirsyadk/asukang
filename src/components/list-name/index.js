import React from "react";
import rupiahFormat from "functions/numeric";
import { listWrapper, badge } from "./style";
import { notificationBoxRed, notificationBoxGreen } from "components/styles";

const ListName = ({ filteredName, action }) => {
  return (
    <div css={listWrapper}>
      {filteredName.map((data, i) => {
        const isUtang = data.status === "utang" ? true : false;
        return data.nominal !== 0 ? (
          <div
            css={{ position: "Relative" }}
            key={i}
            onClick={() => action(data)}
          >
            <span
              css={[isUtang ? notificationBoxRed : notificationBoxGreen, badge]}
            >
              {data.status}
            </span>
            <h4>{data.name}</h4>
            <p>{rupiahFormat(Math.abs(data.nominal))}</p>
            <p css={{ marginTop: 10, fontSize: 12, color: "#616d7d" }}>
              Total transaksi {data.transactions.length}
            </p>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default ListName;
