import styled from "styled-components";

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledContainer = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(2, 70% 30%);
  min-height: 80vh;
  padding: 64px 32px 32px;

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  @media (max-width: 539px) {
    padding-top: 32px;
  }
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;
