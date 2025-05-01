import React, { useEffect, useState } from "react";
import AdminRightSidebarMenu from "./AdminRightSidebarMenu";
import AdminFooter from "./AdminFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const AdminAppLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // например меньше 768px считаем мобилкой
    };

    checkMobile(); // Проверить при загрузке
    window.addEventListener("resize", checkMobile); // Проверять при изменении размера

    return () => window.removeEventListener("resize", checkMobile); // Чистим слушатель
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      {isMobile ? (
        <>
          {/* На мобиле — AdminRightSidebarMenu сверху */}
          <AdminRightSidebarMenu />
          <main className="flex-grow-1 p-4">{children}</main>
        </>
      ) : (
        <div className="d-flex flex-grow-1">
          {/* На десктопе — AdminRightSidebarMenu слева */}
          <AdminRightSidebarMenu />
          <main className="flex-grow-1 p-4">{children}</main>
        </div>
      )}

      {/* Футер внизу всегда */}
      <AdminFooter />
    </div>
  );
};

export default AdminAppLayout;
