import styled from "styled-components";
import { SHADOW, MILD_PINK } from "../styles/Variables";

export const BackgroundStyle = styled.div`
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

export const LayoutStyle = styled.div`
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

export const LayoutSectionStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5vw;
  height: 8vh;
`;

export const HeaderStyle = styled(LayoutSectionStyle)`
  align-items: flex-end;
`;

export const PageContentStyle = styled(LayoutSectionStyle)`
  align-items: flex-start;
  height: 74vh;
  width: 100%;
  background-color: white;
  border: none;
  border-radius: 5vh;
  margin: 1vh;
  padding: 7vh 6vw;
  overflow: hidden;
  text-shadow: ${SHADOW};
`;

export const FooterStyle = styled(LayoutSectionStyle)`
  align-items: flex-start;
`;
