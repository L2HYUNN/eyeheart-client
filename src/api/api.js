/* eslint-disable no-return-await */
import axios from 'axios';

const BASE_URL = 'http://125.6.39.158:5000';

export const postUserRegister = async (data) =>
  await axios.post(`${BASE_URL}/register`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const postUserLogin = async (data) =>
  await axios.post(`${BASE_URL}/login`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const postChildRegister = async (data) =>
  await axios.post(`${BASE_URL}/child`, data[0], {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data[1]}`,
    },
  });

export const getConsultings = async () => await axios.get(`${BASE_URL}/consultings`);

export const getConsultingsDetail = async (id) => await axios.get(`${BASE_URL}/consulting/page/${id}`);

export const postConsultingReservation = async (reservation) =>
  await axios.post(`${BASE_URL}/reservation/make`, reservation, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const getUserReservation = async (id) => await axios.get(`${BASE_URL}/reservations/user/${id}`);

// {{base_url}}/chats/day/20220910

export const getChat = async (date) => await axios.get(`${BASE_URL}/chats/day/${date}`);

// {{base_url}}/stat/recent/scenario/20221002

export const getChatScenario = async (date) => await axios.get(`${BASE_URL}/stat/recent/scenario/${date}`);

// {{base_url}}/stat/bad/day/20220918

export const getChatBadWord = async (date) => await axios.get(`${BASE_URL}/stat/bad/day/${date}`);

// {{base_url}}/stat/topic/latest/20221004/before/7

export const getChatTopic = async (date) => await axios.get(`${BASE_URL}/stat/topic/latest/${date}/before/7`);

// {{base_url}}/stat/relation/latest/20220919/before/7

export const getAnalysisRelation = async (date) => await axios.get(`${BASE_URL}/stat/relation/latest/${date}/before/7`);

// {{base_url}}/stat/recent/words/today/20220920

export const getAnalysisWord = async (date) => await axios.get(`${BASE_URL}/stat/recent/words/today/${date}`);

// {{base_url}}/stat/emotion/latest/20220922/before/7
// {{base_url}}/stat/recent/emotions/20221004

export const getAnalysisHeart = async (date) => await axios.get(`${BASE_URL}/stat/emotion/latest/${date}/before/7`);

export const getAnalysisEmotion = async (date) => await axios.get(`${BASE_URL}/stat/recent/emotions/${date}`);
