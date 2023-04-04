import styled from "styled-components";

export const StyledView = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 60% 40%);

  .checked {
    background-color: #1bd97b;
  }

  .unchecked {
    background-color: #ffffff;
  }
`;
