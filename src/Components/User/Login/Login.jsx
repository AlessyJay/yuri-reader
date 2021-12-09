import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import backgroundLogin from "../../../public/Image/anime-yuri-wallpaper-hd-13.jpg";

function Login() {
  return (
    <div>
      <div className="loginForm">
        <form>
          <h1 style={{ fontWeight: "bolder" }}>Login</h1>
          <label htmlFor="">Username</label>
          <input type="username" />
          <label htmlFor="">Password</label>
          <input type="password" />
          <button className="registerBtn">เข้าสู่ระบบ</button>
          <Link to="/Register">
            <p style={{ color: "black" }}>ยังไม่มีบัญชี?</p>
          </Link>
          <Link to="/Forget">
            <p style={{ color: "black" }}>ลืมรหัสผ่าน?</p>
          </Link>
        </form>
        <Footer />
      </div>

      <div className="backgroundRegister">
        <img src={backgroundLogin} alt="Background Register" />
      </div>
    </div>
  );
}

export default Login;
