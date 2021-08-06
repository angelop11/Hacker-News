import React, { CSSProperties } from "react"
import { useLocation } from "react-router-dom";

import { Wrapper, ButtonRight, ButtonLeft } from "./style"

interface OptionData {
  label: string;
  path: string;
}

interface ButtonSwitchProps {
  onClickButton: (path: string) => void;
  leftOption: OptionData;
  rightOption: OptionData;
  style?: CSSProperties;
}

const ButtonSwitch: React.FC<ButtonSwitchProps> = ({
  onClickButton,
  leftOption,
  rightOption,
  style
}) => {
  const location = useLocation()

  return <Wrapper style={style}>
    <ButtonLeft
      onClick={() => onClickButton(leftOption.path)}
      active={leftOption.path === location.pathname}>
      {leftOption.label}
    </ButtonLeft>
    <ButtonRight
      onClick={() => onClickButton(rightOption.path)}
      active={rightOption.path === location.pathname}>
      {rightOption.label}
    </ButtonRight>
  </Wrapper>
}

export default ButtonSwitch