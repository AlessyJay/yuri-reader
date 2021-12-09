import React from "react";
import Footer from "../Footer/Footer";
import mainBackground from "../../public/Image/hoftw-art-02-1920x1080-1.jpg";

function Home() {
  return (
    <div className="container">
      <div className="mainDetail">
        <h1>ยินดีต้อนรับเข้าสู่สังคมคนชอบอ่านยูริ</h1>
        <p>
          เว็บไซต์นี้ถูกสร้างขึ้นเพื่อลงงานแปลยูริเท่านั้นและเรา
          <strong>
            <u>ไม่แสวงหาผลกำไร</u>
          </strong>
          จากงานแปลทุกหน้า
        </p>
      </div>
      <Footer />

      <div className="background">
        <img src={mainBackground} className="mainBackground" />
      </div>
    </div>
  );
}

export default Home;
