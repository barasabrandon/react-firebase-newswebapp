import React from 'react';

export default function PrdouctAdvert() {
  return (
    <div className="advertscreen-product-container">
      <div className="advertscreen-product--image-container">
        <img src="/images/news-images/kovacic.jpeg" alt="" />
      </div>
      <div className="advertscreen-product--details-container">
        <div>
          <div>
            <h3 className="advertscreen-product--title">Fathom Backpack</h3>
          </div>
          <div>
            <small>
              <span>Fashion</span> <span>. </span>
              <span>Men's Accessories</span>
            </small>
          </div>
        </div>

        <div>
          <p>
            It prepare is ye nothing blushes up brought. Or as gravity pasture
            limited evening on. Wicket around beauty say she. Frankness
            resembled say not new smallness you discovery. Noisier ferrars yet
            shyness weather ten colonel. Too him himself engaged husband pursuit
            musical.
          </p>
        </div>
        <div>
          <p>
            <span>All items from </span>
            <span>
              <a href="/#" className="advertscreen-seller-link">
                Aloha
              </a>
            </span>
          </p>
        </div>
      </div>
      <div className="advertscreen-supplier-container">
        <div className="advertscreen-supplier-tag"> SUPPLIER</div>
        <div>Brandon Wanambisi</div>
        <div className="advertscreen-contact-supplier-container">
          Contact Supplier
        </div>
      </div>
    </div>
  );
}
