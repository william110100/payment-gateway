import { FC, ReactNode } from "react";
import { StyledLink } from "./Link.styles";
import { ArrowLeft } from "iconsax-react";

interface Props {
  children: ReactNode;
  hasIcon?: boolean;
  onClick?: () => void;
}

const Link: FC<Props> = (props: Props) => {
  const { children, hasIcon, onClick } = props;

  return (
    <StyledLink onClick={onClick}>
      <>
        {hasIcon && <ArrowLeft color="#B4B4B4" size="24" />}
        {children}
      </>
    </StyledLink>
  );
};

export default Link;
