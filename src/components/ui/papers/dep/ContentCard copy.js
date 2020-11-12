import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import useMediaQuery from '@material-ui/core/useMediaQuery'
import twitter_logo from '../../../assets/img/twitter_logo.png';

const useStyles = makeStyles((theme) => ({
    // card: {
  //   // backgroundColor: "rgb(196,207,201,1.0)",
  //   // backgroundColor: "rgb(193,202,203,0.83)",
  //   marginBottom: "5rem",
  //   borderRadius: "0.5rem",
  //   width: '86.625em',
  //   height: '21.3125rem',
  //   "&:hover": {
  //     // backgroundColor: "rgb(167,215,231,0.22)",
  //     backgroundColor: "rgb(167,215,231,0.22)",
  //   },
  // },
  card: {
    borderRadius: "0.5rem",
    maxWidth: "86.625rem",
    minWidth: "20rem",
    width: "75%",
    // backgroundColor: "red", //troubleshooting
    backgroundColor: "rgb(193,202,203,0.83)",
    "&:hover": {
        // backgroundColor: "rgb(167,215,231,0.22)",
        backgroundColor: "rgb(167,215,231,0.22)",
      },
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
  cardContainer: {
    // backgroundColor: "black",
    // minHeight: "21.313rem",
    width: "86.625rem",
    marginBottom: "5.813rem"
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
  }
}));

export default function CardContent(props) {
    
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const bgColor = props.bgColor;
  const textColor = "#000";
  // const textColor = bgColor==="#000" ? "textSecondary" : "textPrimary";
  console.log("matches: ", matches)
  console.log("background Color passed as props", bgColor)

  const paperWCodeUrl = "https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/papers_w_code.png?alt=media&token=953e5773-f0ca-4e11-9ee3-b0687886ab35"


  return (
    <Box className={classes.cardContainer} style={{"backgroundColor": bgColor}} display="flex" justifyContent="center" alignItems="start">
      <Box
        className={classes.card}
        component={Grid}
        boxShadow={1}
        container
        direction="row"
        justify={matches ? "center" : "space-between"}
        align="center"
        spacing={0}
      >
        <Grid item >
            <img className={classes.image} src={paperWCodeUrl} alt="publication"></img>
        </Grid>
        <Grid item>
          <Grid className={classes.gridItemContainer} container item direction="column" align="center" justify="center">
            <Grid item container direction="column" alight="center" justify="center">
              <Typography Wrap className={classes.sectionTitle} color={textColor} variant="h6" align="left">
               Twitter Sentiment Analysis
              </Typography>
              <Typography Wrap className={classes.sectionText}  color={textColor} align="left">
                Spark | PyTorch | Pipeline | D3js | WebApp
              </Typography>
              <Typography Wrap className={classes.sectionText}  color={textColor} align="left">
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}