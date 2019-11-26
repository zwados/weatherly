import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './layout/App';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/breakpoints.scss';
AOS.init();

ReactDOM.render(<App />, document.getElementById('root'));

