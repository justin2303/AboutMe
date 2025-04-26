import './App.css';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'; // import BrowserRouter

import AboutMe from './details/aboutme';
import MyProjects from './details/project';
import HireMe from './details/hireme';
import Contact from './details/contact';
const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        {/* Default route: redirect to /login */}
        <Route path="/" element={<Navigate to="/AboutMe" />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/MyProjects" element={<MyProjects />} />
        <Route path="/WhyMe" element={<HireMe />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter> 
  );
};

export default App;
