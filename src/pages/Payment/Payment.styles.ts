import styled from "styled-components";

export const StyledView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  .active {
    background-color: #b8fad8;
    border: 2px solid #1bd97b;
  }

  .inactive {
    border: 2px solid #818181;
  }
`;
