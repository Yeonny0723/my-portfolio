import React from "react";
import { Rotate360 } from "../styles/AnimatePage";
import { WarningStyle } from "./Warning.styles";

const ScreenWarning = () => {
  return (
    <WarningStyle>
      <Rotate360>
        <h3>
          Your screen is too small 🥲 <br></br>
          Please rotate your device 🌱
        </h3>
      </Rotate360>
    </WarningStyle>
  );
};

export default ScreenWarning;
