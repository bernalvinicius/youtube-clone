import { Box, Toolbar, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Main = ({ videos = [] }) => {
  return (
    <div>
      <Box p={4}>
        <Toolbar />
        <h3>Recomendados</h3>
        <Grid container spacing={4}>
          {videos.map((item, index) => (
            <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
              <Link to={{ pathname: '/watch', state: item }}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.snippet.title}
                    src={item.snippet.thumbnails.high.url}
                  />
                  <Box>
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
                  </Box>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Main;
