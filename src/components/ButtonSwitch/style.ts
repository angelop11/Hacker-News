import styled, { css } from "styled-components";

export const Wrapper = styled.div``;

interface ButtonProps {
  active: Boolean;
}

const Button = styled.button<ButtonProps>`
  width: 98px;
  height: 31px;
  font-size: 15px;
  font-weight: bold;
  line-height: 1.75;
  border: 1px solid ${(props) => props.theme.palette.colorGray1};
  color: ${(props) => props.theme.palette.colorBlack2};
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      border-color: ${(props) => props.theme.palette.colorLightBlue};
      color: ${(props) => props.theme.palette.colorLightBlue};
    `}
`;

export const ButtonLeft = styled(Button)`
  border-radius: 2px 0 0 2px;

  ${(props) =>
    !props.active &&
    css`
      border-right: none;
    `}
`;

export const ButtonRight = styled(Button)`
  border-radius: 0 2px 2px 0;

  ${(props) =>
    !props.active &&
    css`
      border-left: none;
    `}
`;
