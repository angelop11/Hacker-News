import styled from "styled-components";

export const DropDownContainer = styled.div`
  font-family: sans-serif;
  width: 240px;
  cursor: pointer;
`;

export const DropDownHeader = styled.div`
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 14px;
  color: #343434;
  background: #ffffff;
  padding: 5px 12px;
  border: 1px solid #2e2e2e;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

export const DropDownListContainer = styled.div`
  position: relative;
`;

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  background: #ffffff;
  box-sizing: border-box;
  color: #343434;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 2px 2px 0 #dad8d8;
  position: absolute;
  width: 100%;
`;

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  padding-left: 10px;
  height: 45px;
  :hover {
    background-color: #eaeaea;
  }
`;

export const ImgItem = styled.img`
  width: 22px;
  margin-right: 13px;
`;
