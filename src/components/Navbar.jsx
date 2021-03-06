import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';


const Navbar = () => {
  // const [darkMode, setDarkMode] = useState(false); (initial hook commented out here)
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    console.log('dark-mode state', darkMode)
  };
  return (
    <nav className="navbar" id='test'>
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
