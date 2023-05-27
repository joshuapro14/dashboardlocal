import axios from "axios";

const REVENUE_URL = "https://assignment-1-fc7lwmf3uq-el.a.run.app/revenue";

export const fetchRevenue = async () => {
  const response = await axios.get(REVENUE_URL);
  console.log("REVENUE RESP", response.data);
  return response.data;
};
