import axios from "axios";

const API = "http://localhost:5000/api/transactions";

const getToken = () => localStorage.getItem("token");

export const getTransactions = () => {
  return axios.get(API, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export const addTransaction = (data) => {
  return axios.post(`${API}/add`, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export const updateTransaction = (id, data) => {
  return axios.put(`${API}/${id}`, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export const deleteTransaction = (id) => {
  return axios.delete(`${API}/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};