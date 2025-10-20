import axios from "axios";

const BASE_URL = "https://textory-7jm8.vercel.app";

export const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true,
});
