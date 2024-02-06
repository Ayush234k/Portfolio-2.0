import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Banner from './Pages/Banner';
import Skills from './Pages/Skills';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
      <Navbar />
            <Routes>
                <Route path="/" element={ <Banner/> }/>
                <Route path="/skills" element={ <Skills/> }/>
                <Route path="/projects" element={ <Projects/> }/>
                <Route path="/about" element={ <About/> }/>
                <Route path="/contact" element={ <Contact/> }/>
                <Route path="*" element={<NotFound />} />
            </Routes>
    </> 
  );
}

export default App;