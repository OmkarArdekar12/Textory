import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `https://textory-7jm8.vercel.app/api`,
  withCredentials: true,
});
