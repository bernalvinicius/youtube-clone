import React from 'react';
import { Box, Toolbar, Grid, Typography } from '@material-ui/core';
import thumb1 from '../../../assets/images/thumb1.png';
import thumb2 from '../../../assets/images/thumb2.png';
import thumb3 from '../../../assets/images/thumb3.png';
import thumb4 from '../../../assets/images/thumb4.png';
import thumb5 from '../../../assets/images/thumb5.png';
import thumb6 from '../../../assets/images/thumb6.png';
import thumb7 from '../../../assets/images/thumb7.png';
import thumb8 from '../../../assets/images/thumb8.png';
import avatar from '../../../assets/images/avatar.jpg';
import { useStyles } from './styles';

const videos = [
  {
    id: 1,
    title:
      'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
    channel: 'Lucas Nhimi',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: `${avatar}`,
    thumb: `${thumb1}`,
  },
  {
    id: 2,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
    channel: 'Lucas Nhimi',
    views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: `${avatar}`,
    thumb: `${thumb2}`,
  },
  {
    id: 3,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: `${avatar}`,
    thumb: `${thumb3}`,
  },
  {
    id: 4,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: `${avatar}`,
    thumb: `${thumb4}`,
  },
  {
    id: 5,
    title:
      'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
    channel: 'Lucas Nhimi',
    views: '2,2 mi de visualizações',
    date: 'há 1 semana',
    avatar: `${avatar}`,
    thumb: `${thumb5}`,
  },
  {
    id: 6,
    title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
    channel: 'Lucas Nhimi',
    views: '233 mil visualizações',
    date: 'há 1 semana',
    avatar: `${avatar}`,
    thumb: `${thumb6}`,
  },
  {
    id: 7,
    title:
      'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
    channel: 'Lucas Nhimi',
    views: '118 mil visualizações',
    date: 'há 1 semana',
    avatar: `${avatar}`,
    thumb: `${thumb7}`,
  },
  {
    id: 8,
    title:
      'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
    channel: 'Lucas Nhimi',
    views: '1,9 mi de visualizações',
    date: 'há 1 semana',
    avatar: `${avatar}`,
    thumb: `${thumb8}`,
  },
];

const Main = () => {
  const classes = useStyles();
  return (
    <div>
      <Box p={4}>
        <Toolbar />
        <h3>Recomendados</h3>
        <Grid container spacing={4}>
          {videos.map((item, index) => (
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Box>
                <img
                  style={{ width: '100%' }}
                  alt={item.title}
                  // src={thumb1}
                  src={item.thumb}
                />
                <Box>
                  <Typography
                    style={{ fontWeight: 600 }}
                    gutterBottom
                    variant='body1'
                    color='textPrimary'
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    display='block'
                    variant='body2'
                    color='textSecondary'
                  >
                    {item.channel}
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {`${item.views} • ${item.date}`}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default Main;
