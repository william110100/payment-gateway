import { CSSProperties, FC, ReactNode } from "react";
import { StyledColumn } from "./Container.styles";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
}

const Column: FC<Props> = (props: Props) => {
  const { children, style } = props;

  return <StyledColumn style={style}>{children}</StyledColumn>;
};

export default Column;
