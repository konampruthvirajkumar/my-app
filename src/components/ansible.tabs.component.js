import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AnsibleForm from "./ansible.form.component";
import TableResults from "./ansible.table.component";
import { useDispatch, useSelector } from "react-redux";
import { loadTableResults } from "../redux/actions/table.actions";
import { selectTableResults } from "../redux/selectors/table.selectors";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  barColor: {
    backgroundColor: theme.palette.background.default,
    color: "black"
  }
}));

export const SimpleTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const tableResults = useSelector(state => selectTableResults(state));
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          className={classes.barColor}
        >
          <Tab label="Input" {...a11yProps(0)} />
          <Tab
            label="Results"
            {...a11yProps(1)}
            onClick={() => dispatch(loadTableResults())}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AnsibleForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableResults tableResults={tableResults} />
      </TabPanel>
    </div>
  );
};
// const mapStateToProps = state => ({
//   tableResults: selectTableResults(state),
// });

// const mapDispatchToProps = {
//   loadTableResults
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TableResults);
