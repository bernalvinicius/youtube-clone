import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import Apps from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVert from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import VideoCall from '@material-ui/icons/VideoCall';
import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Link } from 'react-router-dom';

import credentials from '../../../api/credentials.json';
import youtube from '../../../assets/images/youtube.png';
import { useStyles } from './styles';

const Header = () => {
  const [searchVideo, setSearchVideo] = useState('');
  const [isLoged, setIsLoged] = useState(false);
  const [access_Token, setAccess_Token] = useState('');
  const [userSearch, setUserSearch] = useState([]);

  const responseGoogleLogin = (response) => {
    if (response.accessToken) {
      setIsLoged(true);
      setAccess_Token(response.accessToken);
    }
  };

  const showUserSearch = (search) => {
    // console.log(search);
    // setUserSearch((auxArray) => [...auxArray, search]);
    // console.log('aaa: ', userSearch);
  };

  const responseGoogleLogout = () => {
    setIsLoged(false);
    setAccess_Token('');
  };

  const handleLoginFailure = () => {
    alert('Falha ao fazer login.');
  };

  const handleLogoutFailure = () => {
    alert('Falha ao fazer logout.');
  };

  const classes = useStyles();
  // console.log('bbb: ', setUserSearch);

  return (
    <div>
      <AppBar color="inherit" className={classes.appBar}>
        {/* <div>{userSearch.map(entry =>
          <div>{entry}</div>
        )} */}
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuIcon}>
            <MenuIcon />
          </IconButton>
          <Link to={{ pathname: '/' }}>
            <img alt="youtube" src={youtube} className={classes.logo} />
          </Link>
          <div className={classes.grow} />
          <form className={classes.search}>
            <InputBase
              onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
              onChange={(event) => setSearchVideo(event.target.value)}
              placeholder="Pesquisar..."
              className={classes.inputSearch}
            />
            <Link to={{ pathname: '/results', state: searchVideo }}>
              <Button
                className={classes.buttonSearch}
                startIcon={<SearchIcon />}
                variant="outlined"
                onClick={() => showUserSearch(searchVideo)}
              />
            </Link>
          </form>
          <div className={classes.grow} />
          <IconButton color="inherit">
            <VideoCall />
          </IconButton>
          <IconButton color="inherit">
            <Apps />
          </IconButton>
          <IconButton color="inherit">
            <MoreVert />
          </IconButton>
          {isLoged ? (
            <GoogleLogout
              clientId={credentials[0].web.client_id}
              buttonText="Logout"
              onLogoutSuccess={responseGoogleLogout}
              onFailure={handleLogoutFailure}
            />
          ) : (
              <GoogleLogin
                clientId={credentials[0].web.client_id}
                buttonText="Fazer Login"
                onSuccess={responseGoogleLogin}
                onFailure={handleLoginFailure}
                cookiePolicy="single_host_origin"
              />
            )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
