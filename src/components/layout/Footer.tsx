import SocialAnchor from "./SocialAnchor";
import Pagination from "./Pagination";
import { FooterStyle } from "./Layout.styles";

const FooterContent = (): JSX.Element => {
  return (
    <FooterStyle>
      <SocialAnchor />
      <Pagination />
    </FooterStyle>
  );
};

export default FooterContent;
