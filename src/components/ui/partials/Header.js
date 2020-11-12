import React, {useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import logo from '../../../assets/img/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: 0,
    // "&:hover": {
    //   backgroundColor: theme.palette.common.white,
    // }
  },
  menuItem: {
    ...theme.typography.tab,
    color: theme.palette.common.white,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
      backgroundColor: theme.palette.primary.dark,
    // selected: {
    //   backgroundColor: theme.palette.primary.dark, //fix
    // }
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbarMargin: {
    // ...theme.mixins.toolbar,
    marginBottom: '0em',
    // [theme.breakpoints.down("xs")]: {
    //   marginBottom: '0em',
    // }
  },
  logo: {
    height: '1.2em',
    marginRight: '1.6em',
    // [theme.breakpoints.down("xs")]: {
    //   height: '1.2em',
    // },
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

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false)
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuOptions = [{name: "Select ...", Link: ""}, {name: "Projects", link: "/projects"}, {name: "Papers", link: "/papers"}, {name: "Research", link: "/research"}]

  useEffect(() => {
    if(window.location.pathname ==='/' && value !== 0){
      setValue(0)
    } else if (window.location.pathname === "/about" && value !== 1){
      setValue(1)
    } else if (window.location.pathname === "/timeline" && value !== 2){
      setValue(2)
    }
  }, [value]);


  const handleChange = (e, newValue) => {
    if (newValue === 3){
      return
    }else{
      setValue(newValue)
    }
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true)
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  }

  const handleClose = e => {
    setAnchorEl(null);
    setOpenMenu(false)
  };

  const tabs = (
    <Fragment>
      <Tabs  className={classes.tabContainer} indicatorColor="primary" value={value} onChange={handleChange}>
            <Tab 
              className={classes.tab} 
              disableRipple 
              label="Home" 
              component={Link} 
              to="/" 
            />
            <Tab 
              className={classes.tab} 
              disableRipple
              label="About" 
              component={Link} 
              to="/about" 
            />
            <Tab 
              className={classes.tab} 
              disableRipple
              label="Timeline" 
              component={Link} 
              to="/timeline" 
            />
            <Tab 
              className={classes.tab} 
              disableRipple
              label="Category" 
              aria-controls="simple-menu" 
              aria-haspopup="true" 
              onMouseOver={handleClick} 
            />
          </Tabs>
          <Menu 
            classes={{paper: classes.menu}}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={openMenu} //open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{onMouseLeave: handleClose}}
            elevation={0}
          >
            {/* <MenuItem >Select One ...</MenuItem> */}
            {menuOptions.map((option, i) => (
              <MenuItem 
                key = {option}
                classes={{root: classes.menuItem}} 
                onClick={(e) => {handleMenuItemClick(e, i); setValue(3); handleClose()}} 
                selected = {i === selectedIndex && value === 3}
                component={Link} to={option.link}
              >{option.name}
              </MenuItem>
            ))}
          </Menu>
    </Fragment>
  )

  const drawer = (
    <Fragment>
      < SwipeableDrawer 
        disableBackdropTransition={!iOS} 
        disableDiscovery={iOS} 
        open={openDrawer} 
        onClose={() => setOpenDrawer(false)} 
        onOpen={() => setOpenDrawer(true)}
      >
        Example Drawer
      </ SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.drawerIcon}/>
      </IconButton>
    </Fragment>
  )
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar color={props.color} position={props.position}>
        <Toolbar>
          <Button  
          className={classes.logoContainer} 
          disableRipple 
          component={Link} 
          to="/">
            <img src={logo} alt="company logo" className={classes.logo}/>
            <Typography noWrap variant="h6" className={classes.title}>
              Steven Wilcox
            </Typography>
          </Button>
          {/* { matches ? drawer : tabs }           */}
          { tabs }
        </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <div className = {classes.toolbarMargin}/>
    </React.Fragment>
  );
}