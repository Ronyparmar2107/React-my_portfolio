import React from 'react';

import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import Resume from './Pages/Resume/Resume';
import Navbar from './Components/Navbar/Navbar'

function App() {
  console.log('Eve')
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />

    </div>
  );
}

export default App;
