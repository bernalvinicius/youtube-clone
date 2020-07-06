import React from 'react';
import { Drawer, Toolbar, List, Divider, ListItem, ListItemIcon, ListItemText, ListSubheader, } from '@material-ui/core';
import { useStyles } from './styles';
import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import QueueMusic from '@material-ui/icons/QueueMusic';
import Sports from '@material-ui/icons/Sports';
import SportsEsports from '@material-ui/icons/SportsEsports';
import Theaters from '@material-ui/icons/Theaters';
import Receipt from '@material-ui/icons/Receipt';
import LiveTv from '@material-ui/icons/LiveTv';
import MovieCreation from '@material-ui/icons/MovieCreation';
import AddCircle from '@material-ui/icons/AddCircle';

function NavBar() {
  const classes = useStyles();
  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}>
        <Toolbar />
        <div>
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText classes={{
                primary: classes.listItemText
              }} primary={'Início'} />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon><Whatshot /></ListItemIcon>
              <ListItemText classes={{
                primary: classes.listItemText
              }} primary={'Em Alta'} />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon><Subscriptions /></ListItemIcon>
              <ListItemText classes={{
                primary: classes.listItemText
              }} primary={'Inscrições'} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon><VideoLibrary /></ListItemIcon>
              <ListItemText classes={{
                primary: classes.listItemText
              }} primary={'Biblioteca'} />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon><History /></ListItemIcon>
              <ListItemText classes={{
                primary: classes.listItemText
              }} primary={'Histórico'} />
            </ListItem>
          </List>
          <Divider />
          <List
            component='nav'
            aria-labelledby='nested-list-subheader'
            subheader={
              <ListSubheader
                component='div'
                id='nested-list-subheader'
                className={classes.subheader}
              >
                O Melhor do youtube
                  </ListSubheader>
            }
          >
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <QueueMusic />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Música'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <Sports />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Esportes'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <SportsEsports />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Jogos'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <Theaters />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Filmes'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <Receipt />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Notícias'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <LiveTv />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Ao vivo'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <MovieCreation />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Videos 360'}
              />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
}

export default NavBar;
