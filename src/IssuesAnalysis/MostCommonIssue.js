import React from "react";
import PropTypes from "prop-types"

function MostCommonIssue ({titleInfo}){
    return (
        <div className="col-sm-12 col-md-6">
            <div className="analyze-column-inner">
                <h4>The most common kind of issue found:</h4>
                {titleInfo.title}
            </div>
        </div>
    );
}

MostCommonIssue.propTypes = {
    titleInfo: PropTypes.object.isRequired
}

export default MostCommonIssue;
