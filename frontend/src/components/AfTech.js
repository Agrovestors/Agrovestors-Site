import React from 'react';
import './AfTech.css'; // Adjust CSS filename if needed
import ceoImage from './1.jpg'; // Replace with the actual path to the CEO's image

const AfTech = () => {
  return (
    <div>
      {/* YouTube Video Section */}
      <div className="youtube-video">
        <iframe
          width="100%" // Full width for responsiveness
          height="800px" // Increased height for a larger video
          src="https://www.youtube.com/embed/KWHc8TyGg9I"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Inspirational Text Section with CEO's Image */}
      <div className="inspirational-container">
        <img src={ceoImage} alt="CEO" className="ceo-image" />
        <div className="inspirational-text">
          <p>
            “I always wonder to myself, what will the future of agriculture in Africa look like? A future where food is abundant, where even the beggars on the streets are filled up and happy for their daily bread. Imagine a world where every harvest is bountiful, every business flourishes, and our practices ensure a sustainable future for generations to come.
          </p>
          <p>
            I dream where farmers, innovators, technologists and researchers all over Africa become a community to revolutionize agriculture and foster economic growth.
          </p>
          <p>
            This is the dream of Agrovestors Farm-Tech”
          </p>
          <p>
            <strong>Mr. Stephen Onyewuenyi</strong><br />
           CEO, Agrovestors
            </p>
        </div>
      </div>
    </div>
  );
};

export default AfTech;
