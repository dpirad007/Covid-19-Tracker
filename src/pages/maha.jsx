import React, { Component } from "react";
import { StatePicker, StateCards, StateChart } from "../components";

import styles from "../App.module.css";

import { fetchMahaData, fetchDistData } from "../api/index";

class maha extends Component {
  state = {
    data: {
      active: 52,
      confirmed: 226,
      deceased: 9,
      recovered: 165,
    },
    state1: "Ahmednagar",
  };

  handleStateChange = async (state) => {
    const fetchedStateData = await fetchDistData(state);

    this.setState({ data: fetchedStateData, state1: state });
  };

  render() {
    return (
      <div className={styles.container}>
        <StateCards data={this.state.data} />
        <StatePicker handleStateChange={this.handleStateChange} />
        <StateChart data={this.state.data} state={this.state.state1} />
      </div>
    );
  }
}

export default maha;
