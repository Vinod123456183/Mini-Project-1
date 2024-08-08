import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Article from './Components/Article';
import Cta from './Components/Cta';
import Feature from './Components/Feature'; // Import Feature component
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import CaseStudies from './Components/CaseStudies';

import './Styles/Footer.scss';
import './Styles/Article.scss';
import './Styles/Cta.scss';
import './Styles/Feature.scss'; 
import './Styles/Navbar.scss';
import './Styles/Home.scss';
import './Styles/CaseStudies.scss';
import './Styles/Main.scss';
import './Styles/Responsive.scss'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Feature />} /> Route for Feature component
        <Route path="/cta" element={<Cta />} />
        <Route path="/article" element={<Article />} />
        <Route path="/casestudies" element={<CaseStudies />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;