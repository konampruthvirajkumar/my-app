import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  },
  radioButtons: {
    display: "contents"
  }
}));

export default function AnsibleForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
      operatingSystem: 'linux',
      schedule: 'now',
      multiline: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <FormControl component="fieldset" className={classes.formControl}>
              <Grid item xs={6}>
                <FormLabel component="legend" required>
                  OS
                </FormLabel>
              </Grid>
              <RadioGroup
                aria-label="operatingSystem"
                name="operatingSystem"
                value={values.operatingSystem}
                onChange={handleChange("operatingSystem")}
              >
                <Grid item xs={6} className={classes.radioButtons}>
                  <div>
                    <FormControlLabel
                      value="linux"
                      control={<Radio />}
                      label="Linux"
                    />
                    <FormControlLabel
                      value="windows"
                      control={<Radio />}
                      label="Windows"
                    />
                  </div>
                </Grid>
              </RadioGroup>
              <Grid item xs={6}>
                <FormLabel component="legend" required>
                  Schedule
                </FormLabel>
              </Grid>
              <RadioGroup
                aria-label="schedule"
                name="schedule"
                value={values.schedule}
                onChange={handleChange("schedule")}
              >
                <Grid item xs={6} className={classes.radioButtons}>
                  <div>
                    <FormControlLabel
                      value="now"
                      control={<Radio />}
                      label="Now"
                    />
                    <FormControlLabel
                      value="schedule"
                      control={<Radio />}
                      label="Schedule"
                    />
                  </div>
                </Grid>
              </RadioGroup>
              <Grid item xs={12} lg={12}>
                <div>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Details"
                    multiline
                    rowsMax="8"
                    value={values.multiline}
                    onChange={handleChange("multiline")}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                  />
                </div>
              </Grid>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
