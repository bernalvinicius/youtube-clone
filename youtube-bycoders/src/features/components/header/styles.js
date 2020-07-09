import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  appBar: {
    boxShadow: 'none',
    zIndex: 10000,
  },
  grow: {
    flexGrow: 1,
  },
  btnLogin: {
    color: '#3EA6FF',
  },
  menuIcon: {
    paddingRight: '20px',
    paddingLeft: '16px',
  },
  logo: {
    height: '25px',
  },
  search: {
    width: '40%',
    maxWidth: '768px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: '#fff',
  },
  inputSearch: {
    border: '1px solid #ccc',
    width: '100%',
    paddingLeft: '10px',
  },
  buttonSearch: {
    backgroundColor: '#f8f8f8',
    borderLeft: 'none',
    borderRadius: 0,
    height: '2.4em',
  },
});
