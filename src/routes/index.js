import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "../components/Auth/SignUp";
import SignIn from "../components/Auth/SignIn";
import Loader from "../utils/Loader";
import UserRoutes from "./userRoutes";
import AdminRoutes from "../pages/Admin";
import BuyerRoutes from "../pages/Buyer";

function AppRoutes() {
  return (
    <React.Suspense fallback={<Loader active={true} />}>
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/" element={<Navigate to={"/user/home"} />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/user/*" element={<UserRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/buyer/*" element={<BuyerRoutes />} />

        <Route
          exact
          path="/"
          element={<Navigate replace to="/auth/signin" />}
        />
      </Routes>
    </React.Suspense>
  );
}
export default AppRoutes;
