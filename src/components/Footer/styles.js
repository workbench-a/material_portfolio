import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  gridContainer: {
    maxWidth: "50rem",
    minWidth: "20rem",
    margin: 0,
    padding: 20,
  },
  gridItemContainer:{
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
  },
  section: {
    backgroundColor: theme.palette.primary.main,
    height: "5rem",
  },
  image: {
    backgroundColor: "blue",
    margin: 0,
    padding: 0,
  },
  footerText: {
    color: theme.palette.common.white,
  },
  icons: {
    color: theme.palette.common.white,
    marginLeft: '1rem',
  }
}));