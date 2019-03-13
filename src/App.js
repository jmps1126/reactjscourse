import React, { Component } from 'react';
import LocationList from './components/LocationList';
// import './App.css';
const cities = [
  "Buenos Aires,ar",
  "Bogota,col",
  "Mexico,mex",
  "Madrid,es"
];

class App extends Component {

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LocationList 
            cities={cities}
            onSelectedLocation={this.handleSelectedLocation}
          />
        </header>
      </div>
    );
  }
}

export default App;
