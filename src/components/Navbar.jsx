import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Chakbandi</Link>
        <div className="space-x-6">
          <Link to="/home" className="hover:text-blue-300">Home</Link>
          <Link to="/about" className="hover:text-blue-300">About</Link>
          <Link to="/login" className="hover:text-blue-300">Login</Link>
          <Link to="/signup" className="hover:text-blue-300">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;