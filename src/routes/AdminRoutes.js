import React from "react";
import Loader from "../utils/Loader";
import { Routes, Route } from "react-router-dom";
import NewsPage from "../AdminPanel/NewsPage/NewsPage.js";

function AdminRoutes() {
  return (
    <div>
      <React.Suspense fallback={<Loader active={true} />}>
        <Routes>
          <Route exact path="/news" element={<NewsPage />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default AdminRoutes;
