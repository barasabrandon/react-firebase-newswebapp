import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PodcastItem({ doc, subCollectionId, category }) {
  const navigate = useNavigate();
  const data = doc.data();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(
      `/podcasts/${category}/${subCollectionId}/${data.title}/${doc.id}`
    );
  };

  return (
    <div
      className="podcast-screen-container-item-content"
      onClick={handleClick}
    >
      <div className="podcast-screen-container-item-content-img">
        <img src={data.imgUrl} alt={data.title} />
      </div>
      <div className="podcast-screen-container-item-content-text">
        <p className="podcast-screen-title">{data.title}</p>
        <p>
          <span>{data.periodDays} </span>
          <span>{data.periodTime}</span>
        </p>
      </div>
    </div>
  );
}
