import axios from "axios";

export const api = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop/",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.set({
        Authorization: `Bearer ${token}`,
      });
    }
    return config;
  },
  (error) => Promise.reject(error)
);
