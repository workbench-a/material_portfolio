import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from "@material-ui/core/styles";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import profile from '../../../assets/img/profile_pic.png';


import CategoryHeader from '../partials/CategoryHeader';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    margin: 20,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
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
  // details: {
  //   display: 'flex',
  //   flexDirection: 'column',
  // },
  // content: {
  //   flex: '1 0 auto',
  // },
  // cover: {
  //   // marginBottom: ,
  // },
}))

export default function ContentCard() {
  const classes = useStyles();
  const theme = useTheme();
  const thumbnail = 'papers_w_code.png';
  const avatarUrl = 'https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/'+ thumbnail + '?alt=media&token=8d63660a-072a-425f-8200-6e12eb327b2f';

  return (
      <Fragment>

<Card className={classes.root}>
<CardMedia
        component="img"
        className={classes.cover}
        image={'https://via.placeholder.com/20x20'}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        </div>
      </div>

    </Card>

        {/* <Card className={classes.card} borderRadius={100}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Live From Space
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Mac Miller
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            square
            component="img"
            className={classes.cover}
            image={'https://via.placeholder.com/20x20'}
            title="Live from space album cover"
          />
        </Card> */}
{/* <div style={{padding: '24px'}}>
        <Card style={{width: '250px'}}>
          <CardContent>
            <h1>Header</h1>
            <CardMedia Square src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg" />
          </CardContent>
        </Card>
        </div> */}
          {/* <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          square
          className={classes.media}
          component="img" 
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/papers_w_code.png?alt=media&token=8d63660a-072a-425f-8200-6e12eb327b2f"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card> */}

      </Fragment>
  );
}