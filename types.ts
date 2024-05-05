export interface Root {
  resultCode: number;
  message: string;
  data: DataType;
  success: boolean;
}

export interface DataType {
  coverUrl: string;
  avatarUrl: string;
  name: string;
  description: string;
  links: LinkType[];
  fixedAmounts: FixedAmount[];
  paymentMethods: PaymentMethod[];
}

export interface LinkType {
  name: string;
  url: string;
}

export interface FixedAmount {
  id: number;
  name: string;
  color: string;
  money: number;
}

export interface PaymentMethod {
  value: number;
  label: string;
}
