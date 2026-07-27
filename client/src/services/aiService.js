import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/ai`;
const getToken = () => localStorage.getItem("token");

export const getFinancialAdvice = () => {
  return axios.get(`${API}/advice`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};