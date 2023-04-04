import { FC, ReactNode } from "react";
import { StyledCard } from "./Card.styles";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const Card: FC<Props> = (props: Props) => {
  const { children, onClick } = props;

  return <StyledCard onClick={onClick}>{children}</StyledCard>;
};

export default Card;
