import React from "react";
import Footer from "../Footer/Footer";
import Yuri from "../../public/Image/yuri.jpg";

function About() {
  return (
    <div className="About">
      <div className="container">
        <div className="aboutDetail">
          <h2>
            สวัสดีครับ ผมชื่อ ต้น นะครับ
            จุดประสงค์ที่ผมทำเว็บไซต์นี้ขึ้นมาก็เพื่อที่จะเป็นพื้นที่
            <br />
            เอาไว้โพสงานการแปลมังงะหรือโดจินยูริของผมเท่านั้นโดยที่ผมจะ
            <u>ไม่แสวงหาผลกำไร</u>เลยจากงานแปลเหล่านี้แม้แต่บาทเดียวครับ
            <br />
          </h2>
        </div>
      </div>

      <Footer />

      <div className="background2">
        <img src={Yuri} alt="Yuri background" />
      </div>
    </div>
  );
}

export default About;
