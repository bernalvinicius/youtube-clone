import {
  Box,
  Toolbar,
  Divider,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import FilterList from '@material-ui/icons/FilterList';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { searchVideosGet } from '../../../api/index';
import Header from '../../components/header';
import NavBar from '../../components/navbar';
import { useStyles } from './styles';

const Results = () => {
  const location = useLocation();
  const classes = useStyles();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    searchVideosGet(location.state).then((response) => {
      setVideos(response.data.items);
    });
  });

  return (
    <div>
      <Header />
      <div className={classes.navMain}>
        <NavBar />
        <Box p={4}>
          <Toolbar />
          <div className={classes.filter}>
            <FilterList className={classes.filterIcon} />
            <h3>Filtro</h3>
          </div>
          <Divider />
          <List>
            {videos.map((item, index) => (
              <Link to={{ pathname: '/watch', state: item }}>
                <ListItem className={classes.listItem} key={index}>
                  <Box>
                    <img
                      className={classes.thumb}
                      style={{ width: '100%', maxWidth: '300px' }}
                      alt={item.snippet.title}
                      src={item.snippet.thumbnails.high.url}
                    />
                  </Box>
                  <Box className={classes.boxTextVideos}>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant="body1"
                      color="textPrimary">
                      {item.snippet.title}
                    </Typography>
                    <Typography
                      display="block"
                      variant="body2"
                      color="textSecondary">
                      {item.snippet.channelTitle}
                    </Typography>
                    <Typography
                      className={classes.description}
                      display="block"
                      variant="body2"
                      color="textSecondary">
                      {item.snippet.description}
                    </Typography>
                  </Box>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </div>
    </div>
  );
};

export default Results;
