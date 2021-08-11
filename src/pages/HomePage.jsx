import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import data from "../data.json";
import Country from "../components/Country";
import CardSkeleton from "../components/CardSkeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "0rem 10rem",
  },
  Skeleton: {
    minWidth: 275,
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    margin: "1rem",
  },
  cardSpacing: {
    padding: 5,
  },
}));

const Home = () => {
  const [isSuccess, setIsSuccess] = useState({});
  const [isError, setIsError] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    setTimeout(()=>{
      setIsSuccess(data);
      setIsLoading(false);
    },3000)
  }, []);

  return (
    <div>
      <Grid container direction="row" className={classes.root}>
        {isLoading
          ? [0, 1, 2, 3, 4, 5, 6, 7, 8,9,10,11].map(() => <CardSkeleton />)
          : Object.keys(isSuccess).map((countryName) => (
              <Country data={isSuccess[countryName].All} key={countryName} />
            ))}
      </Grid>
    </div>
  );
};

export default Home;
