import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  parent: {
    justifyContent: "center",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));

const Search = (props) => {
  const history = useHistory();
  const classes = useStyles();

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      props.searchValue(event.target.value);
      history.push("/search");
      event.target.value = "";
    }
  };
  return (
    <Box display="flex" justifyContent="center">
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onKeyDown={handleSearch}
      >
        <TextField id="standard-basic" label="Search here..." />
      </form>
    </Box>
  );
};

export default Search;
