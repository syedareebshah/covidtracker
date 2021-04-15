// import './App.css';

// function BarChart() {
//   return (
//     <div className="body">


//     </div>
//   );
// }

// export default BarChart;


import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Prec from '../../Prec';
import Cards from '../cards/Cards';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));





export default function NativeSelects() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    country: 'Global',

  });

  let [countries, setCuntries] = useState([{}]);

  let url = 'https://api.covid19api.com/countries'

  let fetchData = async () => {
    let response = await fetch(url)
      .then((response) => response.json())
      .then((json) => setCuntries(json));

  }
  useEffect(() => {
    fetchData();
  }, [])

  let y = [];

  countries.map((obj, ind) => {

    y.push(obj.Country)

  })

  const handleChange = (event) => {
    const country = event.target.name;
    setState({
      ...state,
      [country]: event.target.value,
    });
  };



  return (
    <div>
      <h1>Covid 19 Tracker App</h1>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Country</InputLabel>
        <Select
          native
          value={state.country}
          onChange={handleChange}
          inputProps={{
            name: 'country',
            // id: 'filled-age-native-simple',
          }}
        >
          <option value={"Global"}>Global</option>
          {y.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </Select>
      </FormControl>

      <Cards countryName={state} />
    </div>
  );
}
