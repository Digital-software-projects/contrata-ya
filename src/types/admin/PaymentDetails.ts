/**
 * Interface for storing payment details related to admin actions.
 */
export interface PaymentDetails {
  id?: string;
  amount: number; // Payment amount
  currency: Currency; // Currency of the payment (e.g., USD, EUR)
  paymentMethod: "BANK_TRANSFER" | "CREDIT_CARD" | "PAYPAL" | "OTHER"; // Payment method used
  transactionId: string; // ID of the transaction
}

export type Currency = "Bs (BOB)" | "USD" | string;
