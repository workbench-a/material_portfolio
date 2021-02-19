import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: "3rem",
  },
  gridContainer: {
    maxWidth: "50rem",
    minWidth: "20rem",
    margin: 0,
    padding: 20,
  },
  gridItemContainer: {
    padding: 0,
    margin: 0,
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
  },
  spacerBot: {
    flexGrow: 1,
    marginTop: "10rem",
    border: 0,
  },
  subtitle: {
    fontStyle: "italic",
    color: theme.palette.primary.main,
  }, 
}));