import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import SimpleCarousel from './ui/partials/SimpleCarousel';
import SectionList from './ui/partials/SectionList';


const useStyles = makeStyles(theme => ({
  root: {
    flexFrow: 1,
  },
  blackPaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  whitePaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  blackSection: {
    backgroundColor: theme.palette.common.black,
  },
  whiteSection: {
    backgroundColor: theme.palette.common.white,
  },
  offWhiteSection: {
    backgroundColor: theme.palette.primary.light,
  },
  spacer: {
    margin: '500px',
  }
}))

function Home() {
  // const classes = useStyles();
  const theme = useTheme();

  const items = [
    {
      title: "Project Highlight Reel",
      subtitle: "Apps | Case Studies | Pipelines | Kaggle",
      description: "Machine learning and data science projects intended to showcase various pragmatic and creative applications of interest.",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/montage_lg.jpg?alt=media&token=c3bb5b2c-c5b4-445c-9d11-18e0861dce6e",
      detailsLink: "/projects",
      gitHubUrl: "https://www.github.com/AlephTaw",
      buttonText: "Learn More",
      gitHubDisplay: true,
    },
    // {
    //   title: "Papers and Impementations",
    //   subtitle: "NLP | Vision | Deep RL",
    //   description: "A selection of efforts to explore and replicate aspects of modern artificial intelligence research.",
    //   imgUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/paper_lg.png?alt=media&token=77a46031-7970-48a2-8926-9dbba06d8c78",
    //   // detailsLink: "/papers",
    //   detailsLink: "https://www.github.com/AlephTaw/papers-to-code",
    //   gitHubUrl: "https://www.github.com/AlephTaw/papers-to-code",
    //   buttonText: "View On GitHub",
    //   gitHubDisplay: false,
    // },
    {
      title: "The Machine Learning and Software Bootcamp",
      subtitle: "A Curriculum for Self-Starters",
      description: "Resources and projects documenting extensive self-study in machine learning and software engineering.",
      imgUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/chalkboard_lg.jpg?alt=media&token=859ceed0-4e09-4277-ac2b-e046b0a75029",
      // detailsLink: "/research",
      detailsLink: "https://www.github.com/AlephTaw/the-open-data-science-bootcamp",
      gitHubUrl: "https://www.github.com/AlephTaw/the-open-data-science-bootcamp",
      buttonText: "View On GitHub",
      gitHubDisplay: false,
    }
  ]

  return (
      <Fragment>
        <SimpleCarousel/>
        <SectionList items={items}/>
      </Fragment>
  );
}

export default Home;