import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.div`
  background-image: linear-gradient(to bottom, #ececec -32%, #ffffff 124%);
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  height: 114px;
  z-index: 1;
`;

export const HeaderContent = styled.div`
  display: flex;
  max-width: 1200px;
  height: 100%;
  padding: 0 20px;
  align-items: center;
  margin: 0 auto;
`;

export const Body = styled.div`
  background-color: #fcfcfc;
  z-index: 0;
`;

export const BodyContent = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  max-width: 1200px;
  height: 100%;
`;

export const Title = styled.h1`
  font-family: "Baskerville";
  font-size: 28px;
  color: ${(props) => props.theme.palette.colorBlack1};
  font-weight: lighter;
`;
