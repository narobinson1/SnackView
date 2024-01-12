import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51OXlK3DpL9bVYSdzWCyZG74g0UX6yZaP60BBIKlLHmEMkQTALX1jZSPrsPYV9tQrr945WOzSBWkx5D4NVfeEj4Tp00ETKmTcaU"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
