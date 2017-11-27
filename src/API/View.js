import React from "react";
import SearchInput from "./SearchInput";
import RepositoriesContainer from "../RepositoriesContainer";
import PropTypes from "prop-types";
import IssuesAnalysis from "../IssuesAnalysis";
import Message from "../Message";


function View({pullRepos, pullIssues, loading, repos, analysis, mounted, error}){
    let render = ()=>{
        if(mounted)
            return <Message value={"Pick a repository!"} />
        if(repos){
            return <RepositoriesContainer
                    pullIssues={pullIssues}
                    error={error}
                    data={repos} />

        }else if(analysis){
            return <IssuesAnalysis
                    error={error}
                    analysis={analysis} />
        }
    };

    return (
        <div className="main">
            <SearchInput onSearch={pullRepos} />
            <div className="container">
                {loading
                    ? <Message value={"Loading..."}/>
                    : render()
                }
            </div>
        </div>
    );
};

View.defaultProps = {
    mounted: true
}

View.propTypes = {
    mounted: PropTypes.bool,
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    repos: PropTypes.array,
    pullData: PropTypes.func
}

export default View;
