import { FC, ReactNode } from "react";
import { StyledButton } from "./Button.styles";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const Button: FC<Props> = (props: Props) => {
  const { children, onClick } = props;

  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
