import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51OXlK3DpL9bVYSdzWCyZG74g0UX6yZaP60BBIKlLHmEMkQTALX1jZSPrsPYV9tQrr945WOzSBWkx5D4NVfeEj4Tp00ETKmTcaU"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    console.log(res);
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
