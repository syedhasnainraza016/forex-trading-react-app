import React from "react";
import Loader from "../utils/Loader";
import { Routes, Route } from "react-router-dom";
import NewsPage from "../AdminPanel/NewsPage/NewsPage.js";
import CoursePage from "../AdminPanel/CoursesPage/CoursePage";
import UsersPage from "../AdminPanel/UsersPage/UsersPage";
import MyCoursesPage from "../UserPanel/UsersPage/UsersPage";

function AdminRoutes() {
  return (
    <div>
      <React.Suspense fallback={<Loader active={true} />}>
        <Routes>
          <Route exact path="/news" element={<NewsPage />} />
          <Route exact path="/course" element={<CoursePage />} />
          <Route exact path="/users" element={<UsersPage />} />
          <Route exact path="/my-courses" element={<MyCoursesPage />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default AdminRoutes;
