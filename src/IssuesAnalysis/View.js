import React from "react";
import MostCommonIssue from "./MostCommonIssue";
import WordsRanking from "./WordsRanking";
import Message from "../Message";
import "./IssuesAnalysis.css";
import PropTypes from "prop-types"

function View ({analysis, error}){
    if(error)
        return <Message value={error} />
    return (
        <div className="analyzed-data">
            <div className="row">
                <MostCommonIssue titleInfo={analysis.mostCommonIssue} />
                <WordsRanking wordsInfo={analysis.wordRank} />
            </div>
        </div>
    );
}

View.propTypes = {
    error: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    analysis: PropTypes.object
};

export default View;
