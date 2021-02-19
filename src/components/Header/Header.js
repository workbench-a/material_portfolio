import React, {useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // what?
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from "@material-ui/core/styles";

import useStyles from './styles';
import logo from '../../assets/img/logo.png';

function ElevationScroll(props) {
  const { children, window } = props;
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
  window: PropTypes.func,
};

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

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
  
  const tabs = (
    <Fragment>
      <Tabs  className={classes.tabContainer} indicatorColor="primary" value={value} onChange={handleChange}>
        <Tab className={classes.tab} disableRipple label="Home" component={Link} to="/" />
        <Tab className={classes.tab} disableRipple label="About" component={Link} to="/about"/>
      </Tabs>
    </Fragment>
  )
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar color={props.color} position={props.position}>
          <Toolbar>
            <Button className={classes.logoContainer} disableRipple component={Link} to="/">
              <img src={logo} alt="company logo" className={classes.logo}/>
              <Typography noWrap variant="h6" className={classes.title}>
                Steven Wilcox
              </Typography>
            </Button>
            { tabs }
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <div className = {classes.toolbarMargin}/>
    </React.Fragment>
  );
}