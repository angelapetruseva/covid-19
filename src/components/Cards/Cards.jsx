import React from "react";

// COMPONENTS
import Loading from "../Loading/Loading";

// COUNT UP
import CountUp from "react-countup";

// MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardInfected: {
    borderBottom: "10px solid #ff416c",
    margin: "0 10px",
    "@media screen and (max-width: 959px)": {
      margin: "0 10px 10px 10px",
    },
  },
  cardRecovered: {
    borderBottom: "10px solid #52BE80",
    margin: "0 10px",
    "@media screen and (max-width: 959px)": {
      margin: "0 10px 10px 10px",
    },
  },
  cardActive: {
    borderBottom: "10px solid #2980B9",
    margin: "0 10px",
    "@media screen and (max-width: 959px)": {
      margin: "0 10px 10px 10px",
    },
  },
  cardDeaths: {
    borderBottom: "10px solid #7F8C8D",
    margin: "0 10px",
    "@media screen and (max-width: 959px)": {
      margin: "0 10px 10px 10px",
    },
  },
}));

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const classes = useStyles();

  if (!confirmed) {
    return <Loading />;
  }
  return (
    <Grid container justify="center">
      <Grid
        item
        component={Card}
        xs={12}
        sm={5}
        md={2}
        className={classes.cardInfected}
      >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Infected
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of total cases of Covid-19
          </Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        component={Card}
        xs={12}
        sm={5}
        md={2}
        className={classes.cardRecovered}
      >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Recovered
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={recovered.value}
              duration={2}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of recovered cases from Covid-19
          </Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        component={Card}
        xs={12}
        sm={5}
        md={2}
        className={classes.cardActive}
      >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Active
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={confirmed.value - (recovered.value + deaths.value)}
              duration={2}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of active cases of Covid-19
          </Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        component={Card}
        xs={12}
        sm={5}
        md={2}
        className={classes.cardDeaths}
      >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Deaths
          </Typography>
          <Typography variant="h5">
            <CountUp start={0} end={deaths.value} duration={2} separator="," />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            Number of deaths caused by Covid-19
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default Cards;
