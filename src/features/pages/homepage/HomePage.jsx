import React, { Component } from 'react';
import './styles.scss';
import Header from 'features/components/header';
import Main from 'features/components/main';
import NavBar from 'features/components/navbar';

import { searchVideosGet } from '../../../api';

class HomePage extends Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    searchVideosGet('reactjs').then((response) => {
      this.setState({
        videos: response.data.items,
      });
    });
  }

  render() {
    const { videos } = this.state;
    return (
      <div>
        <Header />
        <div className="nav-main">
          <NavBar />
          <Main videos={videos} />
        </div>
      </div>
    );
  }
}

export default HomePage;
