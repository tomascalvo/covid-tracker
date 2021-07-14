import React, { useState, useEffect } from "react";

import { fetchCountries } from "../../api";

import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";

const CountryPicker = ({ country, handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchAPI();
  }, []);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {countries.length
          ? countries.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))
          : null}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
