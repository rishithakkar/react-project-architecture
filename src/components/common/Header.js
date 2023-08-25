import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      Header Component
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

export default Header;
