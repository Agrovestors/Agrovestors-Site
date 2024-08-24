import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TopicDetail = () => {
  const [topic, setTopic] = useState(null);
  const { id } = useParams(); // Get the topic ID from the URL

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/topics/${id}`);
        setTopic(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTopic();
  }, [id]);

  if (!topic) return <p>Loading...</p>;

  return (
    <div>
      <h2>{topic.title}</h2>
      {topic.imageUrl && <img src={topic.imageUrl} alt={topic.title} style={{ width: '300px' }} />}
      <p>{topic.body}</p>
      <p>Created at: {new Date(topic.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default TopicDetail;
