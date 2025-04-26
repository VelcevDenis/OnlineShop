import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const AdminFooter = () => {
  return (
    <footer className="mt-auto bg-light border-top py-3 px-4">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <span className="text-muted">© {new Date().getFullYear()} Admin Panel</span>
        <div>
          <a href="#" className="text-muted me-3" aria-label="Facebook">
            <i className="bi bi-facebook fs-5"></i>
          </a>
          <a href="#" className="text-muted me-3" aria-label="Instagram">
            <i className="bi bi-instagram fs-5"></i>
          </a>
          <a href="#" className="text-muted" aria-label="GitHub">
            <i className="bi bi-github fs-5"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;
