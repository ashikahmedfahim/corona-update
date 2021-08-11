import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    margin: "1rem",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    marginTop: 12,
  },
  link: {
    textDecoration: "none",
    color: "white",
  }
});

const Country = (props) => {
  const classes = useStyles();

  const [data, setData] = useState({});

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return data.country ? (
    <Grid item xl={3} xs={12} >
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" color="primary">
            {data.country.length <= 15
              ? data.country
              : data.country.substring(0, 15) + "..."}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {data.capital_city}
          </Typography>
          <Typography variant="body2" component="p">
            Population: {data.population}
          </Typography>
          <Typography variant="body2" component="p">
            Confirmed: {data.confirmed}
          </Typography>
          <Typography variant="body2" component="p">
            Deaths: {data.deaths}
          </Typography>
          <Typography variant="body2" component="p">
            Updated: {data.updated}
          </Typography>
          <Button size="small" variant="contained" color="primary" className={classes.button}>
            <Link to="/country-history" className={classes.link}>See History</Link>
          </Button>
        </CardContent>
      </Card>
    </Grid>
  ) : (
    <></>
  );
};

export default Country;
