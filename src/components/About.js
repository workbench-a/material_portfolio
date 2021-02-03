import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import useMediaQuery from '@material-ui/core/useMediaQuery'

import AboutSectionList from './ui/partials/AboutSectionList';
import AvatarHeader from './ui/partials/AvatarHeader';
import montage from '../assets/img/montage.png';
import twitter_logo from '../assets/img/twitter_logo.png';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  //   backgroundColor: "green",
  //   align: "center"
  //   // width: "100%"
  // },
  gridContainer: {
    maxWidth: "50rem",
    minWidth: "20rem",
    backgroundColor: "red",
    margin: 0,
    padding: 20,
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "blue",
    },
  },
  gridItemContainer:{
    backgroundColor: "brown",
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
    backgroundColor: "black",
    height: "30rem",
  },
  image: {
    // width: "100%",
    backgroundColor: "blue",
    margin: 0,
    padding: 0,
  }
}));

export default function About() {
  const items = [
    {
      title: `This is where I document my work ...`,
      // subtitle: "Apps | Case Studies | Pipelines",
      description: "Thanks for checking out the site! This project is an augmented portfolio, highlighting projects and code samples, while documenting insights into work-ethic, work flow, and self directed technical development in machine learning research and software engineering. The live calendar chronicles these efforts in real-time. Please see links below.",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/montage_lg.jpg?alt=media&token=9aba98de-059c-4aec-9fb1-8dd438202cf7",
    },
    // {
    //   title: "Papers To Code",
    //   subtitle: "NLP | Vision | Deep RL",
    //   description: "The capacity to reproduce machine learning research is a critical skill for every research scientist. We consider a selections of works which replicate elements of modern research in artificial intelligence.",
    //   imgUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/paper_lg.png?alt=media&token=77a46031-7970-48a2-8926-9dbba06d8c78",
    // },
  ]
  

  
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  console.log("matches: ", matches)

  return (
    <Fragment>
      <AvatarHeader/>
      <AboutSectionList items={items}/>
    </Fragment>
  );
}