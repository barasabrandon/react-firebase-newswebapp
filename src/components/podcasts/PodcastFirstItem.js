import React from 'react';
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import { useNavigate } from 'react-router-dom';

export default function PodcastFirstItem() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(
      `/podcasts/LifeStyles/yvY5AaOn0NdWTJfcmcfE/Let's Talk/o9syfAe6QDOVEXibsu8a`
    );
  };
  return (
    <div className="podcast-first-item">
      <div>Podcasts</div>
      <div className="podcast-first-item-container">
        <div className="podcast-first-item-img-container">
          <img src="/images/news-images/kovacic.jpeg" alt="#Images" />
        </div>
        <div className="podcast-first-item-text-container">
          <div className="podcast-first-item-container-title-btn">
            Relationships
          </div>
          <div>
            <h3>THE TEE TALK</h3>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              voluptas necessitatibus sapiente pariatur maiores blanditiis ut,
              quis itaque esse nam ipsum earum molestiae sequi nihil sed cum
              dolorum laboriosam quod.
            </p>
          </div>
          <div>BY JEFF EVANS</div>
          <div
            className="podcast-first-item-container-listen-btn"
            onClick={handleClick}
          >
            <div> Listen Now</div>
            <div>
              <PlayArrowSharpIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
