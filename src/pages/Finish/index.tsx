import { FC, memo, useEffect, useState } from "react";
import { useOrderID } from "../../hooks/useOrderID";
import { Column, Container, Link, Text } from "../../packages";
import { useNavigate } from "react-router-dom";
import { Data } from "../../models";
import { INITIAL_DATA } from "../../utilities/constants";
import { Summary } from "../../components";

const Finish: FC = () => {
  const orderID = useOrderID();
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
      <Column style={{ alignItems: "center", justifyContent: "center" }}>
        <section>
          <Text as="h1" color="#FF8A00" fontSize="36px" fontWeight={700}>
            Thank you
          </Text>
          <Column style={{ gap: "8px", marginBottom: "32px" }}>
            <Text>Order ID : {orderID}</Text>
            <Text color="#B4B4B4">
              Your order will be delivered today with GO-SEND
            </Text>
          </Column>
          <Link
            hasIcon
            onClick={() => {
              setData(INITIAL_DATA);
              setTimeout(() => navigate("/", { replace: true }), 1000);
            }}
          >
            Go to homepage
          </Link>
        </section>
      </Column>
      <Summary />
    </Container>
  );
};

export default memo(Finish);
