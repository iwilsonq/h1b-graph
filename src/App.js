import React, { Component } from 'react';
import * as d3 from 'd3';
import _ from 'lodash';

import Preloader from './components/Preloader';
import { loadAllData } from './DataHandling';

class App extends Component {
  state = {
    techSalaries: [],
    countyNames: [],
    medianIncomes: []
  };

  componentDidMount() {
    loadAllData(data => this.setState(data));
  }

  render() {

    if (this.state.techSalaries.length) {
      return (
        <div className="App container">
          <h1>Loaded {this.state.techSalaries.length} salaries</h1>
        </div>
      );
    }

    return (
      <Preloader />
    );
  }
}

export default App;
