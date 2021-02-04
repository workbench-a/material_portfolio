import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';


import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


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

  const options = {
    title: {
      text: 'Sentiment and Stock Price'
    },
      
    series: [
      {
      data: [[Date.UTC(2013,5,2),0.7695],
      [Date.UTC(2013,5,3),0.7648],
      [Date.UTC(2013,5,24),0.7623],]
    },
    {
      data: [[Date.UTC(2013,5,2),0.543],
      [Date.UTC(2013,5,3),0.753548],
      [Date.UTC(2013,5,24),0.7654353],]
    }
  ]
  }

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

        <Grid container spacing={4} direction="row" align="center" justify="flex-start">
          <Grid item>
            <HighchartsReact
              highcharts={Highcharts}
              constructorType={'stockChart'}
              options={options}
            />
          </Grid>
        </Grid>


      </Grid>
    </>
  )
}