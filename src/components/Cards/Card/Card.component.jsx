import React from "react";
import cx from 'classnames';
import CountUp from "react-countup";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import styles from "./Card.module.css";

const CardComponent = ({ cardTitle, cardSubtitle, value, lastUpdate, cardStyle }) => {
  return (
    <Grid item component={Card} className={cx(styles.card, cardStyle)} xs={12} md={3}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {cardTitle}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value || 0} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2">{cardSubtitle}</Typography>
      </CardContent>
    </Grid>
  );
};

export default CardComponent;
