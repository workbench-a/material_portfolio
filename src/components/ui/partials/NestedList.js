import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  entryBody: {
    marginLeft: "3rem",
  }
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Explore the timeline for project progress updates.
      //   </ListSubheader>
      // }
      className={classes.root}
    >


      <ListItem button onClick={handleClick}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="October 2020" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

        <ListItem alignItems="flex-start">
        {/* <ListItemAvatar> */}
          {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
        {/* </ListItemAvatar> */}
        <ListItemText
          primary="Monday, November 9, 2020"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.entryBody}
                color="textPrimary"
              >
              </Typography>
              {"Portfolio MVP rebuilt in material UI and deployed."}
            </React.Fragment>
            }
          />
          </ListItem>


        </List>
      </Collapse>

          <ListItem button onClick={handleClick}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="November 2020" />
       
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            {/* <ListItemIcon>
              <StarBorder />
            </ListItemIcon> */}
            {/* <ListItemText primary="Starred" /> */}
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="December 2020" />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            {/* <ListItemIcon>
              <StarBorder />
            </ListItemIcon> */}
            {/* <ListItemText primary="Starred" /> */}
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="January 2021" />
       
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            {/* <ListItemIcon>
              <StarBorder />
            </ListItemIcon> */}
            {/* <ListItemText primary="Starred" /> */}
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="February 2021" />
       
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            {/* <ListItemIcon>
              <StarBorder />
            </ListItemIcon> */}
            {/* <ListItemText primary="Starred" /> */}
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
