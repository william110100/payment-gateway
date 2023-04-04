import styled from "styled-components";

interface Props {
  color?: string;
  fontSize?: string;
  fontWeight?: number;
}

const StyledText = styled.span<Props>`
  color: ${({ color = "#000000" }) => color};
  font-size: ${({ fontSize = "16px" }) => fontSize};
  font-weight: ${({ fontWeight = 500 }) => fontWeight};
`;

export default StyledText;
