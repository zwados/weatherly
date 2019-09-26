import React from 'react';
import '../styles/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import Header from './Header';
import Page from './Page';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav><Navigation /></nav>
          <Header />
        </header>
        <main>
          <Page />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
