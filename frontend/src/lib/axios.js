import axios from "axios";

const BASE_URL = "https://textory-1.onrender.com";

export const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true,
});
