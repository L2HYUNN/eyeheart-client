import axios from "axios";

const BASE_URL = "http://133.186.215.54:5000";

export const postUserRegister = async (data) => {
  return await axios.post(`${BASE_URL}/register`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const postUserLogin = async (data) => {
  return await axios.post(`${BASE_URL}/login`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const postChildRegister = async (data) => {
  return await axios.post(`${BASE_URL}/child`, data[0], {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data[1]}`,
    },
  });
};
