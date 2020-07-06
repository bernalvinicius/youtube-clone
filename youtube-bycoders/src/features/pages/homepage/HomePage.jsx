import React, { Component } from 'react';
import './styles.scss';
import NavBar from 'features/components/navbar/NavBar';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <NavBar />
      </div>
    )
  }
}

export default HomePage;
