import { useState, useEffect } from "react";
import styled from "styled-components";

import ScreenWarning from "../global/Warning";
import SocialAnchor from "./SocialAnchor";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
import Language from "../global/Language";

import { randomPickAnimation } from "./AnimagePage";
import { SHADOW, WHITE, MILD_PINK } from "../styles/Variables";

const Layout = ({ content }) => {
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
      <BackgroundStyle />
      <LayoutStyle>
        {isLandscape ? (
          <>
            <RowStyle style={{ alignItems: "flex-end" }}>
              <Language color={WHITE} />
              <Navbar />
            </RowStyle>

            <PageAnimation>
              <WindowStyle>{content}</WindowStyle>
            </PageAnimation>

            <RowStyle style={{ alignItems: "flex-start" }}>
              <SocialAnchor />
              <Pagination />
            </RowStyle>
          </>
        ) : (
          <ScreenWarning />
        )}
      </LayoutStyle>
    </>
  );
};

const BackgroundStyle = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0px;
  margin: 0px;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url("bg.png");
  background-color: tomato;
  z-index: 0;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;

const LayoutStyle = styled.div`
  width: 80%;
  height: 100vh;
  position: absolute;
  left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  i:hover {
    color: ${MILD_PINK};
    transform: scale(1.15);
    transition: 0.1s ease-in-out;
  }
`;

const WindowStyle = styled.div`
  height: 74vh;
  width: 100%;
  background-color: white;
  border: none;
  border-radius: 5vh;
  margin: 1vh;
  padding: 7vh 6vw !important;
  overflow: hidden;
  text-shadow: ${SHADOW};
`;

const RowStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 1.5vw;
  height: 8vh;
`;

export default Layout;
