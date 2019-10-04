import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import Ansible from "./components/ansible.component";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import myTheme from "./ui/theme/theme.json";

const theme = createMuiTheme(myTheme);

function App() {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Ansible />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
