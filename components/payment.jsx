import axios from "axios"
import Link from "next/link"
const handlePayment = async (e) => {
  e.preventDefault();
  const { data } = await axios.post('/api/payment',
  {
    priceId: price.id
  },
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
  );
  window.location.assign(data)
}