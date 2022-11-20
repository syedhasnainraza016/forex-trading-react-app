import React from "react";
import Layout from "../UserPanel/Layout";
import AdminRoutes from "../routes/AdminRoutes.js";

function Admin() {
  return (
    <div>
      <Layout>
        <AdminRoutes />
      </Layout>
    </div>
  );
}

export default Admin;
