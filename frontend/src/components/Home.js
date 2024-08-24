import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactTyped as Typed } from 'react-typed'; // Correct import for react-typed
import './Home.css'; // Import the CSS file where you'll define the styles
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import SlideShow from './SlideShow';

const Home = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/topics');
      setTopics(res.data.reverse());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
       <div>  
      <SlideShow />
      </div>
      {/* YouTube Video */}
      <div className="youtube-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Um-bo2MWDsQ?si=Kt7CHFNSgFv4qeOz"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Typewriter Effect */}
      <div className="typewriter-container">
        <Typed
          strings={[
            "We believe in the progress of agriculture in Nigeria",
            "We believe in independent farmers",
            "We believe in the FUTURE",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </div>

      {/* Blog Posts */}
      <div className="post-container">
        <h1 className='centered-div'>Post</h1>
        <div className="post-list">
          {topics.map((topic) => (
            <Link to={`/topic/${topic._id}`} key={topic._id} className="post-link">
              <div className="post">
                <h3>{topic.title}</h3>
                {topic.imageUrl && (
                  <img src={`http://localhost:5000${topic.imageUrl}`} alt={topic.title} />
                )}
                <p>{topic.body}</p>
                <p className="post-date">Created at: {new Date(topic.createdAt).toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
