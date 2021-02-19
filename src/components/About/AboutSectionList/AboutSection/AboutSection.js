import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import useMediaQuery from '@material-ui/core/useMediaQuery'

import useStyles from './styles';
import { wikiLink, calendarLink, bootcampLink, cvLink } from '../../../../constants/about';
import { gitHubLink, linkedInLink } from '../../../../constants/globals';

const AboutSection = (props) => {
    
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const bgColor = props.bgColor;
  const textColor = bgColor==="#000" ? "textSecondary" : "textPrimary";
  const iconColor = bgColor==="#000" ? theme.palette.common.white : theme.palette.common.black;

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
        <Grid item>
          <Grid className={classes.gridItemContainer} container item direction="column" align="center" justify="center">
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
                <Grid item className={classes.button}>
                  <a className={classes.buttonLink} href={calendarLink}>
                    <Button variant="outlined"  style={{"color": iconColor, "borderColor": iconColor}}>
                      Live Calendar
                    </Button>
                  </a>
                </Grid>
                <Grid item className={classes.button}>
                  <a className={classes.buttonLink} href={wikiLink}>
                    <Button variant="outlined" style={{"color": iconColor, "borderColor": iconColor}}>
                      The Open Bootcamp Wiki
                    </Button>
                  </a>
                </Grid>
                <Grid item className={classes.button}>
                  <a className={classes.buttonLink} href={bootcampLink}>
                    <Button variant="outlined" style={{"color": iconColor, "borderColor": iconColor}}>
                      Self-Directed Learning
                    </Button>
                  </a>
                </Grid>
                <Grid item className={classes.button}>
                  <a className={classes.buttonLink} href={cvLink}>
                    <Button variant="outlined" style={{"color": iconColor, "borderColor": iconColor}}>
                      Traditional CV
                    </Button>
                  </a>
                </Grid>
              </Grid>
              <Grid className={classes.buttonContainer2} container item direction="row" align="center" justify="center">
                <Grid item className={classes.button2}>
                  <a href={linkedInLink}>
                    <LinkedInIcon fontSize="large" style={{"color": iconColor, "fontSize": "2.6rem"}}/>
                  </a>
                </Grid>
                <Grid item className={classes.button3}>
                  <a href={gitHubLink}>
                    <GitHubIcon fontSize="large" style={{"color": iconColor}}/>
                  </a>
                </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutSection;