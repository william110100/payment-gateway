import { FC } from "react";
import { StyledContainer } from "./Container.styles";
import { ChildrenProps } from "../../models";

const Container: FC<ChildrenProps> = (props: ChildrenProps) => {
  const { children } = props;

  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
