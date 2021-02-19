import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

export default function Section(props) {
    
  const classes = useStyles();
  const bgColor = props.bgColor;
  const { title, subtitle, description} = props.header

  return (
    <div className={classes.root}>
      <Box className={classes.section} style={{"backgroundColor": bgColor, "height": "0rem"}} display="flex" justifyContent="center" alignItems="start">
        <Grid className={classes.gridContainer} container direction="row" justify="center" align="center" spacing={0}>
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