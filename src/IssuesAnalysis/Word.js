import React from "react";
import PropTypes from "prop-types"

function Word ({word, occurrences}){
    return (
        <li><span className="hightlight">{word}</span>: {occurrences}</li>
    );
}

Word.propTypes = {
    word: PropTypes.string.isRequired,
    occurrences: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

export default Word;
