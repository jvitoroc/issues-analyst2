import React from "react";
import RepositoryList from "./RepositoryList";
import Message from "../Message";
import PropTypes from "prop-types";

function View({pullIssues, error, data}){
    if(error)
        return <Message value={error} />
    else if(data.length !== 0)
        return <RepositoryList repos={data} onClick={pullIssues}  />
    else
        return <Message value={"No repositories found!"} />
};

View.propTypes = {
    error: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    pullIssues: PropTypes.func,
    data: PropTypes.array
};

export default View;
