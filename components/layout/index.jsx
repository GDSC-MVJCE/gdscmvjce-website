import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../display/footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
