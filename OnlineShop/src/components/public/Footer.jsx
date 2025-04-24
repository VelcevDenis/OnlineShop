import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <div className="container mt-auto">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            aria-label="Bootstrap"
          >
            <i className="bi bi-bootstrap-fill fs-4" aria-hidden="true"></i>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © {new Date().getFullYear()} Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#" aria-label="Instagram">
              <i className="bi bi-instagram fs-4"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#" aria-label="Facebook">
              <i className="bi bi-facebook fs-4"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
