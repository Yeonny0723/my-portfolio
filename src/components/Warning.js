import {Rotate360} from "../components/AnimatePage";

const ScreenWarning = ({id}) => {

    return (
      <div id="rotate-warning"
      style={{
        height:"100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        visibility: "hidden",
        height: "0",
      }}>
        <Rotate360>
        <span>
          Your screen is too small 🥲 <br></br>
          Please rotate your device 🌱
        </span>
        </Rotate360>
      </div>
    )
}

export default ScreenWarning