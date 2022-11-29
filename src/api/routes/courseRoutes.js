import axios from "../axiosConfig";

class Routes {
  allCourse() {
    return axios.get("/course/all");
  }
  addCourse(data) {
    return axios.post(`/course/create`, data);
  }
  deleteCourse(id) {
    return axios.post(`/course/delete`, id);
  }
  editCourse(id, data) {
    return axios.post(`/course/edit/${id}`, data);
  }
  //buyer
  buyCourse(data) {
    return axios.post(`/course/buy-course`, data);
  }
  getbuyerCourses(user_id) {
    return axios.get(`/course/get-buyer-courses/${user_id}`);
  }
}

export default new Routes();
