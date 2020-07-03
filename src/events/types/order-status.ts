export enum OrderStatus {
  // when order has been created, but ticket not reserved
  Created = 'created',

  // if ticket is already reserved, or user cancelled the order, or order expires before payment
  Cancelled = 'cancelled',

  // order has successfully reserved ticket
  AwaitingPayment = 'awaiting:payment',

  // order reserved ticket and user provided successful payment
  Complete = 'complete',
}
