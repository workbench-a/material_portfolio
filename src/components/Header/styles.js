import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    color: theme.palette.common.white,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
      backgroundColor: theme.palette.primary.dark,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbarMargin: {
    marginBottom: '0em',
  },
  logo: {
    height: '1.2em',
    marginRight: '1.6em',
  },
  logoContainer: {
    padding: 0,
    color: "white",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
    "&:hover": {
      backgroundColor: 'transparent',
    }
  },
  drawerIconContainer: {
    "&:hover": {
      backgroundColor: 'transparent',
    },
    color: theme.palette.common.white,
    marginLeft: 'auto',
  },
  drawerIcon: {
    height: '35px',
    width: '35px',
  }
}));