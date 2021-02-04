import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from "@material-ui/core/FormHelperText";

import axios from 'axios';
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
    },
    formControl: {
      margin: theme.spacing(1),
      marginBottom: "1rem",
      minWidth: 240,
    },
    button: {
      marginTop: "1.2rem",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    }
  }))

  const classes = useStyles();

  const [age, setAge] = useState('');
  const [data, setData] = useState({});
  
  useEffect(()=>{
    const fetchData = async () => {
    const result = await axios({
      // method: 'GET',
      url: 'https://the-ml-api-demo.herokuapp.com/v1/predict/regression',
    });
    setData(result);
    };
    fetchData();
  },[]);

  console.log("ML Api Data: ", data)
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  console.log("AlphaVantage Data: ", data)

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
    {/* <div>{data}</div> */}
      <Grid
        // className={classes.gridContainer}
        container
        direction="row"
        justify="center"
        align="center"
        spacing={0}
      >
        <Grid container spacing={4} direction="row" align="center" justify="center">
          {/* <Grid item>
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/500x50"/>
            </a>
          </Grid> */}
          <Grid item>
        
          <FormControl className={classes.formControl}>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              className={classes.selectEmpty}
              // inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Select a Stock</em>
              </MenuItem>
              <MenuItem value={"GME"}>Game Stop: GME</MenuItem>
                    <MenuItem value={"TSLA"}>Tesla: TSLA</MenuItem>
                    <MenuItem value={"TWTR"}>Twitter: TWTR</MenuItem>
            </Select>
            <FormHelperText>Without label</FormHelperText>
          </FormControl>

          <Button className={classes.button} variant="outlined" style={{"borderColor": "black"}}>Submit</Button>
        </Grid>
        </Grid>

        {/* <Grid container spacing={4} direction="row" align="center" justify="center">
          <Grid item>
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/800x300"/>
            </a>
          </Grid>
        </Grid> */}

        <Grid container spacing={4} direction="row" align="center" justify="center">
          <Grid item>
            <HighchartsReact
              highcharts={Highcharts}
              constructorType={'stockChart'}
              options={options}
            />
          </Grid>
        </Grid>

        <Grid container spacing={4} direction="row" align="center" justify="center">
          <Grid item>
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/300"/>
            </a>
          </Grid>
          <Grid item>
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/300"/>
            </a>
          </Grid>
        </Grid>

        <Grid container spacing={4} direction="row" align="center" justify="center">
          <Grid item>
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/800x300"/>
            </a>
          </Grid>
        </Grid>


        <Grid container spacing={4} direction="row" align="center" justify="center">
          <Grid item>
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/500x50"/>
            </a>
          </Grid>
        </Grid>

      </Grid>
    </>
  )
}