import React, { useState, useEffect } from "react";

// components
import { Typography, Grid } from "@material-ui/core";
import Card from "./Card/Card.component";

// styles
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    setCardData([
      {
        cardTitle: "Infected",
        cardSubtitle: "Number of active COVID-19 cases.",
        value: confirmed?.value,
        cardStyle: function () {
            return styles[this.cardTitle.toLowerCase()];
        },
      },
      {
        cardTitle: "Recovered",
        cardSubtitle: "Number of recoveries from COVID-19.",
        value: recovered?.value,
        cardStyle: function () {
            return styles[this.cardTitle.toLowerCase()];
        },
      },
      {
        cardTitle: "Deaths",
        cardSubtitle: "Number of deaths attributed to COVID-19.",
        value: deaths?.value,
        cardStyle: function () {
            return styles[this.cardTitle.toLowerCase()];
        },
      },
    ]);
  }, [confirmed, recovered, deaths, lastUpdate, setCardData]);
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h4" component="h2">
        Global
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {cardData.map((cardProps, i) => (
          <Card
            cardStyle={cardProps.cardStyle()}
            cardTitle={cardProps.cardTitle}
            cardSubtitle={cardProps.cardSubtitle}
            value={cardProps.value}
            lastUpdate={lastUpdate}
            key={i}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
