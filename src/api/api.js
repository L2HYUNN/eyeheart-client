import axios from "axios";

const BASE_URL = "http://125.6.39.158:5000";

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

export const getConsultings = async () => {
  return await axios.get(`${BASE_URL}/consultings`);
};

export const getConsultingsDetail = async (id) => {
  return await axios.get(`${BASE_URL}/consulting/page/${id}`);
};

export const postConsultingReservation = async (reservation) => {
  return await axios.post(`${BASE_URL}/reservation/make`, reservation, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getUserReservation = async (id) => {
  return await axios.get(`${BASE_URL}/reservations/user/${id}`);
};
