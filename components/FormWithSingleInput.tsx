import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(255,255,255, 0.75)",
    margingTop: theme.spacing(3),
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.95)",
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function AvatarIcon() {
  return <i className="far fa-user" />;
}

const FormWithSingleInput = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Enter your email
        </InputLabel>
        <Input
          id="input-avatar"
          startAdornment={
            <InputAdornment position="start">
              <AvatarIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      {/* <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AvatarIcon />
            </InputAdornment>
          ),
        }}
      />
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AvatarIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
      </div>*/}
    </div>
  );
};

export default FormWithSingleInput;
