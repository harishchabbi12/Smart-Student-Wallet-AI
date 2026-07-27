import axios from "axios";

const API = "http://localhost:5000/api/dashboard";

const getToken = () => localStorage.getItem("token");

const config = {
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
};

export const getDashboardData = () => {
  return axios.get(API, config);
};

export const getMonthlyAnalytics = () => {
  return axios.get(`${API}/monthly`, config);
};

export const getExpenseByCategory = () => {
  return axios.get(`${API}/categories`, config);
};

export const getRecentActivity = () => {
  return axios.get(`${API}/recent`, config);
};