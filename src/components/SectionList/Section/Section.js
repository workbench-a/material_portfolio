import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GitHubIcon from '@material-ui/icons/GitHub';
import useMediaQuery from '@material-ui/core/useMediaQuery'

import useStyles from "./styles";

export default function Section(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const bgColor = props.bgColor;
  const textColor = bgColor==="#000" ? "textSecondary" : "textPrimary";
  const iconColor = bgColor==="#000" ? theme.palette.common.white : theme.palette.common.black;
  const { title, subtitle, description, imgUrl, gitHubUrl, detailsLink, buttonText, gitHubDisplay } = props.item

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
        <Grid item >
            <img className={classes.image} src={imgUrl} alt="project_montage"></img>
        </Grid>
        <Grid item>
          <Grid className={classes.gridItemContainer} container item direction="column" align="center" justify="center">
              <Typography Wrap className={classes.sectionTitle} color={textColor} variant="h6" align="left">
               {title}
              </Typography>
              <Typography Wrap className={classes.sectionText}  color={textColor} align="left">
                {subtitle}
              </Typography>
              <Typography Wrap className={classes.sectionText}  color={textColor} align="left">
                {description}
              </Typography>
              <Grid className={classes.buttonContainer} container item direction="row" align="center" justify="space-between">
                  { gitHubDisplay ?
                  <>
                      <Grid item><Link to={detailsLink} style={{"textDecoration": "none"}}><Button variant="outlined" style={{"color": iconColor, "borderColor": iconColor}}>{buttonText}</Button></Link></Grid>
                      <Grid><a href={gitHubUrl} style={{"textDecoration": "none"}}><GitHubIcon style={{"color": iconColor, fontSize: "2.25rem", padding: "0", margin: "0"}}/></a></Grid>
                  </>
                  :
                  <Grid item><a href={detailsLink} style={{"textDecoration": "none"}}><Button variant="outlined" style={{"color": iconColor, "borderColor": iconColor}}>{buttonText}</Button></a></Grid>
                  }
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}