import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import WebShowcase from './components/WebShowcase/WebShowcase';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';  

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WebShowcase /> 
      <Contact /> 
      <Footer />
    </div>
  );
}
