import styled, { keyframes } from "styled-components";

const rotateSpinner = keyframes`
 100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  border: 4px solid #eeeeee;
  border-radius: 50%;
  border-top-color: red;
  margin: auto;
  width: 35px;
  height: 35px;
  transition: opacity 250ms;
  animation: ${rotateSpinner} 1s linear;
  animation-iteration-count: infinite;
`;
