import React, { Component } from 'react';
import '../styles/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import Header from './Header';
import Page from './Page';
import Footer from './Footer';
import { AppProvider } from '../context/AppProvider';

class App extends Component {
  state = {
    currentCity: '',
  }

  render() {
    return (
      <Router>
        <div className="App">
          <AppProvider>
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
          </AppProvider>
        </div>
      </Router>
    );
  }
}

export default App;

