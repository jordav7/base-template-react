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
