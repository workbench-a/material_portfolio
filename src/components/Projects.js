import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import useMediaQuery from '@material-ui/core/useMediaQuery'

import SectionList from './ui/partials/SectionList';
import CategoryHeader from './ui/partials/CategoryHeader';
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

export default function Projects() {
  const items = [
    {
      title: "Twitter Sentiment Analysis",
      subtitle: "PyTorch | Spark Streaming | Pipelines | D3",
      description: "An exploration of non-opinionated approaches to combat misinformation. sentiment analysis, topic models, transfer learning, and transformer networks for text summarization are employed.",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/twitter_logo.png?alt=media&token=8224dd8c-f7c0-406f-9107-aecbc41e052b",
      detailsLink: "/notebook",
      gitHubUrl: "https://www.github.com",
    },
    {
      title: "Deep Reinforcement Learning",
      subtitle: "PyTorch | Pipeline | AI Gym",
      description: "The capacity to reproduce machine learning research is a critical skill for every research scientist. We consider a selections of works which replicate elements of modern research in artificial intelligence.",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/breakout.png?alt=media&token=ee6a6fed-27dc-46e0-bb65-3021eb6ce279",
      detailsLink: "/notebook",
      gitHubUrl: "https://www.github.com",
    },
    {
      title: "Weed Seedling Detection",
      subtitle: "CNN | Pipeline | PyTorch | Keras",
      description: "A convolutional nueral network for detecting weed seedlings, using Keras and PyTorch.",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/seedling.jpeg?alt=media&token=9ef3c09d-be46-4d56-9a28-bf4ad09b74b8",
      detailsLink: "/notebook",
      gitHubUrl: "https://www.github.com",
    },
    {
      title: "Housing Price Prediction",
      subtitle: "Scikit-Learn | Pipeline | API",
      description: "Data Preprocessing, feature extraction, feature selection, training, model serving via api for a simple housing price prediction problem.",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/neighborhood.jpeg?alt=media&token=58be1629-a021-4f12-ad27-ebd6d2185517",
      detailsLink: "/notebook",
      gitHubUrl: "https://www.github.com",
    },
  ]

  const header = {
    title: "Projects",
    subtitle: "Apps, Pipelines, Applications, and More",
    description: "",
  }
  
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  console.log("matches: ", matches)

  return (
    <Fragment>
      <CategoryHeader header={header}/>
      <SectionList items={items}/>
    </Fragment>
  );
}