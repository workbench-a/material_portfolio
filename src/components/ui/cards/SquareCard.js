import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  root: {
    maxWidth: "25rem",
  },
});

export default function SquareCard(props) {
  const classes = useStyles();

  const { title, subtitle } = props.item;
  const detailsLink = "/notebook";
  const gitHubUrl = "https://www.github.com";
  const iconColor = "black";

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/papers_w_code.png?alt=media&token=953e5773-f0ca-4e11-9ee3-b0687886ab35"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography Wrap variant="body2" color="textPrimary" component="p" justifyContent="center">
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions direction="row" justify="center">
      <Link to={detailsLink} style={{"textDecoration": "none"}}><Button variant="outlined" style={{"color": iconColor, "borderColor": iconColor}}>Learn More</Button></Link>
      <a href={gitHubUrl}><GitHubIcon style={{"color": iconColor}}/></a>
      </CardActions>
    </Card>
  );
}
