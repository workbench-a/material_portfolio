import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import useMediaQuery from '@material-ui/core/useMediaQuery'

import TimelineSectionList from './ui/partials/TimelineSectionList';
import TimelineHeader from './ui/partials/TimelineHeader';
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
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  console.log("matches: ", matches)

  const items = [
    {
      title: "Milestones",
      // subtitle: "\"We are what you repeatedly do.\"",
      // description: "Explore the timeline for project progress updates.",
      // imgUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/montage_lg.jpg?alt=media&token=9aba98de-059c-4aec-9fb1-8dd438202cf7",
    },
  ]

  return (
    <Fragment>
      <TimelineHeader/>
      <Box  style={{"backgroundColor": "black"}} display="flex" justifyContent="center" alignItems="center">
        <TimelineSectionList items={items}/>
      </Box>
    </Fragment>
  );
}