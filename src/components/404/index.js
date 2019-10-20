import React from "react";
import imgError from "assets/images/error.png";
import { Link } from "@reach/router";

const RouteNotFound = () => {
  return (
    <React.Fragment>
      <img
        css={{ margin: "0 auto", display: "flex", width: 200 }}
        src={imgError}
        alt="ilustrasi_gambar_pecah_error"
      />
      <div css={{ textAlign: "center" }}>
        <h1>HELL NO, Sorry i forgot to handle dis one.</h1>
        <Link to="/">Go back, i will fix later.</Link>
      </div>
    </React.Fragment>
  );
};

export default RouteNotFound;
