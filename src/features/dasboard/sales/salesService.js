import axios from "axios";

const SALES_URL = "https://assignment-1-fc7lwmf3uq-el.a.run.app/sales";

export const fetchSales = async () => {
  const response = await axios.get(SALES_URL);
  return response.data;
};
