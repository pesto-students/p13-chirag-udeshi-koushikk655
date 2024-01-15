// ThemeSwitcher.js
import React, { useContext } from 'react';
import { ThemeContext } from './../App';

const ThemeSwitcher = ({ setTheme }) => {
  const theme = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{background:'#ccc', margin:'20px', padding:'10px'}}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
