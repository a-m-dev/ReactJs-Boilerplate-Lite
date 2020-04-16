import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: (props) =>
      props.color === "red"
        ? "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)"
        : "linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: (props) =>
      props.color === "red"
        ? "0 3px 10px 2px rgba(255, 105, 135, .3)"
        : "0 3px 10px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: 8,
  },
}));

export default useStyles;
