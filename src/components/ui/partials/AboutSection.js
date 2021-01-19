import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { gitHubLink, wikiLink, calendarLink, bootcampLink, cvLink, linkedInLink } from "../Globals";
import useMediaQuery from '@material-ui/core/useMediaQuery'
import twitter_logo from '../../../assets/img/twitter_logo.png';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    maxWidth: "500rem",
    minWidth: "20rem",
    // backgroundColor: "red", //troubleshooting
    margin: 100,
    marginTop: 30,
    padding: 20,
    // [theme.breakpoints.down("xs")]: {
    //   backgroundColor: "blue",
    // },
  },
  gridItemContainer:{
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
    minHeight: "40rem",
  },
  sectionText: {
    // backgroundColor: "black",
    maxWidth: "50rem",
    marginTop: "1rem",
  },
  sectionTitle: {
    // backgroundColor: "black",
    maxWidth: "50rem",
    marginTop: "1rem",
  },
  image: {
    width: "100%",
    backgroundColor: "blue",
    margin: 0,
    padding: 0,
  },
  buttonContainer: {
    marginTop: "5rem",
  },
  buttonContainer2: {
    marginTop: "5rem",
  },
  button: {
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
  },
  button2: {
    marginRight: "2rem",
    marginTop: "0",
  },
  button3: {
    marginTop: "0.16rem",
  },
  buttonLink: {
    textDecoration: "none",
  },
  icon: {
  },
}));

export default function Section(props) {
    
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const bgColor = props.bgColor;
  const textColor = bgColor==="#000" ? "textSecondary" : "textPrimary";
  const iconColor = bgColor==="#000" ? theme.palette.common.white : theme.palette.common.black;
  // console.log("matches: ", matches)
  // console.log("background Color passed as props", bgColor)

  const { title, subtitle, description } = props.item

  return (
    <Box className={classes.section} style={{"backgroundColor": bgColor}} display="flex" justifyContent="center" alignItems="flex-start">
      <Grid
        className={classes.gridContainer}
        container
        direction="row"
        justify={matches ? "center" : "center"}
        align="center"
        spacing={0}
      >
        {/* <Grid item >
            <img className={classes.image} src={imgUrl} alt="project_montage"></img>
        </Grid> */}
        <Grid item>
          <Grid className={classes.gridItemContainer} container item direction="column" align="center" justify="center">
            {/* <Grid item direction="column" alight="center" justify="center"> */}
              <Typography Wrap className={classes.sectionTitle} color={textColor} variant="h5" align="left">
               {title}
              </Typography>
              <Typography Wrap className={classes.sectionText}  color={textColor} align="left">
                {subtitle}
              </Typography>
              <Typography Wrap className={classes.sectionText}  color={textColor} variant="body1" align="left">
                {description}
              </Typography>
              <Grid className={classes.buttonContainer} container item direction="row" align="center" justify="space-between">
              <Grid item className={classes.button}><a className={classes.buttonLink} href={calendarLink}><Button variant="outlined" style={{"color": iconColor, "borderColor": iconColor}}>Live Calendar</Button></a></Grid>
              <Grid item className={classes.button}><a className={classes.buttonLink} href={wikiLink}><Button variant="outlined" style={{"color": iconColor, "borderColor": iconColor}}>The Open Bootcamp Wiki</Button></a></Grid>
              <Grid item className={classes.button}><a className={classes.buttonLink} href={bootcampLink}><Button variant="outlined" style={{"color": iconColor, "borderColor": iconColor}}>Self-Directed Learning</Button></a></Grid>
              <Grid item className={classes.button}><a className={classes.buttonLink} href={cvLink}><Button variant="outlined" style={{"color": iconColor, "borderColor": iconColor}}>Traditional CV</Button></a></Grid>
              </Grid>
              <Grid className={classes.buttonContainer2} container item direction="row" align="center" justify="center">
              <Grid item className={classes.button2}><a href={linkedInLink}><LinkedInIcon fontSize="large" style={{"color": iconColor, "fontSize": "2.6rem"}}/></a></Grid>
              <Grid item className={classes.button3}><a href={gitHubLink}><GitHubIcon fontSize="large" style={{"color": iconColor}}/></a></Grid>
              </Grid>
            {/* </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}