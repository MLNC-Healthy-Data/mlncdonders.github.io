import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ThemeContext } from '../../context/ThemeContext';

const DarkModeSwitch = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <IconButton onClick={toggleDarkMode} color="inherit">
      {darkMode ? (
        <Brightness4 sx={{ fontSize: 30,color:'black' }} /> 
      ) : (
        <Brightness7 sx={{ fontSize: 30 }} /> 
      )}
    </IconButton>
  );
};

export default DarkModeSwitch;
