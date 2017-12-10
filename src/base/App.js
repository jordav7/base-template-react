import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'ionicons/dist/css/ionicons.min.css';
import './theme/css/AdminLTE.min.css';    
import './theme/css/skin/_all-skins.min.css';

import Header from './theme/Header';
import Sidebar from './theme/Sidebar';
import Content from './theme/Content';
import Footer from './theme/Footer';

class App extends Component {

  componentDidMount() {
    this.addScriptMain();
    //this.addStyleMain();
  }

  addScriptMain() {
    const script = document.createElement('script');
    script.src = process.env.PUBLIC_URL +   "/app/js/adminlte.min.js";
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
      <div className="wrapper">
        <Header />
        <Sidebar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
