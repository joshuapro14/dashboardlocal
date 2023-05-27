import axios from "axios";

const OV_URL = "https://assignment-1-fc7lwmf3uq-el.a.run.app/order-value";

export const fetchOrderValue = async () => {
  const response = await axios.get(OV_URL);
  console.log("OV RESP", response.data);
  return response.data;
};
