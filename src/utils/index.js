import axios from "axios";

export const handlePayNow = async (cart) => {
    alert('Redirecting to payment gateway...');
    const result = await axios.post('http://localhost:3001/stripe/create-checkout-session',
      { method: 'POST', body: JSON.stringify({ products: cart }) });
    console.log("Result", result);
    window.location.href = result.data.url;
  };