import axios from "axios";
// import { toast } from "react-toastify";

function getToken() {
  if (localStorage.getItem("user")) {
    const parseData = JSON.parse(localStorage.getItem("user") || "");
    return parseData.access_token;
  }
  return "";
}

const instance = axios.create({
  baseURL: `http://localhost:4000/api`,
  headers: {
    "Content-Type": "application/json",
    "cache-control": "no-cache",
    "content-type": "multipart/form-data",
  },
});

instance.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Bearer ${getToken()}`;

    return config;
  },
  (error) => {
    return error;
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.message) {
      // toast.success(response.data.message);
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("user");
    }

    // if (error.response?.data?.message) {
    //   toast.error(error.response.data.message);
    // } else if (error.message) {
    //   toast.error(error.message);
    // } else if (error.response?.data?.error) {
    //   toast.error(error.response.data.error);
    // }
    return error;
  }
);

export default instance;
