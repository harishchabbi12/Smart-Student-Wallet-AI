import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/auth`,
});

export const loginUser = (userData) => {
  return API.post("/login", userData);
};

export const registerUser = (userData) => {
  return API.post("/register", userData);
};