import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  border-radius: 6px;
  border: solid 2px #d1d1d1;
  max-width: 550px;
  width: 100%;
  height: 90px;
  overflow: hidden;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }

  @media (max-width: 960px) {
    height: auto;
  }
`;

export const ContainerLeft = styled.div`
  flex: 1;
  padding: 16px 26px;
`;

export const Title = styled.h5`
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #6b6b6b;
`;

export const CreatedAtContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

export const CreatedAtText = styled.span`
  color: #767676;
  font-size: 11px;
  margin-left: 6px;
`;

export const ContainerRight = styled.div`
  display: flex;
  width: 68px;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
`;
