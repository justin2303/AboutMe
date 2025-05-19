import './App.css';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'; // import BrowserRouter
import {useEffect} from 'react';
import AboutMe from './details/aboutme';
import MyProjects from './details/project';
import HireMe from './details/hireme';
import Contact from './details/contact';

const preloadAssets = () => {
  const images = [
    '/thinkingsprite.png',
    '/botsprite.png',
    '/eurekasprite.png',
    '/transparent brain.png',
    '/61e Web Demo.mp4',
    '/61e app demo.mp4',
    '/I&E battlesim.mp4',
    '/Maze AI demo.mp4',    // Add more paths to images or fonts you use
];

  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const App = () => {
 useEffect(() => {
    preloadAssets();
 }, []); 
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
