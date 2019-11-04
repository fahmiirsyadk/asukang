import React, { useState } from "react";
import ListName from "components/list-name";
import AsideOverlay from "components/aside-overlay";
import { filteredName } from "functions/transactions";
import { buttonPrimaryFull, buttonPrimaryGFull } from "components/styles";
import { wrapperList } from "./style";
import { input, spanSearchBox } from "components/styles";
import imgEmpty from "assets/images/empty.png";

const AsideDebts = () => {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const filtered = filteredName(name);

  const selectedName = name => {
    setOpen(true);
    setName(name);
  };

  return (
    <div style={{ padding: 20, position: "relative", height: "100%" }}>
      {open ? (
        <AsideOverlay>
          <h3>{name}</h3>
          <button css={buttonPrimaryFull}>EDIT</button>
          <button css={buttonPrimaryGFull} onClick={() => setOpen(false)}>
            KEMBALI
          </button>
        </AsideOverlay>
      ) : null}
      <h2 style={{ marginBottom: 20 }}>Utang Piutang</h2>
      <div css={{ position: "relative" }}>
        <span css={spanSearchBox}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </svg>
        </span>
        <input
          type="text"
          value={name}
          css={[input, { paddingLeft: "2em" }]}
          onChange={e => setName(e.target.value)}
          placeholder="Masukkan nama tujuan"
          autoFocus
        />
      </div>
      <div css={wrapperList}>
        {filtered.length < 1 ? (
          <React.Fragment>
            <div id="empty">
              <img
                css={{ width: 50 }}
                src={imgEmpty}
                alt="ilustrasi_data_kosong"
              />
            </div>
            <p id="empty-desc">Tidak ada list, silahkan tambahkan orang</p>
          </React.Fragment>
        ) : null}
        <ListName filteredName={filtered} action={selectedName} />
      </div>
    </div>
  );
};

export default AsideDebts;
