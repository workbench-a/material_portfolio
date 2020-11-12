import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import ResearchHeader from './ui/partials/ResearchHeader';
import SquareCardGrid from './ui/cards/SquareCardGrid';

const useStyles = makeStyles(theme => ({
  section: {
    // minHeight: "80vh"
  }
}))

export default function Research() {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme.palette.common.black)

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
    // {
    //   title: "Curriculumn, Theory, and Research",
    //   subtitle: "An Open Source Bootloader for Graduate Studies in ML",
    //   description: "A running list of news blogs, comunities, researchers, conferences, events, and other research and industry related information pertaining to machine learning and artificial intelligence.",
    //   imgUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/paper_lg.png?alt=media&token=77a46031-7970-48a2-8926-9dbba06d8c78",
    // },
    // {
    //   title: "Projects",
    //   subtitle: "Apps | Case Studies | Pipelines",
    //   description: "A selection of machine learning and data science projects intended to showcase various pragmatic and creative applications of interest",
    //   imgUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/paper_lg.png?alt=media&token=77a46031-7970-48a2-8926-9dbba06d8c78",
    // },
    // {
    //   title: "Papers To Code",
    //   subtitle: "NLP | Vision | Deep RL",
    //   description: "The capacity to reproduce machine learning research is a critical skill for every research scientist. We consider a selections of works which replicate elements of modern research in artificial intelligence.",
    //   imgUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/paper_lg.png?alt=media&token=77a46031-7970-48a2-8926-9dbba06d8c78",
    // },
  ]

  return (
      <div>
        <ResearchHeader/>
        <SquareCardGrid items={items}/>
      </div>
  );
}