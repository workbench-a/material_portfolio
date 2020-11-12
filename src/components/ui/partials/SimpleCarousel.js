import React, {Fragment} from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    paper: {
        height: '30em',
    },
    carousel: {
        borderColor: 'white',
        // backgroundColor: 'yellow',
        height: "25rem",
        // width: "80%",
    },
    section: {
        // backgroundColor: "black",
        // minHeight: "50rem",
        // maxWidth: "60rem",
        // width: "80%",
        // backgroundColor: 'green',
      },
      rootSection: {
        // width: "100%",
        // height: "50rem",
        // backgroundColor: 'orange',
      },
    gridItem: {
        // backgroundColor: 'blue',
        padding: 0,
        // marginTop: '1rem',
    },
    slideImage: {
        // height: '100%',
        width: '50rem'
        // backgroundColor: "brown",
    },
    title: {
        // marginBottom: "1rem",
    }
  }));

export default function SimpleCarousel(props){
    const classes = useStyles();

    var items = [
        {
            title: "Research",
            subtitle: "A laboratory in the Clouds",
            description: "Reasearch Image",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/nn_architecture.png?alt=media&token=2fbfbd09-9fee-40e6-8f0e-6d51076b4eba",
            imageScale: "100%",
            bgcolor: "F6F6F6",
        },
        {
            title: "Apps and Pipelines",
            subtitle: "Workshop for Deliverables",
            description: "Projects Image",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/app_uml.png?alt=media&token=38fea4d1-7d71-40ee-aa3f-7ab5258e2ce4",
            imageScale: "80%",
            bgColor: "F6F6F6",
        },
        {
            title: "Tutorials, Case Studies, and Resources",
            subtitle: "",
            description: "Resources Image",
            image: "https://firebasestorage.googleapis.com/v0/b/portfolio-b992f.appspot.com/o/notebook_preview.png?alt=media&token=6bda29e9-9a33-45f4-a017-f9fb6d0f2152",
            imageScale: "100%",
            bgColor: "F6F6F6",
        }
    ]
 
    return (
        <Box className={classes.rootSection} style={{"backgroundColor": "#F6F6F6"}} display="flex" justifyContent="center" alignItems="center">
        <Carousel className={classes.carousel} animation="slide" interval="3500" justify="center" align="center" navButtonsAlwaysVisible={false} indicators={false}>
            {
                items.map( (item, i) => {
                return(
                <Item className={classes.carouselItem} key={i} item={item} />
                )
            })
            }
        </Carousel>
        </Box>
    )
}
 
function Item(props){
    const classes = useStyles();
    const bgColor = props.bgColor
    return (
            <Grid
            container
            direction="row"
            justify="center"
            align="center"
            spacing={0}
            >
            <Grid item className={classes.gridItem} direction="column" justify="center" align="center">
                {/* <Typography className={classes.title} variant="h4" justify="center" align="center">
                    {props.item.title}
                </Typography> */}
                <img className={classes.slideImage} src={props.item.image} alt="project_montage" style={{"height": props.item.imageScale}}></img>
                {/* <Typography variant="h6">
                    {props.item.subtitle}
                </Typography> */}
            </Grid>
            {/* <Grid item className={classes.gridItem} direction="column" justify="center" align="center">
                <Typography variant="h6">
                    {props.item.subtitle}
                </Typography>
            </Grid> */}
        </Grid>
           
    )
}