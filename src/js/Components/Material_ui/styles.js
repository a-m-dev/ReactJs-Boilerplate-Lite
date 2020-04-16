import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  list: { width: 200 },
  fullList: { width: "auto" },
}));

export default useStyles;
