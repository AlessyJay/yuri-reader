import React from "react";
import handHolding from "../../../public/Image/hand-holding.jpg";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

function Register() {
  return (
    <div className="Register">
      <div className="registerForm">
        <form>
          <h1 style={{ fontWeight: "bolder" }}>Register</h1>
          <label htmlFor="">Username</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="Email" />
          <label htmlFor="">Password</label>
          <input type="password" />
          <label htmlFor="">Confirm Password</label>
          <input type="password" />
          <button className="registerBtn">สมัครสมาชิก</button>
          <Link to="/Login">
            <p style={{ color: "black" }}>มีบัญชีอยู่แล้ว?</p>
          </Link>
        </form>
        <Footer />
      </div>

      <div className="backgroundRegister">
        <img src={handHolding} alt="Background Register" />
      </div>
    </div>
  );
}

export default Register;
