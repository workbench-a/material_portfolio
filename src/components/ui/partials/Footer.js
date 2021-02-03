import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import GitHubIcon from '@material-ui/icons/GitHub';
import { gitHubLink } from '../Globals';

const useStyles = makeStyles((theme) => ({
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
  gridItemContainer:{
    // backgroundColor: "brown", //troubleshooting
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
    backgroundColor: theme.palette.primary.main,
    height: "5rem",
  },
  image: {
    // width: "100%",
    backgroundColor: "blue",
    margin: 0,
    padding: 0,
  },
  footerText: {
    color: theme.palette.common.white,
  },
  icons: {
    color: theme.palette.common.white,
    marginLeft: '1rem',
  }
}));

export default function Footer(props) {
    
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const bgColor = props.bgColor;
  console.log("matches: ", matches)
  console.log("background Color passed as props", bgColor)

  return (
    <Box className={classes.section} style={{"backgroundColor": bgColor}} display="flex" justifyContent="center" alignItems="center">
      <Grid
        className={classes.gridContainer}
        container
        direction="row"
        justify="center"
        align="center"
        spacing={0}
      >
        {/* <Grid item >
            <img className={classes.image} src={twitter_logo} alt="project_montage"></img>
        </Grid> */}
        <Grid item>
          <Grid className={classes.gridItemContainer} container direction="row" align="center" justify="center">
            <Typography className={classes.footerText}>Ce n'est pas un pied de page.</Typography>
            <a href={gitHubLink}><GitHubIcon className={classes.icons}/></a>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}