import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/subscription`,
});

export const getSubscriptionPlans = () => {
  return API.get("/plans");
};