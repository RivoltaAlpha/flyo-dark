import React from 'react';
import Header from './components/header/header';
import MainContent from './components/main/main';
import Footer from './components/footer/footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-darkBlue text-white">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
