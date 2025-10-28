import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './Components/ThemeToggle/ThemeToggle';

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Main />
        <Footer />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;
