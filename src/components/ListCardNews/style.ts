import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px 40px;
  justify-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;
