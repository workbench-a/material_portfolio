import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import GitHubIcon from '@material-ui/icons/GitHub';

import useStyles from "./styles";
import { gitHubLink } from '../../constants/globals';

export default function Footer(props) {
    
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const bgColor = props.bgColor;
  console.log("matches: ", matches)
  console.log("background Color passed as props", bgColor)

  return (
    <Box className={classes.section} style={{"backgroundColor": bgColor}} display="flex" justifyContent="center" alignItems="center">
      <Grid className={classes.gridContainer} container direction="row" justify="center" align="center" spacing={0}>
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