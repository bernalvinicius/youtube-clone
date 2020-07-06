import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    // background: 'red',
    // height: '100vh',
  },
  appBar: {
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  btnLogin: {
    color: '#3EA6FF',
  },
  icons: {
    // paddingRight: '20px',
  },
  menuIcon: {
    paddingRight: '20px',
    paddingLeft: '16px',
  },
  logo: {
    height: '25px',
  },
  search: {
    // border: '1px solid red',
    width: '40%',
    maxWidth: '768px',
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
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
    // padding: '6px 0 7px',
  },
});
