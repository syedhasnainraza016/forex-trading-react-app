import axios from "../axiosConfig";

class Routes {
  login(data) {
    return axios.post(`/auth/login`, data);
  }
  register(data) {
    return axios.post(`/auth/register`, data);
  }
  openApp() {
    return axios.get(`/auth/open-app`);
  }
  getusers() {
    return axios.get(`/auth/all-users`);
  }
}

export default new Routes();
