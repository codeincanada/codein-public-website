import React from "react";
import { Link, List, ListItem, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  root: {
    color: "white",
    borderLeft: "5px solid transparent",
    "&:hover": {
      backgroundColor: "#3333336e",
      borderColor: "crimson",
    },
  },
  listRoot: {
    overflow: "auto",
    maxHeight: "100vh",
  },
});

export function ArticleList() {
  const classes = styles();

  return (
    <List className={classes.listRoot}>
      <ListItem
        classes={classes}
        component={Link}
        href={"https://twitter.com/iamakulov/status/1385230664648253443"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography>Memo and Context issues</Typography>
      </ListItem>
      <ListItem
        classes={classes}
        component={Link}
        href={"https://overreacted.io/a-complete-guide-to-useeffect/#tldr"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography>useEffect as a pro</Typography>
      </ListItem>
      <ListItem
        classes={classes}
        component={Link}
        href={
          "https://kentcdodds.com/blog/use-state-lazy-initialization-and-function-updates"
        }
        target="_blank"
        rel="noreferrer"
      >
        <Typography>useState Lazy Initialization</Typography>
      </ListItem>
      <ListItem
        classes={classes}
        component={Link}
        href={
          "https://kentcdodds.com/blog/how-to-write-a-react-component-in-typescript"
        }
        target="_blank"
        rel="noreferrer"
      >
        <Typography>React➕️Typescript best practices</Typography>
      </ListItem>
      <ListItem
        classes={classes}
        component={Link}
        href={"https://www.robinwieruch.de/react-hooks-fetch-data"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography>
          An extensive guide on how to fetch data with Hooks
        </Typography>
      </ListItem>
      <ListItem
        classes={classes}
        component={Link}
        href={"https://reactjs.org/docs/optimizing-performance.html"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography>Optimize your React app</Typography>
      </ListItem>
      <ListItem
        classes={classes}
        component={Link}
        href={"https://tailwindcss.com/docs/cursor"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography>Tailwind docs 📌</Typography>
      </ListItem>
      <ListItem
        classes={classes}
        component={Link}
        href={"https://nextjs.org/blog/incremental-adoption"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography>How to incrementally start using Next.js</Typography>
      </ListItem>
      <ListItem
        classes={classes}
        component={Link}
        href={"https://nodejs.org/dist/latest/docs/api/"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography>Node.js official docs</Typography>
      </ListItem>
      <ListItem
        classes={classes}
        component={Link}
        href={
          "https://docs.microsoft.com/en-us/azure/cosmos-db/create-cassandra-nodejs"
        }
        target="_blank"
        rel="noreferrer"
      >
        <Typography>Cassandra with Node (Azure)</Typography>
      </ListItem>
      <ListItem
        classes={classes}
        component={Link}
        href={"https://epicreact.dev/one-react-mistake-thats-slowing-you-down"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography>Composition with React ✅</Typography>
      </ListItem>
    </List>
  );
}

export default ArticleList;
