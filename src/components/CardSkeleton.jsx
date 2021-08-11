import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  Skeleton: {
    minWidth: 275,
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    margin: "1rem",
  },
}));

const CardSkeleton = () => {
  const classes = useStyles();
  return (
    <Card className={classes.Skeleton} variant="outlined">
      <Box width={355}>
        <Box pt={3.5} pl={1}>
          <Skeleton variant="p" width="60%" />
        </Box>
        <Box pt={1} pl={1}>
          <Skeleton variant="p" width="30%" />
        </Box>
        <Box pt={2} pl={1}>
          <Skeleton variant="p" width="70%" />
        </Box>
        <Box pt={0.5} pl={1}>
          <Skeleton variant="p" width="60%" />
        </Box>
        <Box pt={0.5} pl={1}>
          <Skeleton variant="p" width="40%" />
        </Box>
        <Box pt={0.5} pl={1}>
          <Skeleton variant="p" pt={1} width="80%" />
        </Box>
        <Box pt={0.5} pl={1}>
          <Skeleton variant="p" width={100} height={30} />
        </Box>
      </Box>
    </Card>
  );
};

export default CardSkeleton;
