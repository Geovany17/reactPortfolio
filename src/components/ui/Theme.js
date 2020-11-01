import { createMuiTheme } from "@material-ui/core/styles";
const geoBlue = "#2196F3";
const geoOrange = "#FFBA60";
export default createMuiTheme({
  palette: {
    common: {
      blue: `${geoBlue}`,
      orange: `${geoOrange}`,
    },
    primary: {
      main: `${geoBlue}`,
    },
    secondary: {
      main: `${geoOrange}`,
    },
  },
});
