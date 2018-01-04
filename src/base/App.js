import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'ionicons/dist/css/ionicons.min.css';
import './theme/css/AdminLTE.css';    
import './theme/css/skin/_all-skins.min.css';

import Header from './theme/header/Header';
import Sidebar from './theme/sidebar/Sidebar';
import Content from './theme/content/Content';
import Footer from './theme/footer/Footer';

class App extends Component {

  componentDidMount() {
    //this.addScriptMain();
    //this.addStyleMain();
  }

  addScriptMain() {
    const script = document.createElement('script');
    script.src = process.env.PUBLIC_URL +   "/app/js/adminlte.js";
    script.async = true;
    document.body.appendChild(script);
  }

  addStyleMain() {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = process.env.PUBLIC_URL +   "/app/css/AdminLTE.min.css";
    document.head.appendChild(style);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <Sidebar />
          <Content />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
