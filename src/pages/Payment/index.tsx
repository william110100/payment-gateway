import { FC, memo, useEffect, useState } from "react";
import { Card, Column, Container, Row, Text } from "../../packages";
import { Data } from "../../models";
import { useNavigate } from "react-router-dom";
import { PAYMENTS, SHIPMENTS } from "../../utilities/constants";
import { StyledView } from "./Payment.styles";
import { Summary } from "../../components";

const Payment: FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Data>(
    JSON.parse(localStorage.getItem("data") || "") as Data,
  );

  useEffect(() => {
    if (data) {
      localStorage.setItem("data", JSON.stringify(data));
      window.dispatchEvent(new Event("storage"));
    }
  }, [data]);

  return (
    <Container>
      <StyledView>
        <Column>
          <Text as="h1" color="#FF8A00" fontSize="36px" fontWeight={700}>
            Shipment
          </Text>
          <Row style={{ gap: "16px" }}>
            {SHIPMENTS?.map((item: any, index: number) => (
              <section
                className={
                  item.name === data?.shipment.courierName
                    ? "active"
                    : "inactive"
                }
                key={index}
              >
                <Card
                  key={index}
                  onClick={() => {
                    setData({
                      ...data,
                      shipment: {
                        ...data?.shipment,
                        courierName: item.name,
                        price: item.price,
                      },
                      total: data?.total + data?.shipment.price,
                    });
                  }}
                >
                  <Column style={{ gap: "8px" }}>
                    <Text color="#818181">{item.name}</Text>
                    <Text color="#818181" fontSize="20px" fontWeight={600}>
                      {item.price}
                    </Text>
                  </Column>
                </Card>
              </section>
            ))}
          </Row>
        </Column>
        <Column>
          <Text as="h1" color="#FF8A00" fontSize="36px" fontWeight={700}>
            Payment
          </Text>
          <Row style={{ gap: "16px" }}>
            {PAYMENTS.map((item: any, index: number) => (
              <section
                className={item === data.payment ? "active" : "inactive"}
                key={index}
              >
                <Card onClick={() => setData({ ...data, payment: item })}>
                  <Text color="#818181">{item}</Text>
                </Card>
              </section>
            ))}
          </Row>
        </Column>
      </StyledView>
      <Summary
        buttonTitle={`Pay with ${data?.payment}`}
        onClick={() => {
          setData({ ...data, step: 3 });
          setTimeout(() => navigate("/finish"), 1000);
        }}
      />
    </Container>
  );
};

export default memo(Payment);
