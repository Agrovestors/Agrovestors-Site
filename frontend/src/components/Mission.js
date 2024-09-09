import React from 'react';
import './Mission.css'; // Adjust CSS filename if needed

const Mission = () => {
  return (
    <div className="mission-container">
      <h2>Our Mission</h2>
      
      {/* YouTube Video Section */}
      <div className="youtube-video">
        <iframe
          width="100%" // Full width for responsiveness
          height="800px" // Increased height for a larger video
          src="https://www.youtube.com/embed/VA3zPuXt3Bw?si=XKBBe_Z0HC_Cq7sJ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Mission Text */}
      <div className="mission-text">
        <h2>Our Vision</h2>
        <p>
          We lead the charge in sustainable agribusiness solutions, global food security, and cost control.
          Our vision is ambitious and borderless.
        </p>
        <p>
          We aim to be the unrivaled global leader in agro-network excellence, 
          spearheading investment, digital mechanization, and e-commerce solutions.
          Making it cheaper… making it better… making it faster!
        </p>
      </div>

      {/* Legacy Section */}
      <div className="mission-text">
        <h2>Our Legacy</h2>
        <p>
          We envision a legacy that stands the test of time—a legacy rooted in innovation, 
          technology, collaboration, and sustainable growth. A profound legacy to be remembered 
          as the pioneers who transformed agriculture, in Africa.
        </p>
        <h3>Championing Sustainable Agribusiness Solutions</h3>
        <p>
          Our commitment to sustainability goes beyond mere words; it is embedded in our actions.
        </p>
        <h3>Creating a Thriving Technological Ecosystem</h3>
        <p>
          A collaborative network of investors, visionaries, and communities to foster a vibrant, 
          technology-driven agricultural ecosystem, will empower farmers with the knowledge and 
          tools needed to maximize productivity and sustainability.
        </p>
        <h3>Global Leadership and Boundless Innovation</h3>
        <p>
          By embracing innovation and technology, we break down barriers and create a 
          streamlined vehicle for agricultural progress. Our commitment to quality and efficiency 
          ensures that all stakeholders benefit from our advancements, fostering a global agricultural renaissance.
        </p>
        <h3>Building a Future of Prosperity</h3>
        <p>
          A future where technology and tradition coexist harmoniously, ensuring that agricultural 
          practices are both productive and environmentally responsible.
        </p>
      </div>
    </div>
  );
};

export default Mission;
