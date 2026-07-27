import axios from "axios";

const API = "http://localhost:5000/api/ai";

const getToken = () => localStorage.getItem("token");

export const getFinancialAdvice = () => {
  return axios.get(`${API}/advice`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};