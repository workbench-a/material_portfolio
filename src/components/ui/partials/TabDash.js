import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "14rem",
    border: 0,
  },
}));

export default function CenteredTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      // <Paper className={classes.root} border={0} boxShadow={0}>
        <Tabs className={classes.root}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="black"
          centered
        >
          <Tab label="Coursework" />
          <Tab label="Software" />
          <Tab label="Exploratorials" />
          <Tab label="Resources" />
        </Tabs>
      // </Paper>
    );
  }