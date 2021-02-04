import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

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
            <h1>Application Architecture:</h1>
          </Grid>
        </Grid>
        <Grid container spacing={4} direction="row" align="center" justify="flex-start">
          <Grid item>
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/800x300"/>
            </a>
          </Grid>
        </Grid>

        <Grid container spacing={4} direction="row" align="center" justify="flex-start">
          <Grid item>
            <h1>Pipline:</h1>
          </Grid>
        </Grid>

        <Grid container spacing={4} direction="row" align="center" justify="flex-start">
          <Grid item>
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/800x300"/>
            </a>
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
        <Grid container spacing={4} direction="row" align="center" justify="flex-start">
          <Grid item>
            <h2>Feature Selection:</h2>
          </Grid>
        </Grid>
        <Grid container spacing={4} direction="row" align="center" justify="flex-start">
          <Grid item>
            <h2>Additional Model Tuning and Experimentation:</h2>
          </Grid>
        </Grid>

        <Grid container spacing={4} direction="row" align="center" justify="flex-start">
          <Grid item>
            <h1>API Deployment (CircleCI, AWS, Docker, EKS)</h1>
          </Grid>
        </Grid>
        <Grid container spacing={4} direction="row" align="center" justify="flex-start">
          <Grid item>
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/800x300"/>
            </a>
          </Grid>
        </Grid>
        <Grid container spacing={4} direction="row" align="center" justify="flex-start">
          <Grid item>
            <h1>Data Ops (Splice Machine)</h1>
          </Grid>
        </Grid>
        <Grid container spacing={4} direction="row" align="center" justify="flex-start">
          <Grid item>
            <h1>Testing and Monitoring (Prometheus, Grafana, Kibana)</h1>
          </Grid>
        </Grid>

      </Grid>
    </>
  )
}