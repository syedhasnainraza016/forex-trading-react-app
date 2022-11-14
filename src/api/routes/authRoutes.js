import axios from "../axiosConfig";

class Routes {
  login(data) {
    return axios.post(`/auth/login`, data);
  }
  register(data) {
    return axios.post(`/auth/register`, data);
  }
}

export default new Routes();
