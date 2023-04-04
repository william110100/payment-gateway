import { CSSProperties, FC, ReactNode } from "react";
import { StyledCheckbox } from "./Checkbox.styles";

interface Props {
  onClick: () => void;
  style?: CSSProperties;
}

const Checkbox: FC<Props> = (props: Props) => {
  const { onClick, style } = props;

  return <StyledCheckbox onClick={onClick} style={style}></StyledCheckbox>;
};

export default Checkbox;
