import React from 'react';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="flex justify-between items-center p-6">
      <div className="text-xl font-bold">Fylo</div>
      <nav className="space-x-6">
        <a href="#features" className="hover:text-lightCyan">Features</a>
        <a href="#team" className="hover:text-lightCyan">Team</a>
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={signOut} className="hover:text-lightCyan">Sign Out</button>
          </>
        ) : (
          <a href="#sign-in" className="hover:text-lightCyan">Sign In</a>
        )}
      </nav>
    </header>
  );
};

export default Header;
