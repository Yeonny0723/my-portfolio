import {Rotate360} from "../components/AnimatePage";

const ScreenWarning = () => {

    return (
      <div id="rotate-warning"
      style={{
        visibility: "hidden",
        height: "0",
      }}>
        <Rotate360>
        <h3>
          Your screen is too small 🥲 <br></br>
          Please rotate your device 🌱
        </h3>
        </Rotate360>
      </div>
    )
}

export default ScreenWarning