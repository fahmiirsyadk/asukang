/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { jsx } from "@emotion/core";
import profile from "assets/images/profile.jpg";
import { profileHeader, profileHeaderDetail } from "./style";
import { buttonPrimaryFull } from "components/styles";
import { messageServices } from "services/messages";

const AsideHome = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () =>
    messageServices.sendMessage("This is from aside to home");
  const clearMessage = () => messageServices.clearMessage();

  useEffect(() => {
    const subs = messageServices.getMessage().subscribe(msg => {
      msg ? setMessage(msg) : setMessage("");
    });
    return () => subs.unsubscribe();
  }, [message]);

  return (
    <div css={profileHeader}>
      <div css={{ textAlign: "center", width: "100%" }}>
        <img src={profile} alt="profile-img" />
        <div css={profileHeaderDetail}>
          <h4>Asukang App</h4>
          {message}
          <p>Welcome back, Guest.</p>

          <button onClick={sendMessage}>send Msg</button>
          <button onClick={clearMessage}>clear Msg</button>
        </div>
        <button css={buttonPrimaryFull}>+ New Transaction</button>
      </div>
    </div>
  );
};

export default AsideHome;
