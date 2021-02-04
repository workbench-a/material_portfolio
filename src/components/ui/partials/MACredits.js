import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import axios from 'axios';


export default function MAIntro(){
  const theme = useTheme();
  const useStyles = makeStyles(theme => ({
    gridContainer: {
      maxWidth: "65rem",
      minWidth: "20rem",
      // backgroundColor: "red", //troubleshooting
      margin: 0,
      padding: 20,
      // [theme.breakpoints.down("xs")]: {
      //   backgroundColor: "blue",
      // },
    }
  }))
  const classes = useStyles();

  return(
    <>
      <Grid
        className={classes.gridContainer}
        container
        direction="row"
        justify="center"
        align="center"
        spacing={0}
      >
        <Grid container spacing={4} direction="row" align="center" justify="flex-start">
          <Grid item>
            <h1>Resources and Special Thanks!</h1>
          </Grid>
        </Grid>

        <Grid container spacing={4} direction="row" align="center" justify="flex-start">
          <Grid item>
            <h2>Data Analysis:</h2>
          </Grid>
        </Grid>
        <Grid container spacing={4} direction="row" align="center" justify="flex-start">
          <Grid item>
            <h2>Feature Engineering:</h2>
          </Grid>
        </Grid>


      </Grid>
    </>
  )
}