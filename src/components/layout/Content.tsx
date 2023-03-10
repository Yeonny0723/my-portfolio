import { pickRandomAnimation } from "./utils";
import { PageContentStyle } from "./Layout.styles";
import { LayoutProps } from "./types";

const PageContent = ({ children }: LayoutProps): JSX.Element => {
  const PageAnimation = pickRandomAnimation();
  return (
    <PageAnimation>
      <PageContentStyle>{children}</PageContentStyle>
    </PageAnimation>
  );
};

export default PageContent;
