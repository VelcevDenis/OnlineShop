// components/admin/AdminAppLayout.jsx
import React from "react";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter"; // ✅ Убедись, что путь правильный
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const AdminAppLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AdminHeader />
      <main className="flex-grow-1">{children}</main>
      <AdminFooter /> {/* ✅ Footer должен быть тут */}
    </div>
  );
};

export default AdminAppLayout;
