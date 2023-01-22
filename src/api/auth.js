import axios from "./axios";

export const register = async (body) => {
  const url = "/auth/register";
  const response = await axios.post(url, body);
  return response.data;
};

export const login = async (body) => {
  const url = "/auth/login";
  const response = await axios.post(url, body);
  return response.data.accessToken;
};

export const updateAccessToken = async () => {
  const url = "/auth/refresh";
  const response = await axios.post(url, { refreshToken: localStorage.getItem("refreshToken") });
  return response.data.accessToken;
};
