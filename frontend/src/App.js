import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Write from './components/Write';
import Mission from './components/Mission';
import Contact from './components/Contact'; // Imported Contact component
import About from './components/About';
import EmployeePage from './components/EmployeePage';
import TopicDetail from './components/TopicDetail'; // Import TopicDetail
import AfTech from './components/AfTech'; // Update import to PascalCase
import Values from './components/Values'; // Correct import path and name

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/contact" element={<Contact />} /> {/* Use the imported Contact component */}
          <Route path="/about" element={<About />} />
          <Route path="/employees" element={<EmployeePage />} />
          <Route path="/AfTech" element={<AfTech />} /> {/* Route for AfTech */}
          <Route path="/Values" element={<Values />} /> {/* Route for Values */}
          <Route path="/topic/:id" element={<TopicDetail />} /> {/* Route for TopicDetail */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
