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
  ]

  return (
      <div>
        <ResearchHeader/>
        <SquareCardGrid items={items}/>
      </div>
  );
}