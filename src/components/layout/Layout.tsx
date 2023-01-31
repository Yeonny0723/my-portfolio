import React from "react";
import { useState, useEffect } from "react";

import ScreenWarning from "../global/Warning";
import SocialAnchor from "./SocialAnchor";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
import Language from "../global/Language";

import { randomPickAnimation } from "./AnimagePage";
import { WHITE } from "../styles/Variables";
import * as S from "./Layout.styles";

const Layout: React.FC<{ content: string }> = ({ content }) => {
  const PageAnimation = randomPickAnimation();
  const [isLandscape, setIsLandscape] = useState(false);

  const handleResize = () => {
    if (window.innerHeight > window.innerWidth) {
      setIsLandscape(false);
    } else {
      setIsLandscape(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <S.BackgroundStyle />
      <S.LayoutStyle>
        {isLandscape ? (
          <>
            <S.RowStyle style={{ alignItems: "flex-end" }}>
              <Language color={WHITE} />
              <Navbar />
            </S.RowStyle>

            <PageAnimation>
              <S.WindowStyle>{content}</S.WindowStyle>
            </PageAnimation>

            <S.RowStyle style={{ alignItems: "flex-start" }}>
              <SocialAnchor />
              <Pagination />
            </S.RowStyle>
          </>
        ) : (
          <ScreenWarning />
        )}
      </S.LayoutStyle>
    </>
  );
};

export default Layout;
