import React, { useEffect, useState } from "react";
import { FormControl, InputAdornment, InputLabel, Input } from "@mui/material";
/*

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
*/

function AvatarIcon() {
  return <i className="far fa-user" />;
}

const FormWithSingleInput = () => {
  // const classes = useStyles();
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    setHasError(true);
  }, []);
  return (
    // <div className={classes.root}>
    <div>
      {/* <FormControl error={hasError} className={classes.margin}>*/}
      <FormControl error={hasError}>
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
