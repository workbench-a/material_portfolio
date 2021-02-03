import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import ResearchHeader from './ui/partials/ResearchHeader';
import SquareCardGrid from './ui/cards/SquareCardGrid';

// header imports
import Typography from "@material-ui/core/Typography";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import profile from '../assets/img/wallstreetbets.jpeg';
import TabDash from './ui/partials/TabDash';

// card grid imports
import SquareCard from './ui/cards/SquareCard';

// tab dash
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
  },
  section: {
    // minHeight: "80vh"
  },
  headerRoot: {
    // backgroundColor: "orange",
    // backgroundColor: "#E5E5E5",
    marginTop: "0rem",
    // minHeight: "100vh",
  },
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
  squareCard: {
    maxHeight: "40.5rem",
    maxWidth: "40.5rem",
  },
  spacerTop: {
    // backgroundColor: "yellow",
    backgroundColor: "#E5E5E5",
    width: "100%",
    height: "2rem",
  },
  cardGridroot: {
    // backgroundColor: "orange",
    backgroundColor: "#E5E5E5",
    marginTop: "0rem",
    // minHeight: "100vh",
  },
  squareCard: {
    maxHeight: "40.5rem",
    maxWidth: "40.5rem",
  },
  spacerTop: {
    // backgroundColor: "yellow",
    backgroundColor: "#E5E5E5",
    width: "100%",
    height: "2rem",
  },
  tabRoot: {
      flexGrow: 1,
      marginTop: "25rem",
      marginBottom: "2rem",
      border: 0,
      // backgroundColor: "purple"
  },
  image: {
    marginBottom: "0.8rem",
    maxHeight: "20rem",
    width: "auto",
    height: "auto",
  }
}))

export default function MarketAnalysis() {
  // const [index, setIndex] = useState(0)
  const classes = useStyles();
  const theme = useTheme();

  // tab dash
  const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


  // console.log(theme.palette.common.black)
  // const bgColor = props.bgColor;
  const bgColor = theme.palette.common.white


  const items = [
    {
      title: "PyTorch",
      subtitle: "Tutorial | CV | NLP",
      description: "",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/paper_lg.png?alt=media&token=77a46031-7970-48a2-8926-9dbba06d8c78",
    },
    {
      title: "PySpark",
      subtitle: "Tutorial | SparkML | Streaming",
      description: "",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/paper_lg.png?alt=media&token=77a46031-7970-48a2-8926-9dbba06d8c78",
    },
  ]

  return (
    <div className={classes.root}>
    {/* <ResearchHeader/> */}
      <div className={classes.headerRoot}>
        <Box className={classes.section} style={{"backgroundColor": bgColor, "height": "0rem"}} display="flex" justifyContent="center" alignItems="start">
          <Grid
            className={classes.gridContainer}
            container
            direction="row"
            justify="center"
            align="center"
            spacing={0}
          >
            <Grid item container direction="column" align="center">
              <Grid item>
              {/* <Typography gutterBottom variant="h4" component="h2">
                The Machine Learning and Software Bootcamp
              </Typography> */}
              <img className={classes.image} src={profile} alt="Profile Pic"></img>
              <Typography gutterBottom variant="h6" component="h2">
                On the subject of Sentiment and Stock Price
              </Typography>
              <Typography Wrap variant="body2" color="textPrimary" component="p" justifyContent="center">
              </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        {/* <TabDash/> */}
        <Tabs className={classes.tabRoot}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="black"
          centered
        >
          <Tab label="Coursework" />
          <Tab label="Software" />
          <Tab label="Exploratorials" />
          <Tab label="Resources" />
        </Tabs>
        </div>
      {/* <div className={classes.spacerTop}/> */}
      <Box className={classes.cardGridRoot} display="flex" justifyContent="center" alignItems="top">
        <View value={value} items={items}/>
        {/* <div>{value}</div> */}
        </Box>
          {/* <SquareCardGrid items={items}/> */}
      {/* </div> */}
      </div>
  );
}

const View = ({ value, items }) => {
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

    switch(value){
      case 0:
        // view
        return(
          <Grid
          className={classes.gridContainer}
          container
          direction="row"
          justify="center"
          align="center"
          spacing={4}
        >        {/* <Box className={classes.root} display="flex" justifyContent="center" alignItems="center"> */}
                <Grid item>
                  <SquareCard key={items[1]} item={items[1]}/>
                </Grid>
                <Grid item>
                  <SquareCard key={items[1]} item={items[1]}/>
                </Grid>
        </Grid>
        )
      case 1:
        return(
          // view
          <div>2</div>
        )
      case 2:
        return(
          // view
          <div>3</div>
        )
      case 3:
        return(
        // view
        <div>4</div>
        )
    }
}