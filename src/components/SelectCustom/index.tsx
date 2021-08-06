import React, { useState, CSSProperties } from "react";
import { RiArrowDownSLine } from "react-icons/ri"

import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  ImgItem
} from "./style"

import Option from "../../modules/filters/interfaces/Option"

interface SelectCustomProps {
  options: Option[];
  onChange?: (option: Option) => void;
  defaultValue?: Option | null;
  style?: CSSProperties;
}

const SelectCustom: React.FC<SelectCustomProps> = ({
  options,
  onChange,
  style,
  defaultValue
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<null | Option>(defaultValue ?? null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (option: Option) => () => {
    setSelectedOption(option);
    setIsOpen(false);

    if (onChange) {
      onChange(option)
    }
  };

  return (
    <DropDownContainer style={style}>
      <DropDownHeader onClick={toggling}>
        {selectedOption?.icon ?
          <ImgItem src={selectedOption.icon} /> : null
        }
        {selectedOption?.label ?? "Select your news"}
        <RiArrowDownSLine size={20} style={{ marginLeft: "auto" }} />
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option: Option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                <ImgItem src={option.icon} />{option.label}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}

export default SelectCustom