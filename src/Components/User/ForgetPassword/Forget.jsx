import React from "react";
import backgroundForget from "../../../public/Image/598762.jpg";
import Footer from "../../Footer/Footer";

function Forget() {
  return (
    <div>
      <div className="loginForm">
        <form>
          <h1 style={{ fontWeight: "bolder" }}>ลืมรหัสผ่าน</h1>
          <label htmlFor="">Email</label>
          <input type="email" />
          <button className="registerBtn">ตั้งค่ารหัสผ่านใหม่</button>
        </form>
        <Footer />
      </div>

      <div className="backgroundRegister">
        <img src={backgroundForget} alt="Background Forget Password" />
      </div>
    </div>
  );
}

export default Forget;
