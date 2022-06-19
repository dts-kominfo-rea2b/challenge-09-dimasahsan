// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import './Header.css'

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="title">Call A Friend</h1>
      <h3 className="subtitle">your friendly contact app</h3>
    </div>
  );
};

export default Header;
