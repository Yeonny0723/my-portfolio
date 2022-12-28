import {Rotate360} from "../styles/AnimatePage";
import styled from "styled-components";
import {SHADOW} from "../styles/Variables"


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
    )
}

const WarningStyle = styled.div`
  display: block;
  visibility:visible !important;
  font-weight: 600;
  color: white;
  text-shadow: ${SHADOW};
  height: inherit;
`

export default ScreenWarning