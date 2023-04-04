import { ReactNode } from "react";

export interface ChildrenProps {
  children?: ReactNode;
}

interface Shipment {
  courierName: string;
  price: number;
}

export interface Data {
  deliveryAddress: string;
  dropshipperName: string;
  dropshipperPhone: string;
  email: string;
  isDropshipper: boolean;
  orderId: string;
  payment: string;
  phone: string;
  shipment: Shipment;
  step: number;
  total: number;
}
