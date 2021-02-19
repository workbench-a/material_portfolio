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
    minHeight: "40rem",
  },
  sectionText: {
    maxWidth: "20rem",
    marginTop: "1rem"
  },
  sectionTitle: {
    maxWidth: "20rem",
    marginTop: "1rem",
  },
  image: {
    width: "100%",
    margin: 0,
    padding: 0,
  },
  buttonContainer: {
    marginTop: "1.7rem",
  },
}));