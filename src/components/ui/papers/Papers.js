import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from "@material-ui/core/styles";

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ContentCard from '../papers/ContentCard';

import CategoryHeader from '../partials/CategoryHeader';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    minHeight: '100vh',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  cardBodyLink: {
    textDecoration: 'none',
  },
  spacerTop: {
    width: "100%",
    margin: "7rem",
  },
  spacerBot: {
    width: "100%",
    margin: "5rem",
  },
}))

export default function Papers() {
  const classes = useStyles();
  const theme = useTheme();

  const header = {
    title: "Publications with Code",
    subtitle: "A selection of implementations of or experiments with existing research.",
    description: "",
  }

  return (
    <Fragment>
        <CategoryHeader headerHeight={"25rem"} header={header}/>
        <div className={classes.root}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Grid classsName={classes.root} display="flex" justifyContent="center" alignItems="center">
            <div className={classes.spacerTop}/>
            <Link classes={classes.cardBodyLink} style={{"textDecoration": 'none', "color": theme.palette.common.black}} to="/notebook">
              <ContentCard/>
            </Link>
            <Link classes={classes.cardBodyLink} style={{"textDecoration": 'none', "color": theme.palette.common.black}} to="/notebook">
              <ContentCard/>
            </Link>
              <div className={classes.spacerBot}/>
            </Grid>
          </Box>
      </div>
    </Fragment>
  );
}