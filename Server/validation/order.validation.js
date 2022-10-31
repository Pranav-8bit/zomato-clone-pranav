import joi from "joi";

export const ValidateNew = (orderObject) => {
  const Schema = joi.object({
    food: joi
      .array()
      .items(joi.object({ details: joi.string(), quantity: joi.number() })),
    paymode: joi.string(),
    status: joi.string(),
    paymentDetails: joi
      .object()
      .keys({
        itemTotal: joi.number(),
        promo: joi.string(),
        tax: joi.string(),
        razorpay_payment_id: joi.string(),
      })
      .unknown(true),
  });
  return Schema.validateAsync(orderObject);
};
