import React, { Component } from 'react';
import './styles.scss';
import Header from 'features/components/header/Header';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Header />
      </div>
    )
  }
}

export default HomePage;
