import { Data } from "../models";

export const INITIAL_DATA: Data = {
  deliveryAddress: "",
  dropshipperName: "",
  dropshipperPhone: "",
  email: "",
  isDropshipper: false,
  orderId: "",
  payment: "e-Wallet",
  phone: "",
  shipment: {
    courierName: "GO-SEND",
    price: 15000,
  },
  step: 1,
  total: 500000,
};

export const SHIPMENTS = [
  {
    name: "GO-SEND",
    price: 15000,
  },
  {
    name: "JNE",
    price: 9000,
  },
  {
    name: "Personal Courier",
    price: 29000,
  },
];

export const PAYMENTS = ["e-Wallet", "Bank Transfer", "Virtual Account"];

export const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
export const PHONE_REGEX = /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/;
