import React, { FormEvent, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getAllOrders, reset } from "../../store/order/order";
import axios from "axios";

function PaymentGateway() {
  const { orders } = useSelector((state: RootState) => state.orders);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  const totalPrice = orders.reduce((acc, item) => acc + item.total_price, 0);

  console.log(totalPrice);
  useEffect(() => {
    if (totalPrice === 0) return;

    if (paymentStatus !== "succeeded") return;

    dispatch(reset());
  }, []);

  console.log(orders);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log(e);
    e.preventDefault();
    if (totalPrice === 0) return;

    if (!stripe || !elements) return;

    const cardEl = elements.getElement(CardElement);
    setIsProcessing(true);

    try {
      const res = await axios.get("http://localhost:9000/stripe");
      const { client_secret: ClientSecret } = res.data;

      const { paymentIntent } = await stripe.confirmCardPayment(ClientSecret, {
        payment_method: {
          card: cardEl!,
        },
      });

      if (!paymentIntent) {
        setPaymentStatus("Payment failed");
      } else {
        setPaymentStatus(paymentIntent.status);
      }
    } catch (error) {
      console.log(error);
      setPaymentStatus("error");
    }
    setIsProcessing(false);
  };

  return (
    <div style={{ fontSize: "20px" }}>
      <form onSubmit={handleSubmit} id="payment-form">
        <label htmlFor="card-element"> Place Order</label>
        <CardElement id="card-element" />
        {!isProcessing && (
          <button type="submit" className="primary-btn">
            Pay{" "}
          </button>
        )}
        {isProcessing && <div>Processing...</div>}
        {!isProcessing && paymentStatus && <div>status: {paymentStatus}</div>}
      </form>
    </div>
  );
}

// export default PaymentGateway;

const PaymentGateWayWrapper = () => {
  const stripePromise = loadStripe(
    `${import.meta.env.VITE_REACT_APP_STRIPE_API_KEY}`
  );
  return (
    <Elements stripe={stripePromise}>
      <PaymentGateway />
    </Elements>
  );
};

export default PaymentGateWayWrapper;
