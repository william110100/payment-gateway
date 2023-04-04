import { CSSProperties, FC, ReactNode } from "react";
import { StyledRow } from "./Container.styles";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
}

const Row: FC<Props> = (props: Props) => {
  const { children, style } = props;

  return <StyledRow style={style}>{children}</StyledRow>;
};

export default Row;
