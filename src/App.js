import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities = [
  "Buenos Aires,ar",
  "Bogota,col",
  "Mexico,mex",
  "Madrid,es"
];

class App extends Component {

  constructor(){
    super();

    this.state = { city: null};
  }

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
    this.setState({ city });
  };

  render() {

    const { city } = this.state;

    return (
      <Grid>
        <Row>
          <AppBar position = 'sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                  Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <header className="App-header">
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectedLocation}/>
            </header>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {
                  city ? <ForecastExtended city = {city}></ForecastExtended> : <h1>No hay clima extendido para visualizar</h1>
                }
                
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
