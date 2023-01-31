import styled from "styled-components";
import { SHADOW } from "../styles/Variables";

export const WarningStyle = styled.div`
  display: block;
  visibility: visible !important;
  font-weight: 600;
  color: white;
  text-shadow: ${SHADOW};
  height: inherit;
`;
