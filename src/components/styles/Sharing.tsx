import styled from "styled-components";
import { INACTIVE, SHADOW } from "./Variables";

const UnderlineStyle = styled.div`
  width: 5vh;
  height: 0.5vh;
  background-color: var(--inactive);
  margin-bottom: min(3vh, 60px);
  opacity: 50%;
`;

export const Underline = () => {
  return <UnderlineStyle></UnderlineStyle>;
};

export const LinkContainerStyle = styled.div`
  display: flex;
  background-color: white;
  width: fit-content;
  block-size: fit-content;
  padding: calc(0px + 0.1vw);
  border-radius: 5vh;
  & > * {
    color: ${INACTIVE};
    margin: calc(0px + 0.8vw);
    justify-content: center;
    align-items: center;
  }
  box-shadow: ${SHADOW};
`;

export const SlideStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65vh;
  scroll-behavior: smooth !important;
  overflow: scroll;
`;
