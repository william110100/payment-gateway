import { FC, createContext, useMemo, useState } from "react";
import { ChildrenProps } from "../models";

interface IAppContext {
  validEmail: string;
  validPhone: string;
  validAddress: string;
  validDropshipperName: string;
  validDropshipperPhone: string;
  onValidateEmail: (isValid: boolean) => void;
  onValidatePhone: (isValid: boolean) => void;
  onValidateAddress: (isValid: boolean) => void;
  onValidateDropshipperName: (isValid: boolean) => void;
  onValidateDropshipperPhone: (isValid: boolean) => void;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

const AppProvider: FC<ChildrenProps> = (props: ChildrenProps) => {
  const { children } = props;
  const [validEmail, setValidEmail] = useState<string>("default");
  const [validPhone, setValidPhone] = useState<string>("default");
  const [validAddress, setValidAddress] = useState<string>("default");
  const [validDropshipperName, setValidDropshipperName] =
    useState<string>("default");
  const [validDropshipperPhone, setValidDropshipperPhone] =
    useState<string>("default");

  const onValidateEmail = (isValid: boolean) =>
    setValidEmail(isValid ? "valid" : "invalid");
  const onValidatePhone = (isValid: boolean) =>
    setValidPhone(isValid ? "valid" : "invalid");
  const onValidateAddress = (isValid: boolean) =>
    setValidAddress(isValid ? "valid" : "invalid");
  const onValidateDropshipperName = (isValid: boolean) =>
    setValidDropshipperName(isValid ? "valid" : "invalid");
  const onValidateDropshipperPhone = (isValid: boolean) =>
    setValidDropshipperPhone(isValid ? "valid" : "invalid");

  const value = useMemo(
    () => ({
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
    }),
    [
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
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
