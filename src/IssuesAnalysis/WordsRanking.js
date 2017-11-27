import React from "react";
import PropTypes from "prop-types"
import Word from "./Word";

function WordsRanking({wordsInfo}){

    let renderRanking = ()=>{
        return wordsInfo.map((e,i)=>{
            return <Word {...e} key={i} />
        });
    };

    return (
        <div className="col-sm-12 col-md-6 most-used-words">
            <div className="analyze-column-inner">
                <h4>Most used words and their number of occurrences found:</h4>
                <ul className="word-list">
                    {renderRanking()}
                </ul>
            </div>
        </div>
    );
}

WordsRanking.propTypes = {
    wordsInfo: PropTypes.array.isRequired
}

export default WordsRanking;
