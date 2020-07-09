import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  navMain: {
    display: 'flex',
    flexDirection: 'row',
  },
  filter: {
    width: '900px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'initial',
    alignItems: 'center',
  },
  filterIcon: {
    marginRight: '15px',
  },
  thumb: {
    width: '100%',
    maxWidth: '300px',
  },
  boxTextVideos: {
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10px',
    width: '100%',
    maxWidth: '550px',
    paddingTop: '20px',
  },
  description: {
    paddingTop: '20px',
  },
  listItem: {
    cursor: 'pointer',
  },
});
