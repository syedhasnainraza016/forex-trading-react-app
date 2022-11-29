import axios from "../axiosConfig";

class Routes {
  allNews() {
    return axios.get("/news/all");
  }
  addNews(data) {
    return axios.post(`/news/create`, data);
  }
  deleteNews(id) {
    return axios.post(`/news/delete`, id);
  }
  newsPrediction() {
    return axios.get(`/news/predict`);
  }
}

export default new Routes();
