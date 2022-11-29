import axios from "../axiosConfig";

class Routes {
  allArticle() {
    return axios.get("/article/all");
  }
  addArticle(data) {
    return axios.post(`/article/create`, data);
  }
  deleteArticle(id) {
    return axios.post(`/article/delete`, id);
  }
  articlePrediction() {
    return axios.get(`/article/predict`);
  }
}

export default new Routes();
