import { HeaderStyle } from "./Layout.styles";
import Language from "../global/Language";
import Navbar from "./Navbar";
import { WHITE } from "../styles/Variables";

const HeaderContent = (): JSX.Element => {
  return (
    <HeaderStyle>
      <Language color={WHITE} />
      <Navbar />
    </HeaderStyle>
  );
};

export default HeaderContent;
