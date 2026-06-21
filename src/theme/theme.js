import { createTheme } from '@mui/material/styles';

// Warm earth tones – perfect for a B&B
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5d4037',
      light: '#8d6e63',
      dark: '#3e2723',
    },
    secondary: {
      main: '#bf8f4a',
      light: '#d4a86a',
      dark: '#9c6f2a',
    },
    background: {
      default: '#fdf8f0',
      paper: '#ffffff',
    },
    text: {
      primary: '#2d2a24',
      secondary: '#5a5248',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: { fontFamily: '"Playfair Display", serif' },
    h2: { fontFamily: '"Playfair Display", serif' },
    h3: { fontFamily: '"Playfair Display", serif' },
    h4: { fontFamily: '"Playfair Display", serif' },
    h5: { fontFamily: '"Playfair Display", serif' },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8d6e63',
      light: '#a1887f',
      dark: '#5d4037',
    },
    secondary: {
      main: '#d4a86a',
      light: '#e0c08a',
      dark: '#bf8f4a',
    },
    background: {
      default: '#1c1814',
      paper: '#2a2420',
    },
    text: {
      primary: '#f0ebe4',
      secondary: '#b8ae9e',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: { fontFamily: '"Playfair Display", serif' },
    h2: { fontFamily: '"Playfair Display", serif' },
    h3: { fontFamily: '"Playfair Display", serif' },
    h4: { fontFamily: '"Playfair Display", serif' },
    h5: { fontFamily: '"Playfair Display", serif' },
  },
});

export { lightTheme, darkTheme };