// src/components/AppLayout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AppLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 pt-5">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
