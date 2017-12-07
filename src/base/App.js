import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/ionicons/dist/css/ionicons.min.css';
import '../../node_modules/bootstrap-daterangepicker/daterangepicker.css';
import '../../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import '../../node_modules/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css';

import Header from './theme/Header';
import Sidebar from './theme/Sidebar';
import Content from './theme/Content';
import Footer from './theme/Footer';

class App extends Component {

  componentDidMount() {
    const script = document.createElement('script');
    script.src = process.env.PUBLIC_URL +   "/app/js/adminlte.min.js";
    console.log(script.src);
    script.async = true;
    document.body.appendChild(script);
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
