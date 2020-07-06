import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  drawer: {
    width: '240px',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '240px',
    borderRight: 'none',
  },
  listItemText: {
    fontSize: '14px',
  },
  listItem: {
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '16px',
  },
  subheader: {
    textTransform: 'uppercase',
  }
});
