import React from "react";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../styles/theme";

const styles = makeStyles({
  root: {
    fontFamily: "Nanum Brush Script, cursive",
    display: "flex",
    flexDirection: "column",
    fontSize: 72,
    color: "white",
    margin: "1rem",
    flex: 1,
  },
  image: {
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
  },
  text: {
    textShadow: "2px 2px black",
    padding: "0 2rem",
    filter: "drop-shadow(0 0 0.25rem white)",
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      padding: "0 8px",
      lineHeight: "0.75em",
    },
  },
});

export function BJJ() {
  const classes = styles();

  function getDay() {
    const day = new Date(Date.now()).getDay();
    switch (day) {
      case 0: {
        return "Sunday";
      }
      case 1: {
        return "Monday";
      }
      case 2: {
        return "Tuesday";
      }
      case 3: {
        return "Wednesday";
      }
      case 4: {
        return "Thursday";
      }
      case 5: {
        return "Friday";
      }
      case 6: {
        return "Saturday";
      }
      default: {
        return "Today";
      }
    }
  }

  return (
    <div
      className={classes.root}
      title="Credits: https://unsplash.com/photos/7MRajrPiTqw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
    >
      <Image
        className={classes.image}
        width={1080}
        height={720}
        src="/images/bjj-1080px.jpg"
        alt="Credits: https://unsplash.com/photos/7MRajrPiTqw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
      />
      <span className={classes.text}>{getDay()} is a great day to roll</span>
    </div>
  );
}
