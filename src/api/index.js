import axios from "axios";

const url = "https://covid19.mathdro.id/api";

// async/await is the most current way to deal with promises (more current than .then/.catch)

export const fetchData = async (country) => {
  let dynamicURL = url;
  if (country) {
    dynamicURL = `${url}/countries/${country}`;
  }
  try {
    // the object destructuring syntax used here takes the data field out of the response and just four select fields from the data object
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(dynamicURL);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    // parentheses syntax: instant return of an object
    const modifiedData = data.map((day) => ({
      confirmed: day.confirmed.total,
      deaths: day.deaths.total,
      date: day.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

// the api stopped reporting global daily data, so this modified api call fetches daily data for the US only
// the second api stopped reporting data as well, so back to the first
// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');

//     // parentheses syntax: instant return of an object
//     return data.map(({
//       positive,
//       recovered,
//       death,
//       dateChecked: date,
//     }) => ({
//       confirmed: positive,
//       recovered,
//       deaths: death,
//       date,
//     }));
//   } catch (error) {
//     console.log(error);
//   }
// };

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
