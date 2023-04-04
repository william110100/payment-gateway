import styled from "styled-components";

export const StyledView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  justify-content: space-between;

  @media (min-width: 1024px) {
    border-left: 1px solid #ffd76d;
    padding-left: 32px;
  }
`;
