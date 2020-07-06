import React, { Component } from 'react';
import './styles.scss';
import Header from 'features/components/header';
import NavBar from 'features/components/navbar';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Header />
        <NavBar />
      </div>
    )
  }
}

export default HomePage;
