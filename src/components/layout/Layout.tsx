import React from "react";
import { useCheckView } from "./hooks";
import ScreenWarning from "../global/Warning";
import HeaderContent from "./Header";
import FooterContent from "./Footer";
import PageContent from "./Content";

import { BackgroundStyle, LayoutStyle } from "./Layout.styles";
import { LayoutProps } from "./types";

const LandscapeContent = (): JSX.Element => {
  return <ScreenWarning />;
};

const PortraitContent = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <HeaderContent />
      <PageContent>{children}</PageContent>
      <FooterContent />
    </>
  );
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [isLandscape] = useCheckView();
  return (
    <>
      <BackgroundStyle />
      <LayoutStyle>
        {isLandscape ? (
          <PortraitContent>{children}</PortraitContent>
        ) : (
          <LandscapeContent />
        )}
      </LayoutStyle>
    </>
  );
};

export default Layout;
