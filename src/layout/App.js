import React, { Component } from 'react';
import '../styles/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import Header from './Header';
import SideNav from './SideNav';
import Page from './Page';
import Footer from './Footer';
import { AppProvider } from '../context/AppProvider';

class App extends Component {
  state = {
    currentCity: '',
  }

  render() {
    return (
      <div className="App">

        <AppProvider>
          <Router>
            <div className="container">
              <header className="headerLayout">
                <nav><Navigation /></nav>
                <Header />
              </header>
              <aside className="sideNavLayout">
                <SideNav />
              </aside>
              <main className="mainLayout">
                <Page />
              </main>
              <footer>
                <Footer />
              </footer>
            </div>
          </Router>
        </AppProvider>
      </div>

    );
  }
}

export default App;

