import UnitsCard from "./InfoCardUnits";
import React, { Component } from "react";
const axios = require("axios");

class Units extends Component {
  constructor(props) {
    super(props);
    this.state = {
      units: []
    };
  }

  fetchData() {
    axios
      .get("http://localhost:3001/allData/units")
      .then(response => {
        // handle success
        // console.log("Success");
        this.setState({ units: response.data });
      })
      .catch(error => {
        // handle error
        console.error(error);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    // this.fetchData();
    const unit = this.state.units[0] || {};
    console.log(this.state.units[0]);
    return <UnitsCard {...unit} />;
  }
}

export default Units;
