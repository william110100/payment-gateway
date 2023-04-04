import { FC, memo, useContext, useEffect, useState } from "react";
import {
  Checkbox,
  Column,
  Container,
  Input,
  Row,
  Text,
  Textarea,
} from "../../packages";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledView } from "./Delivery.styles";
import { Data } from "../../models";
import { useNavigate } from "react-router-dom";
import { EMAIL_REGEX, PHONE_REGEX } from "../../utilities/constants";
import { Summary } from "../../components";
import { AppContext } from "../../contexts";

const Delivery: FC = () => {
  const {
    validEmail,
    validPhone,
    validAddress,
    validDropshipperName,
    validDropshipperPhone,
    onValidateEmail,
    onValidatePhone,
    onValidateAddress,
    onValidateDropshipperName,
    onValidateDropshipperPhone,
  } = useContext(AppContext);
  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    trigger,
  } = useForm<Data>();
  const navigate = useNavigate();
  const [textLength, setTextLength] = useState<number>(0);
  const [storage, setStorage] = useState<Data>(
    JSON.parse(localStorage.getItem("data") || "") as Data,
  );

  const onSubmit: SubmitHandler<Data> = (data) => {
    setStorage({
      ...storage,
      deliveryAddress: data.deliveryAddress,
      dropshipperName: data.dropshipperName ?? "",
      dropshipperPhone: data.dropshipperPhone ?? "",
      email: data.email,
      phone: data.phone,
      step: 2,
      total: data?.total + 15000,
    });
    setTimeout(() => navigate("/payment"), 1000);
  };

  useEffect(() => {
    if (storage) {
      localStorage.setItem("data", JSON.stringify(storage));
      window.dispatchEvent(new Event("storage"));
    }
  }, [storage]);

  return (
    <Container>
      <StyledView>
        <Column style={{ alignItems: "flex-start", gap: "16px" }}>
          <Row>
            <Text color="#FF8A00" fontSize="36px" fontWeight={700}>
              Delivery Details
            </Text>
          </Row>
          <Column style={{ gap: "16px" }}>
            <Input
              inputClassName={`floatingInput ${validEmail}`}
              idFor="inputEmail"
              inputName="email"
              onKeyUp={async () => {
                const isValid = await trigger("email");
                onValidateEmail(isValid);
              }}
              placeholder="Email"
              type="text"
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: EMAIL_REGEX,
                  message: "Invalid email",
                },
              })}
            />
            <Input
              inputClassName={`floatingInput ${validPhone}`}
              idFor="inputPhone"
              inputName="phone"
              onKeyUp={async () => {
                const isValid = await trigger("phone");
                onValidatePhone(isValid);
              }}
              placeholder="Phone Number"
              type="text"
              {...register("phone", {
                required: "Phone Number is Required",
                minLength: 6,
                maxLength: 20,
                pattern: {
                  value: PHONE_REGEX,
                  message: "Invalid Phone Number",
                },
              })}
            />
            <Textarea
              inputClassName={`floatingInput ${validAddress}`}
              idFor="inputAddress"
              inputName="Address"
              onKeyUp={async () => {
                const isValid = await trigger("deliveryAddress");
                setTextLength(getValues("deliveryAddress").length);
                onValidateAddress(isValid);
              }}
              placeholder="Delivery Address"
              {...register("deliveryAddress", {
                required: "Delivery Address is Required",
                maxLength: {
                  value: 120,
                  message: "maximun allowed length is 120",
                },
              })}
            />
          </Column>
        </Column>
        <Column style={{ gap: "16px" }}>
          <Row style={{ alignItems: "center", gap: "16px" }}>
            <section className={`${storage?.isDropshipper ? "checked" : ""}`}>
              <Checkbox
                onClick={() => {
                  setStorage({
                    ...storage,
                    isDropshipper: !storage?.isDropshipper,
                    total: !storage?.isDropshipper
                      ? storage?.total + 5900
                      : storage?.total - 5900,
                  });
                }}
              ></Checkbox>
            </section>
            <Text>Send as dropshipper</Text>
          </Row>
          {storage?.isDropshipper && (
            <Column style={{ gap: "16px" }}>
              <Input
                inputClassName={`floatingInput ${validDropshipperName}`}
                idFor="inputDropshipperName"
                inputName="dropshipperName"
                onKeyUp={async () => {
                  const isValid = await trigger("dropshipperName");
                  onValidateDropshipperName(isValid);
                }}
                placeholder="Dropshipper name"
                type="text"
                {...register("dropshipperName", {
                  required: "Dropshipper Name is Required",
                })}
              />
              <Input
                idFor="inputDropshipperPhoneNumber"
                inputClassName={`floatingInput ${validDropshipperPhone}`}
                inputName="dropshipperPhoneNumber"
                onKeyUp={async () => {
                  const isValid = await trigger("dropshipperPhone");
                  onValidateDropshipperPhone(isValid);
                }}
                placeholder="Dropshipper phone number"
                type="text"
                {...register("dropshipperPhone", {
                  required: "Dropshipper Phone is Required",
                  minLength: 6,
                  maxLength: 14,
                  pattern: {
                    value: PHONE_REGEX,
                    message: "Dropshipper Phone Invalid",
                  },
                })}
              />
            </Column>
          )}
        </Column>
      </StyledView>
      <Summary
        buttonTitle="Continue to Payment"
        onClick={handleSubmit(onSubmit)}
      />
    </Container>
  );
};

export default memo(Delivery);
