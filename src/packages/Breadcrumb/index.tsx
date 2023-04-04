import { FC, Fragment, memo, useEffect, useState } from "react";
import {
  StyledBreadcrumb,
  StyledBreadcrumbGroup,
  StyledBreadcrumbItem,
} from "./Breadcrumb.styles";
import { Text } from "..";
import { ArrowRight2 } from "iconsax-react";
import { Data } from "../../models";

interface Props {
  items: string[];
}

const Breadcrumb: FC<Props> = (props: Props) => {
  const { items } = props;
  const [data, setData] = useState<Data>(
    JSON.parse(localStorage.getItem("data") || "") as Data,
  );

  useEffect(() => {
    const onStorageChange = () => {
      setData(JSON.parse(localStorage.getItem("data") || "") as Data);
    };

    window.addEventListener("storage", () => onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  }, []);

  return (
    <StyledBreadcrumb>
      <StyledBreadcrumbGroup>
        {items?.map((item: string, index: number) => {
          return (
            <Fragment key={index}>
              <StyledBreadcrumbItem>
                <Text
                  color={`${index < data?.step ? "#FFFFFF" : "#FF8A00"}`}
                  fontWeight={600}
                  style={{
                    backgroundColor: index < data?.step ? "#FF8A00" : "#FFD76D",
                    borderRadius: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "32px",
                    width: "32px",
                  }}
                >
                  {index + 1}
                </Text>
                <Text color="#FF8A00" fontWeight={600}>
                  {item}
                </Text>
              </StyledBreadcrumbItem>
              {index < items.length - 1 && (
                <ArrowRight2 size="24" color="#FF8A65" />
              )}
            </Fragment>
          );
        })}
      </StyledBreadcrumbGroup>
    </StyledBreadcrumb>
  );
};

export default memo(Breadcrumb);
