import React, { useState, useEffect } from "react";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { createPreFlight } from "../redux/actions/form.actions";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  },
  radioButtons: {
    display: "contents"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function AnsibleForm() {
  const classes = useStyles();
  const [values, setValues] = useState({
    operatingSystem: "linux",
    schedule: "now",
    multiline: ""
  });

  const [selectedDate, handleDateChange] = useState(
    new Date("2018-01-01T00:00:00.000Z")
  );

  const [determindDate, setDate] = useState(
    new Date("2018-01-01T00:00:00.000Z")
  );

  const dispatch = useDispatch();

  const handleScheduleChange = name => event => {
    if (event.target.value === "now") {
      setDate(new Date());
      handleDateChange(null);
    } else {
      handleDateChange(selectedDate);
      setDate(null);
    }
    setValues({ ...values, [name]: event.target.value });
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  // useEffect(() => {
  //   if (values.schedule === "now") {
  //     setValues({ ...values, determineDate: new Date() });
  //   }
  // });

  console.log(determindDate, ' ', selectedDate);
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
                onChange={handleScheduleChange("schedule")}
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
                    <KeyboardDateTimePicker
                      variant="dialog"
                      ampm={true}
                      value={selectedDate}
                      onChange={handleDateChange}
                      onError={console.log}
                      disablePast
                      format="MM/d/yyyy h:mm a"
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
                    fullWidth
                  />
                </div>
              </Grid>
              <Grid item xs={6} lg={6}>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() =>
                      dispatch(
                        createPreFlight({ values, selectedDate, determindDate })
                      )
                    }
                  >
                    PreFlight
                  </Button>
                </div>
              </Grid>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
