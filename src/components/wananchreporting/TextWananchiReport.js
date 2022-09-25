import React from 'react';
import { Link } from 'react-router-dom';

export default function TextWananchiReport({ itemData, docId }) {
  return (
    <>
      <div className="wananch-text">
        <div className="wananch-text-container">
          <div className="wananch-text-url-container">
            <img src={itemData.imgUrl} alt={itemData.category} />
          </div>
          <div className="wananch-text-description-container">
            <small>By newsApp Reporter</small>
            <Link
              to={`/news-page/${itemData.category}/${docId}`}
              className="wananch-text-link"
            >
              <p>{itemData.title}</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

// /:screen/:category/:id
