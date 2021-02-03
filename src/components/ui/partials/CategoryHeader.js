import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import useMediaQuery from '@material-ui/core/useMediaQuery';
import profile from '../../../assets/img/profile_pic.png';

import TabDash from '../partials/TabDash';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "3rem",
  },
  gridContainer: {
    maxWidth: "50rem",
    minWidth: "20rem",
    // backgroundColor: "red", //troubleshooting
    margin: 0,
    padding: 20,
    // [theme.breakpoints.down("xs")]: {
    //   backgroundColor: "blue",
    // },
  },
  gridItemContainer: {
    // backgroundColor: "brown", //troubleshooting
    padding: 0,
    margin: 0,
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
    // backgroundColor: "black",
    // height: "25rem",
  },
  spacerBot: {
    flexGrow: 1,
    marginTop: "10rem",
    border: 0,
  },
  subtitle: {
    fontStyle: "italic",
    color: theme.palette.primary.main,
  }, 
}));

export default function Section(props) {
    
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const bgColor = props.bgColor;
  const headerHeight = props.headerHeight
  console.log("matches: ", matches)
  console.log("background Color passed as props", bgColor)

  const { title, subtitle, description} = props.header

  return (
    <div className={classes.root}>
      <Box className={classes.section} style={{"backgroundColor": bgColor, "height": "0rem"}} display="flex" justifyContent="center" alignItems="start">
        <Grid
          className={classes.gridContainer}
          container
          direction="row"
          justify="center"
          align="center"
          spacing={0}
        >
          <Grid item>
          <Typography gutterBottom variant="h4" component="h2">
              {title}
            </Typography>
            <Typography className={classes.subtitle} gutterBottom variant="h6" component="h2">
              {subtitle}
            </Typography>
            <Typography Wrap variant="body2" color="textPrimary" component="p" justifyContent="center">
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <div className={classes.spacerBot}/>
    </div>
  );
}