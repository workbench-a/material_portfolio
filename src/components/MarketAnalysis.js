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
import profile from '../assets/img/wallstreetbets_large.jpg';
import TabDash from './ui/partials/TabDash';

// card grid imports
import SquareCard from './ui/cards/SquareCard';

// tab dash
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import { linkedInLink, stockGitLink } from "./ui/Globals";

// Views
import MAIntro from './ui/partials/MAIntro';
import MADash from './ui/partials/MADash';
import MACredits from './ui/partials/MACredits';

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
      marginTop: "35rem",
      marginBottom: "2rem",
      border: 0,
      // backgroundColor: "purple"
  },
  image: {
    marginBottom: "0.5rem",
    maxHeight: "30rem",
    width: "auto",
    height: "auto",
  },
  buttonContainer2: {
    marginTop: "4rem",
    marginBottom: "8rem",
  },
  button2: {
    marginRight: "2rem",
    marginTop: "0",
  },
  button3: {
    marginTop: "0.16rem",
  },
}))

export default function MarketAnalysis() {
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
  const iconColor = bgColor==="#000" ? theme.palette.common.white : theme.palette.common.black;

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
                Sentiment and Stock Price
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
          <Tab label="Pipeline and Analysis" />
          <Tab label="Live Dashboard" />
          <Tab label="Credits" />
        </Tabs>
        </div>
      {/* <div className={classes.spacerTop}/> */}
      <Box className={classes.cardGridRoot} display="flex" justifyContent="center" alignItems="top">
        <View value={value} items={items}/>
        {/* <div>{value}</div> */}
        </Box>
        <Grid className={classes.buttonContainer2} container item direction="row" align="center" justify="center">
                <Grid item className={classes.button2}><a href={linkedInLink}><LinkedInIcon style={{"fontSize": "4.55rem", "color": iconColor}}/></a></Grid>
                <Grid item className={classes.button3}><a href={stockGitLink}><GitHubIcon style={{"fontSize": "4rem", "color": iconColor}}/></a></Grid>
        </Grid>
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
          <MAIntro/>
        )
      case 1:
        return(
          // view
          <MADash/>
        )
      case 2:
        return(
          // view
          <MACredits/>
        )
    }
}