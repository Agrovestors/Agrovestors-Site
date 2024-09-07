import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Write from './components/Write';
import Mission from './components/Mission';
import About from './components/About';
import EmployeePage from './components/EmployeePage';
import TopicDetail from './components/TopicDetail'; // Import TopicDetail
import AfTech from './components/AfTech'; // Update import to PascalCase

const Contact = () => <h2>Contact Page</h2>;

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/employees" element={<EmployeePage />} />
          <Route path="/AfTech" element={<AfTech />} /> {/* Update route to PascalCase */}
          <Route path="/topic/:id" element={<TopicDetail />} /> {/* Topic details route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
