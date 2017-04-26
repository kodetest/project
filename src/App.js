import React, { Component } from 'react';

import DayPicker from './DayPicker';
import Flights from './Flights';

import './App.css';

const Header = props => (
  <div className="App-header">
    <div className="App-header-link">{'<'}</div>
    <div className="App-header-caption">
      {`${props.cities.from} ✈ ${props.cities.to}`}
    </div>
  </div>
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      cities: {
        from: 'Москва',
        to: 'Тюмень',
      },
      flights: { departure: '', data: [] },
    };
  }
  getFlights(searchDate) {
    const flightsArr = [];
    for (let i = 0; i < ~~(Math.random() * 20); i++) {
      const outdate = ~~(Math.random() * 20);
      const indate = outdate + ~~(Math.random() * 4);
      flightsArr.push({
        outdate: outdate + ':00',
        indate: indate + ':00',
        price: `${~~(Math.random() * 6000)} руб.`,
      });
    }
    this.setState({ flights: { departure: searchDate, data: flightsArr } });
  }
  render() {
    return (
      <div className="App">
        <Header cities={this.state.cities} />
        <DayPicker onSelect={this.getFlights.bind(this)} />
        <Flights flights={this.state.flights} />
      </div>
    );
  }
}

export default App;
