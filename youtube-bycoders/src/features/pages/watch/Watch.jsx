import { Box, Toolbar, Grid, Typography, Divider } from '@material-ui/core';
import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/header';
import { useStyles } from './styles';

const Watch = () => {
  const location = useLocation();
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Box p={8}>
        <Toolbar />
        <Grid container spacing={6}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Box>
              <iframe
                id="player"
                type="text/html"
                width="900"
                height="500"
                src={`http://www.youtube.com/embed/${location.state.id.videoId}`}
                frameBorder="0"
                allowFullScreen
              />
              <Box>
                <Box>
                  <Typography
                    style={{ fontWeight: 600 }}
                    gutterBottom
                    variant="body1"
                    color="textPrimary">
                    {location.state.snippet.title}
                  </Typography>
                </Box>
                <Divider />
                <Toolbar />
                <Box className={classes.informationsVideo}>
                  <Typography
                    style={{ fontWeight: 600 }}
                    variant="body1"
                    color="textPrimary">
                    {location.state.snippet.channelTitle}
                  </Typography>
                  <Typography
                    className={classes.description}
                    display="block"
                    variant="body2"
                    color="textSecondary">
                    {location.state.snippet.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box>
              <Typography
                style={{ fontWeight: 600 }}
                variant="body2"
                color="textSecondary">
                Próximo
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Watch;
