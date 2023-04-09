import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
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

api.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);
