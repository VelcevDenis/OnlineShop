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
const CreateAdvertPage = React.lazy(() => import("../pages/admin/CreateAdvert/CreateAdvertPage"));
const ProfilePage = React.lazy(() => import("../pages/admin/Profile/ProfilePage"));

const RegistrationPage = React.lazy(() => import("../pages/admin/Registration/RegistrationPage"));
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
        <Route path="/" element={<HomePage />} />
        <Route path="/auto" element={<AutoPage />} />
        <Route path="/realty" element={<RealtyPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/fashion-style-beauty" element={<FashionStyleBeautyPage />} />
        <Route path="/childrens-products" element={<ChildrensProductsPage />} />
        <Route path="/house-garden" element={<HouseGardenPage />} />
        <Route path="/job" element={<JobPage />} />
        <Route path="/pet" element={<PetPage />} />
        <Route path="/entertainment-and-hobbies" element={<EntertainmentAndHobbiesPage />} />
        <Route path="/sports-equipment" element={<SportsEquipmentPage />} />
        <Route path="/electronic" element={<ElectronicPage />} />
        <Route path="/everything-for-business" element={<EverythingForBusinessPage />} />
        <Route path="/new-account" element={<RegistrationPage />} />

        {/* Админские страницы */}
        <Route path="/admin/home" element={token ? <AdminHomePage /> : <Navigate to="/login" />} />
        <Route path="/admin/create/advert" element={token ? <CreateAdvertPage /> : <Navigate to="/login" />} />
        <Route path="/admin/myprofile" element={token ? <ProfilePage /> : <Navigate to="/login" />} />

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
