import React from "react";
import "./NationalNews.css";

function NationalNews() {
  return (
    <div className="national__news">
      {/* <h1>National News</h1> */}
      <div className="national__news__image">
        <img src="/images/news-images/kovacic.jpeg" alt="" />
      </div>
      <div className="national__news__content">
        <div className="national__news__header">
          <span className="national__news__header__button">National</span>
          <span>24 hours ago</span>
        </div>
        <div className="national__news__title">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iusto
            provident volupta
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            expedita, repellat fugiat odit veniam officia. Nulla laudantium
            repellat quibusdam nesciunt beatae sint veritatis officiis porro
            quas odio temporibus, minus eveniet?
          </p>
        </div>
      </div>
    </div>
  );
}

export default NationalNews;
