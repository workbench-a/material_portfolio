import React, { Fragment } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import SquareCard from './SquareCard';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "orange",
    backgroundColor: "#E5E5E5",
    marginTop: "0rem",
    minHeight: "100vh",
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
  }
}));

export default function SquareCardGrid(props) {
  const { items } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Fragment>
    <div className={classes.spacerTop}/>
    <Box className={classes.root} display="flex" justifyContent="center" alignItems="top">
    <Grid
        className={classes.gridContainer}
        container
        direction="row"
        justify="center"
        align="center"
        spacing={4}
      >        {/* <Box className={classes.root} display="flex" justifyContent="center" alignItems="center"> */}
          {items.map((item, index) => {
            return (
              <Grid item>
                <SquareCard key={item} item={item}/>
              </Grid>
            )
          })}
      </Grid>
      </Box>
      </Fragment>
  );
}