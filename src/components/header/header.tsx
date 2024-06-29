import React from 'react';

const Header: React.FC = () => (
  <header className="flex justify-between items-center py-4 px-6">
    <div className="logo">
      <img src="./images/logo.svg" alt="Fylo logo" className="h-8" />
    </div>
    <nav>
      <ul className="flex space-x-6">
        <li><a href="#features" className="hover:text-teal-400">Features</a></li>
        <li><a href="#team" className="hover:text-teal-400">Team</a></li>
        <li><a href="#signin" className="hover:text-teal-400">Sign In</a></li>
      </ul>
    </nav>
  </header>
);
export default Header;