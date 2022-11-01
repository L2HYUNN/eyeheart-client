import axios from "axios";
import { get } from "react-hook-form";

const BASE_URL = "https://api.k-doll-ai-restful.com";

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

// {{base_url}}/chats/day/20220910

export const getChat = async (date) => {
  return await axios.get(`${BASE_URL}/chats/day/${date}`);
};

// {{base_url}}/stat/recent/scenario/20221002

export const getChatScenario = async (date) => {
  return await axios.get(`${BASE_URL}/stat/recent/scenario/${date}`);
};

//{{base_url}}/stat/bad/day/20220918

export const getChatBadWord = async (date) => {
  return await axios.get(`${BASE_URL}/stat/bad/day/${date}`);
};

// {{base_url}}/stat/topic/latest/20221004/before/7

export const getChatTopic = async (date) => {
  return await axios.get(`${BASE_URL}/stat/topic/latest/${date}/before/7`);
};

// {{base_url}}/stat/relation/latest/20220919/before/7

export const getAnalysisRelation = async (date) => {
  return await axios.get(`${BASE_URL}/stat/relation/latest/${date}/before/7`);
};

// {{base_url}}/stat/recent/words/today/20220920

export const getAnalysisWord = async (date) => {
  return await axios.get(`${BASE_URL}/stat/recent/words/today/${date}`);
};

// {{base_url}}/stat/emotion/latest/20220922/before/7
// {{base_url}}/stat/recent/emotions/20221004

export const getAnalysisHeart = async (date) => {
  return await axios.get(`${BASE_URL}/stat/emotion/latest/${date}/before/7`);
};

export const getAnalysisEmotion = async (date) => {
  return await axios.get(`${BASE_URL}/stat/recent/emotions/${date}`);
};
