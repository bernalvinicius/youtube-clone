import React from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Apps from '@material-ui/icons/Apps';
import InputBase from '@material-ui/core/InputBase';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import youtube from '../../../assets/images/youtube.png';
import { useStyles } from './styles';

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuIcon}>
            <MenuIcon />
          </IconButton>
          <img alt='youtube' src={youtube} className={classes.logo} />
          <div className={classes.grow} />
          <div className={classes.search}>
            {/* <div className={classes.searchIcon}>
              <SearchIcon />
            </div> */}
            <InputBase
              placeholder="Pesquisar..."
              className={classes.inputSearch}
            />
            <Button className={classes.buttonSearch} startIcon={<SearchIcon />} variant="outlined" />
          </div>
          <div className={classes.grow} />
          <IconButton color="inherit" className={classes.icons}>
            <VideoCall />
          </IconButton>
          <IconButton color="inherit" className={classes.icons}>
            <Apps />
          </IconButton>
          <IconButton color="inherit" className={classes.icons}>
            <MoreVert />
          </IconButton>
          <Button
            startIcon={<AccountCircle />}
            variant="outlined"
            className={classes.btnLogin}>
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
