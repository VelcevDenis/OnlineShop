import React, { Suspense, useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Публичные страницы
const HomePage = React.lazy(() => import("../pages/public/Home/HomePage"));
const AutoPage = React.lazy(() => import("../pages/public/Auto/AutoPage"));
const RealtyPage = React.lazy(() => import("../pages/public/Realty/RealtyPage"));
const ServicePage = React.lazy(() => import("../pages/public/Service/ServicePage"));
const FashionStyleBeautyPage = React.lazy(() => import("../pages/public/FashionStyleBeauty/FashionStyleBeautyPage"));
const ChildrensProductsPage = React.lazy(() => import("../pages/public/ChildrensProducts/ChildrensProductsPage"));
const HouseGardenPage = React.lazy(() => import("../pages/public/HouseGarden/HouseGardenPage"));
const JobPage = React.lazy(() => import("../pages/public/Job/JobPage"));
const PetPage = React.lazy(() => import("../pages/public/Pet/PetPage"));
const EntertainmentAndHobbiesPage = React.lazy(() => import("../pages/public/EntertainmentAndHobbies/EntertainmentAndHobbiesPage"));
const SportsEquipmentPage = React.lazy(() => import("../pages/public/SportsEquipment/SportsEquipmentPage"));
const ElectronicPage = React.lazy(() => import("../pages/public/Electronic/ElectronicPage"));
const EverythingForBusinessPage = React.lazy(() => import("../pages/public/EverythingForBusiness/EverythingForBusinessPage"));
const NotFoundPage = React.lazy(() => import("../pages/public/NotFound/NotFoundPage"));

// Админские страницы
const AdminHomePage = React.lazy(() => import("../pages/admin/Home/AdminHomePage"));
const LoginPage = React.lazy(() => import("../pages/admin/Login/LoginPage"));

const RoutesComponent = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  }, [token]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Публичные страницы */}
        <Route path="/public/home" element={<HomePage />} />
        <Route path="/public/auto" element={<AutoPage />} />
        <Route path="/public/realty" element={<RealtyPage />} />
        <Route path="/public/service" element={<ServicePage />} />
        <Route path="/public/fashion-style-beauty" element={<FashionStyleBeautyPage />} />
        <Route path="/public/childrens-products" element={<ChildrensProductsPage />} />
        <Route path="/public/house-garden" element={<HouseGardenPage />} />
        <Route path="/public/job" element={<JobPage />} />
        <Route path="/public/pet" element={<PetPage />} />
        <Route path="/public/entertainment-and-hobbies" element={<EntertainmentAndHobbiesPage />} />
        <Route path="/public/sports-equipment" element={<SportsEquipmentPage />} />
        <Route path="/public/electronic" element={<ElectronicPage />} />
        <Route path="/public/everything-for-business" element={<EverythingForBusinessPage />} />
        
        {/* Админские страницы */}
        <Route
          path="/admin/home"
          element={token ? <AdminHomePage /> : <Navigate to="/login" />}
        />
        
        {/* Страница логина */}
        <Route
          path="/login"
          element={<LoginPage setToken={token => { 
            localStorage.setItem('token', token); 
            setToken(token); 
          }} />}
        />

        {/* Страница 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesComponent;
