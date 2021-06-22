import React from "react";
import { Link, List, ListItem, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#000000d1",
    "&:hover": {
      backgroundColor: "#00000094",
    },
  },
});

export function ArticleList() {
  const classes = {
    root: useStyles().root,
  };
  return (
    <List>
      <ListItem
        classes={classes}
        component={Link}
        href={"https://twitter.com/iamakulov/status/1385230664648253443"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography color="secondary">Memo and Context issues</Typography>
      </ListItem>
      <ListItem
        classes={classes}
        component={Link}
        href={"https://overreacted.io/a-complete-guide-to-useeffect/#tldr"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography color="secondary">useEffect as a pro</Typography>
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
        <Typography color="secondary">useState Lazy Initialization</Typography>
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
        <Typography color="secondary">
          React➕️Typescript best practices
        </Typography>
      </ListItem>
      <ListItem
        classes={classes}
        component={Link}
        href={"https://www.robinwieruch.de/react-hooks-fetch-data"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography color="secondary">
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
        <Typography color="secondary">Optimize your React app</Typography>
      </ListItem>
      <ListItem
        classes={classes}
        component={Link}
        href={"https://tailwindcss.com/docs/cursor"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography color="secondary">Tailwind docs 📌</Typography>
      </ListItem>
      <ListItem
        classes={classes}
        component={Link}
        href={"https://nextjs.org/blog/incremental-adoption"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography color="secondary">
          How to incrementally start using Next.js
        </Typography>
      </ListItem>
      <ListItem
        classes={classes}
        component={Link}
        href={"https://nodejs.org/dist/latest/docs/api/"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography color="secondary">Node.js official docs</Typography>
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
        <Typography color="secondary">Cassandra with Node (Azure)</Typography>
      </ListItem>
      <ListItem
        classes={classes}
        component={Link}
        href={"https://epicreact.dev/one-react-mistake-thats-slowing-you-down"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography color="secondary">Composition with React ✅</Typography>
      </ListItem>
    </List>
  );
}

export default ArticleList;
