import React from 'react';
import PropTypes from 'prop-types';
import "./Message.css";

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
