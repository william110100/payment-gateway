import { FC, useEffect, useState } from "react";
import { Button, Column, Row, Text } from "../../packages";
import { StyledView } from "./Summary.styles";
import { Data } from "../../models";

interface Props {
  buttonTitle?: string;
  onClick?: () => void;
}

const Summary: FC<Props> = (props: Props) => {
  const { buttonTitle, onClick = () => {} } = props;
  const [data, setData] = useState<Data>(
    JSON.parse(localStorage.getItem("data") || "") as Data,
  );

  useEffect(() => {
    const onStorageUpdate = () => {
      setData(JSON.parse(localStorage.getItem("data") || "") as Data);
    };

    window.addEventListener("storage", onStorageUpdate);
    return () => window.removeEventListener("storage", onStorageUpdate);
  }, []);

  return (
    <StyledView>
      <Column style={{ gap: "16px" }}>
        <Text color="#FF8A00" fontSize="32px" fontWeight={700}>
          Summary
        </Text>
        <Text color="#818181">10 items purchased</Text>
      </Column>
      {data?.step >= 2 && (
        <Column style={{ gap: "8px" }}>
          <Text fontWeight={600}>Delivery estimation</Text>
          <Text color="#1BD97B" fontSize="20px" fontWeight={600}>
            today by {data?.shipment.courierName}
          </Text>
        </Column>
      )}
      {data?.step === 3 && (
        <Column style={{ gap: "8px" }}>
          <Text fontWeight={600}>Payment Method</Text>
          <Text color="#1BD97B" fontSize="20px" fontWeight={600}>
            {data?.payment}
          </Text>
        </Column>
      )}
      <Column style={{ gap: "28px" }}>
        <Column style={{ gap: "16px" }}>
          <Row style={{ justifyContent: "space-between" }}>
            <Text color="#818181">Cost of goods</Text>
            <Text fontWeight={700}>500000</Text>
          </Row>
          {data?.isDropshipper && (
            <Row style={{ justifyContent: "space-between" }}>
              <Text color="#818181">Dropshipping Fee</Text>
              <Text fontWeight={700}>5900</Text>
            </Row>
          )}
          {data?.step >= 2 && (
            <Row style={{ justifyContent: "space-between" }}>
              <Text color="#818181" fontWeight={700}>
                {data?.shipment.courierName}{" "}
                <Text color="#818181">shipment</Text>
              </Text>
              <Text fontWeight={700}>{data?.shipment.price}</Text>
            </Row>
          )}
        </Column>
        <Row style={{ justifyContent: "space-between" }}>
          <Text color="#FF8A00" fontSize="32px" fontWeight={700}>
            Total
          </Text>
          <Text color="#FF8A00" fontSize="32px" fontWeight={700}>
            {data?.total}
          </Text>
        </Row>
        {typeof buttonTitle !== "undefined" && (
          <Button onClick={onClick}>
            <Text color={"#FFFFFF"} fontSize={"24px"}>
              {buttonTitle}
            </Text>
          </Button>
        )}
      </Column>
    </StyledView>
  );
};

export default Summary;
