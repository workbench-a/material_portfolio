import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";


import useMediaQuery from '@material-ui/core/useMediaQuery'
import profile from '../../../assets/img/profile_pic.png';
import Projects from "../../Projects";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "3rem",
  },
  gridContainer: {
    maxWidth: "50rem",
    minWidth: "20rem",
    // backgroundColor: "red", //troubleshooting
    margin: 0,
    padding: 5,
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
    marginTop: "18rem",
    border: 0,
  },
  image: {
    marginBottom: "0.8rem",
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
  console.log("matches: ", matches)
  console.log("background Color passed as props", bgColor)

  return (

<div className={classes.root}>
<Box className={classes.section} style={{"backgroundColor": bgColor, "height": "0rem"}} display="flex" justifyContent="center" alignItems="start">
  <Grid
    className={classes.gridContainer}
    container
    direction="column"
    justify="center"
    align="center"
    spacing={0}
  >

<Grid item className={classes.image}>
            <img className={classes.image} src={profile} alt="Profile Pic"></img>
            {/* <div>The Title</div> */}
        </Grid>
    <Grid item>
    {/* <Typography gutterBottom variant="h4" component="h2">
        About Me
      </Typography> */}
      <Typography  className={classes.subtitle} gutterBottom variant="h6" component="h2">
      "You are what you repeatedly do."
      </Typography>
      {/* <Typography Wrap variant="body2" color="textPrimary" component="p" justifyContent="center">
        I like to understand how things work, so I can make better things and make things better.
      </Typography> */}
    </Grid>
  </Grid>
</Box>
<div className={classes.spacerBot}/>
</div>
  );
}