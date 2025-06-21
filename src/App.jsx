import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works } from './components';
import AchievementsPage from './components/Achievements';
import Footer from './components/Footer';
const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <AchievementsPage/>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
