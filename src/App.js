import './App.css';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'; // import BrowserRouter

import AboutMe from './details/aboutme';

const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        {/* Default route: redirect to /login */}
        <Route path="/" element={<Navigate to="/AboutMe" />} />
        <Route path="/AboutMe" element={<AboutMe />} />
      </Routes>
    </BrowserRouter> 
  );
};

export default App;
