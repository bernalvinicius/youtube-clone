import React, { Component } from 'react';
import './styles.scss';
import Header from 'features/components/header';
import NavBar from 'features/components/navbar';
import Main from 'features/components/main';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Header />
        <div className="nav-main">
          <NavBar />
          <Main />
        </div>
      </div>
    )
  }
}

export default HomePage;
