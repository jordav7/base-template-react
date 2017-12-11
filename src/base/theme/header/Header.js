import React, { Component } from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderNavBar from './HeaderNavBar';

export default class Header extends Component {
  render() {
    return (
        <header className="main-header">
          <HeaderLogo />
          <HeaderNavBar />
        </header>
    )
  }
}
