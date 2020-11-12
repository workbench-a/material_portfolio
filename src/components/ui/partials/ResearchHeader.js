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
    marginTop: 80,
    padding: 10,
    // [theme.breakpoints.down("xs")]: {
    //   backgroundColor: "blue",
    // },
  },
  gridItemContainer: {
    // backgroundColor: "brown", //troubleshooting
    padding: 0,
    margin: 0,
  },
  
  section: {
    // backgroundColor: "black",
    // height: "25rem",
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
          <Grid item container direction="column" align="center">
            <Grid item>
            <Typography gutterBottom variant="h4" component="h2">
              Curriculum, Theory, Research
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
            An Open Source Bootloader for Graduate Studies in ML
            </Typography>
            <Typography Wrap variant="body2" color="textPrimary" component="p" justifyContent="center">
            </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <TabDash/>
    </div>
  );
}