import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
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
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    setHasError(true);
  }, []);
  return (
    <div className={classes.root}>
      <FormControl error={hasError} className={classes.margin}>
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
    </div>
  );
};

export default FormWithSingleInput;
