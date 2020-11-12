import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import useMediaQuery from '@material-ui/core/useMediaQuery'
import profile from '../../../assets/img/profile_pic.png';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    maxWidth: "50rem",
    minWidth: "20rem",
    // backgroundColor: "red", //troubleshooting
    margin: 0,
    padding: 20,
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "blue",
    },
  },
  gridItemContainer:{
    // backgroundColor: "brown", //troubleshooting
    padding: 0,
    margin: 0
  },
  paper: {
    maxWidth: "5rem",
    margin: "0.5rem",
    minWidth: "0.5rem",
    padding: theme.spacing(0),
    color: theme.palette.text.secondary,
    borderRadius: 0,
    // backgroundColor: "blue"
  },
  section: {
    // backgroundColor: "black",
    height: "25rem",
  },
  image: {
    // width: "100%",
    // backgroundColor: "blue",
    marginTop: "2rem",
    padding: 0,
  }
}));

export default function Section(props) {
    
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const bgColor = props.bgColor;
  console.log("matches: ", matches)
  console.log("background Color passed as props", bgColor)

  return (
    <Box className={classes.section} style={{"backgroundColor": bgColor}} display="flex" justifyContent="center" alignItems="start">
      <Grid
        className={classes.gridContainer}
        container
        direction="row"
        justify="center"
        align="center"
        spacing={0}
      >
        <Grid item className={classes.image}>
            <img className={classes.image} src={profile} alt="Profile Pic"></img>
            <div>Hey there</div>
        </Grid>
      </Grid>
    </Box>
  );
}