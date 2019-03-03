import React from 'react';
import PropTypes from 'prop-types';


const Location = ({city}) => (
    <div>
        <h1>{city}</h1>
    </div>
);

Location.prototype = {
    city: PropTypes.string.isRequired,
};

export default Location;