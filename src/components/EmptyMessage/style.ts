import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h5`
  color: gray;
  font-size: 16px;
`;

export const Image = styled.img`
  width: 150px;
`;

export const Button = styled.button`
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(props) => props.theme.palette.colorLightBlue};
  padding: 10px 14px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
`;
