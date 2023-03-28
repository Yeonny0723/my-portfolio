import styled from "styled-components";
import { SHADOW } from "../styles/Variables";

export const TerminalContainerStyle = styled.div`
  height: 35vh;
  width: 100%;
  border-radius: 10px;
  overflow: scroll;
  background-color: #111827;
  position: relative;
  box-shadow: ${SHADOW};
`;

export const BtnContainers = styled.div`
  display: flex;
  align-items: center;
  height: 15%;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  background-color: #374151;
  padding: min(1.5vh, 5px);
  overflow: hidden;
  position: sticky;
  top: 0;
`;

export const ButtonStyle = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 100%;
  margin-left: min(1vw, 10px);
  width: min(1.5vw, 15px);
  height: min(1.5vw, 15px);
`;

export const ContentStyle = styled.div`
  width: 100%;
  color: white;
  padding: 1vh;
  display: flex;
  flex-direction: column;
`;

export const CodeLineStyle = styled.div<{ indent: number }>`
  display: flex;
  margin-left: ${(props) => props.indent}px;
  line-height: 1.7;
  span {
    font-size: 0.95em;
  }
  .word {
    margin-right: 5px;
  }
  .green {
    color: #27ca40;
  }
`;
