import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  spacing: 3,
  overrides: {},
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

export default theme;
