import React, { Component } from 'react';
import { connect } from 'react-redux';
import LocationList from './../components/LocationList'
import PropTypes from 'prop-types';
import { setSelectedCity } from './../actions';



class LocationListContainer extends Component {

    handleSelectedLocation = city => {
        this.props.setCity(city);
        console.log(this.props);
    };

    render() {
        return (
            <LocationList
                cities={this.props.cities}
                onSelectedLocation={this.handleSelectedLocation} />
        );
    }
}


const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value))
});

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);