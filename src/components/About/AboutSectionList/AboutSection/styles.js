import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  gridContainer: {
    maxWidth: "500rem",
    minWidth: "20rem",
    margin: 100,
    marginTop: 30,
    padding: 20,
  },
  gridItemContainer:{
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
    minHeight: "40rem",
  },
  sectionText: {
    maxWidth: "50rem",
    marginTop: "1rem",
  },
  sectionTitle: {
    maxWidth: "50rem",
    marginTop: "1rem",
  },
  image: {
    width: "100%",
    backgroundColor: "blue",
    margin: 0,
    padding: 0,
  },
  buttonContainer: {
    marginTop: "5rem",
  },
  buttonContainer2: {
    marginTop: "5rem",
  },
  button: {
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
  },
  button2: {
    marginRight: "2rem",
    marginTop: "0",
  },
  button3: {
    marginTop: "0.16rem",
  },
  buttonLink: {
    textDecoration: "none",
  },
}));