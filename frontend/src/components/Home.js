import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactTyped as Typed } from 'react-typed';
import './Home.css'; // Make sure to adjust styles as needed
import { Link } from 'react-router-dom';
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
      {/* SlideShow Component */}
      <div>
        <SlideShow />
      </div>

      {/* YouTube Video Section */}
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

      {/* Agrovestors Mission Section */}
      <section className="agrovestors-mission">
        <h2>Agrovestors Farm-Tech's Mission</h2>

        <p className="intro-text">
          Agriculture in Africa faces numerous challenges that threaten food security and sustainability. Low productivity, pests, diseases, and climate change are just a few of the issues farmers face. Many work in isolation, lack access to modern tools, and face high production costs, all of which hinder progress.
        </p>

        <p className="intro-text">
          Agrovestors Farm-Tech is committed to addressing these issues through a transformative 4-Goal Agenda aimed at improving agricultural productivity and creating a better future for African farmers:
        </p>

        <div className="goal-section">
          <h3>1. Leveraging Technology, Research, and Innovation</h3>
          <p>
            We aim to boost agricultural productivity and resilience using cutting-edge technology like IoT devices, AI-driven analytics, and precision agriculture tools. Our goal is to optimize farming practices and improve decision-making, enabling farmers to overcome issues such as climate change and low productivity.
          </p>
        </div>

        <div className="goal-section">
          <h3>2. Creating a Community of Agro-Visionaries</h3>
          <p>
            By building online agro-tech centers, we foster a cooperative network of farmers, tech professionals, and researchers. This united community encourages knowledge sharing and innovation, dismantling the isolation that many farmers face and creating a supportive environment for agricultural advancement.
          </p>
        </div>

        <div className="goal-section">
          <h3>3. Providing Agro-Based Education and Training Opportunities</h3>
          <p>
            Education is at the heart of empowering farmers. We offer accredited training programs, practical sessions, and educational materials in collaboration with agricultural universities. Our goal is to close the skill gaps and enable farmers to adopt sustainable and modern farming practices.
          </p>
        </div>

        <div className="goal-section">
          <h3>4. Reducing Expenses and Prioritizing Quality</h3>
          <p>
            To help farmers reduce production costs while maintaining high-quality output, we establish cooperatives for bulk buying and employ precision farming methods. Through optimized resource use and strict quality control, farmers can become more competitive in the market.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <div className="post-container">
        <h1 className="centered-div">Latest Posts</h1>
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
