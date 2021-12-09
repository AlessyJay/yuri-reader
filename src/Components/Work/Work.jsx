import React from "react";
import background3 from "../../public/Image/Wallpaper-Genshin-Impact-Yuri-1920x1080px-1080p-Free-Do35.jpg";
import Card from "./Card";
import { Data } from "../../Service/Data";

function Work() {
  return (
    <div className="Work">
      <div className="Search">
        <div className="SearchContent">
          <input
            type="text"
            style={{
              marginRight: "5%",
              color: "white",
              borderBottom: "solid white 2px",
            }}
          />
          <button>ค้นหา</button>
        </div>
      </div>

      <div className="workflows">
        {Data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      <div className="pagination">
        <button id="previous">หน้าที่แล้ว</button>
        <h1>1 / ...</h1>
        <button id="next">หน้าต่อไป</button>
      </div>

      <h4 style={{ color: "white" }} className="copyright">
        Copyright © Tony Crimson 2022
      </h4>

      <div className="background3">
        <img src={background3} alt="Background 3" />
      </div>
    </div>
  );
}

export default Work;
