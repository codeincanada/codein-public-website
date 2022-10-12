import React from "react";
import { List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

/*

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
*/

export function ArticleList() {
  // const classes = styles();

  return (
    // <List className={classes.listRoot}>
    <List>
      <ListItem
        // classes={classes}
        component={Link}
        href={
          "https://stackoverflow.com/questions/31649267/how-to-kill-a-nodejs-process-in-linux"
        }
        target="_blank"
        rel="noreferrer"
      >
        <span>
          [so] <pre>sudo pkill -f node</pre>
        </span>
      </ListItem>
      <ListItem
        // classes={classes}
        component={Link}
        href={"https://twitter.com/iamakulov/status/1385230664648253443"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography>[twitter] Memo and Context issues</Typography>
      </ListItem>
      <ListItem
        // classes={classes}
        component={Link}
        href={"https://overreacted.io/a-complete-guide-to-useeffect/#tldr"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography>[overreacted] useEffect as a pro</Typography>
      </ListItem>
      <ListItem
        // classes={classes}
        component={Link}
        href={
          "https://kentcdodds.com/blog/use-state-lazy-initialization-and-function-updates"
        }
        target="_blank"
        rel="noreferrer"
      >
        <Typography>[KCD] useState Lazy Initialization</Typography>
      </ListItem>
      <ListItem
        // classes={classes}
        component={Link}
        href={
          "https://kentcdodds.com/blog/how-to-write-a-react-component-in-typescript"
        }
        target="_blank"
        rel="noreferrer"
      >
        <Typography>[KCD] React + ️Typescript best practices</Typography>
      </ListItem>
      <ListItem
        // classes={classes}
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
        // classes={classes}
        component={Link}
        href={"https://reactjs.org/docs/optimizing-performance.html"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography>[React] Optimize your app</Typography>
      </ListItem>
      <ListItem
        // classes={classes}
        component={Link}
        href={"https://nextjs.org/blog/incremental-adoption"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography>[nextjs] How to start incrementally</Typography>
      </ListItem>
      <ListItem
        // classes={classes}
        component={Link}
        href={"https://nodejs.org/dist/latest/docs/api/"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography>[Node] Official docs</Typography>
      </ListItem>
      <ListItem
        // classes={classes}
        component={Link}
        href={
          "https://docs.microsoft.com/en-us/azure/cosmos-db/create-cassandra-nodejs"
        }
        target="_blank"
        rel="noreferrer"
      >
        <Typography>[Azure] Cassandra with Node</Typography>
      </ListItem>
      <ListItem
        // classes={classes}
        component={Link}
        href={"https://epicreact.dev/one-react-mistake-thats-slowing-you-down"}
        target="_blank"
        rel="noreferrer"
      >
        <Typography>[KCD] Composition with React ✅</Typography>
      </ListItem>
    </List>
  );
}

export default ArticleList;
