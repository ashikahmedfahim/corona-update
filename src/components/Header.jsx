import React from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  headerTag: {
    margin: "3rem 0rem",
  },
});

const Header = () => {
  const classes = useStyles();

  const history = useHistory();

  const handleClick = (event) => {
    history.push("/");
  };

  return (
    <div>
      <Typography
        variant="h2"
        text="center"
        color="primary"
        className={classes.headerTag}
      >
        <Box textAlign="center" m={1} onClick={handleClick}>
          Global Corona Update
        </Box>
      </Typography>
    </div>
  );
};

export default Header;
