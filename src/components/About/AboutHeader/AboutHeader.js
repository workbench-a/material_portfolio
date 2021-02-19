import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";


import useMediaQuery from '@material-ui/core/useMediaQuery'
import profile from '../../../assets/img/profile_pic.png';
import useStyles from './styles';


export default function Section(props) {
    
  const classes = useStyles();
  const theme = useTheme();
  const bgColor = props.bgColor;

  return (
  <div className={classes.root}>
    <Box className={classes.section} style={{"backgroundColor": bgColor, "height": "0rem"}} display="flex" justifyContent="center" alignItems="start">
      <Grid className={classes.gridContainer} container direction="column" justify="center" align="center" spacing={0}>
        <Grid item className={classes.image}>
          <img className={classes.image} src={profile} alt="Profile Pic"></img>
        </Grid>
        <Grid item>
          <Typography  className={classes.subtitle} gutterBottom variant="h6" component="h2">
            "You are what you repeatedly do."
          </Typography>
        </Grid>
      </Grid>
    </Box>
    <div className={classes.spacerBot}/>
  </div>
  );
}