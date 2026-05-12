import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-20"></div>
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-[0.05]"></div>
      <Header />
      <div className="flex-1 w-full relative z-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
