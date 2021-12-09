import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="menu">
        <Link to="/">
          <h1 className="yuri">Yuri Reader</h1>
        </Link>
        <div className="nevigate">
          <Link to="/About">
            <h1>เกี่ยวกับเรา</h1>
          </Link>

          <Link to="/Works">
            <h1>งานแปล</h1>
          </Link>

          <Link to="/Register">
            <h1>สมัครสมาชิก</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
