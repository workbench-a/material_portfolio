import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    flexFrow: 1,
  },
  blackPaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  whitePaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  blackSection: {
    backgroundColor: theme.palette.common.black,
  },
  whiteSection: {
    backgroundColor: theme.palette.common.white,
  },
  offWhiteSection: {
    backgroundColor: theme.palette.primary.light,
  },
  spacer: {
    margin: '500px',
  }
}))