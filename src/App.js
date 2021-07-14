import React from "react";

// api requests
import { fetchData } from "./api";

// components
import { Cards, Chart, CountryPicker } from "./components";

// static assets
import image from "./images/image.png";

// styles
import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const countryData = await fetchData(country)
    this.setState({ data: countryData, country: country });
  };
  
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker country={this.state.country} handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
