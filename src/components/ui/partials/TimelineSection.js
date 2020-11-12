import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TodayIcon from '@material-ui/icons/Today';

import useMediaQuery from '@material-ui/core/useMediaQuery'
import twitter_logo from '../../../assets/img/twitter_logo.png';

import NestedList from './NestedList';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    maxWidth: "50rem",
    minWidth: "20rem",
    // backgroundColor: "red", //troubleshooting
    margin: 0,
    padding: 20,
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "blue",
    },
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
    // backgroundColor: "black",
    minHeight: "40rem",
  },
  sectionText: {
    // backgroundColor: "black",
    maxWidth: "20rem",
    marginTop: "1rem"
  },
  sectionTitle: {
    // backgroundColor: "black",
    maxWidth: "20rem",
    marginTop: "1rem",
  },
  image: {
    width: "100%",
    backgroundColor: "blue",
    margin: 0,
    padding: 0,
  },
  buttonContainer: {
    marginTop: "1.7rem",
  }
}));

export default function TimelineSection(props) {
    
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const bgColor = props.bgColor;
  const textColor = bgColor==="#000" ? "textSecondary" : "textPrimary";
  const iconColor = bgColor==="#000" ? theme.palette.common.white : theme.palette.common.black;
  // console.log("matches: ", matches)
  // console.log("background Color passed as props", bgColor)

  const { title, subtitle, description, imgUrl, gitHubUrl, detailsLink } = props.item

  return (
    <Box className={classes.section} style={{"backgroundColor": bgColor}} display="flex" justifyContent="center" alignItems="center">
      <Grid
        className={classes.gridContainer}
        container
        direction="row"
        justify={matches ? "center" : "space-between"}
        align="center"
        spacing={0}
      >
        {/* <Grid item >
            <img className={classes.image} src={imgUrl} alt="project_montage"></img>
        </Grid> */}
        <Grid item>
          <Grid className={classes.gridItemContainer} container item direction="column" align="center" justify="center">
            {/* <Grid item direction="column" alight="center" justify="center"> */}
              <Typography Wrap className={classes.sectionTitle} color={textColor} variant="h6" align="center">
               {title}
              </Typography>
              <Typography Wrap className={classes.sectionText}  color={textColor} align="center">
                {subtitle}
              </Typography>
              <Typography Wrap className={classes.sectionText}  color={textColor} align="center">
                {description}
              </Typography>
              <NestedList/>
              <Grid className={classes.buttonContainer} container item direction="row" align="start" justify="center">
              {/* <Grid item><Link to={detailsLink}><Button variant="outlined" style={{"color": iconColor, "borderColor": iconColor}}>View Calendar</Button></Link></Grid> */}
              {/* <Grid item><a href={gitHubUrl}><TodayIcon style={{"color": iconColor}}/></a></Grid> */}
              <Grid item><a href={gitHubUrl}><Button variant="outlined" style={{"color": iconColor, "borderColor": iconColor}}>View Live Calendar</Button></a></Grid>
              </Grid>
            {/* </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}