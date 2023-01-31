import styled from "styled-components";
import { GREY } from "../styles/Variables";

export const NavStyle = styled.nav`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2vh;
  font-size: 1.3rem;
  & > span {
    color: ${GREY};
  }
`;

export const ButtonStyle = styled.button<{ isactive: boolean }>`
  font-weight: 600;
  text-decoration: ${(props) => (props.isactive ? "underline" : null)};
  color: ${(props) => (props.isactive ? props.color : GREY)};
  background: none;
  border: none;
  margin: 0 0.5vw;
  padding: 0;
  cursor: pointer;
`;
