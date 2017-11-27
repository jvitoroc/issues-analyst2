import React from 'react';
import PropTypes from 'prop-types';

function View({value}){
    return (
        <div className="message-wrap">
            <h3>{value}</h3>
        </div>
    );
}

View.propTypes = {
    value: PropTypes.string.isRequired
};

export default View;
