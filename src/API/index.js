import React from "react";
import View from "./View";
import getRepos from "./utils/getRepos";
import getIssues from "./utils/getIssues";
import getAnalysis from "./utils/analyze";
import PropTypes from "prop-types";

const ERROR_MESSAGES = {
    'R404': 'No repositories found!',
    'I404': 'No issues found!',
    '0': 'A connection error occurred'
}

class RepositorySearch extends React.Component{
    constructor(props){
        super(props);

        this.pullRepos = this.pullRepos.bind(this);
        this.pullIssues = this.pullIssues.bind(this);
    }

    async pullRepos(query){
        try{
            this.setState({loading: true, error: false, mounted: false, analysis: null});
            let repos = await getRepos(query, this.props.maxReposLength);
            if(repos.length === 0)
                throw new Error('R404');
            this.setState({loading: false, repos});
        }catch(error){
            this.setState({loading: false, error: ERROR_MESSAGES[error.message], repos: true});
        }
    }

    async pullIssues(query){
        try{
            this.setState({loading: true, error: false, repos: null});
            let issues = await getIssues(query);
            let analysis;
            if(issues.length > 0)
                analysis = getAnalysis(issues);
            else
                throw new Error('I404');
            this.setState({loading: false, analysis: analysis});
        }catch(error){
            this.setState({loading: false, error: ERROR_MESSAGES[error.message], analysis: true});
        }
    }

    render(){
        return <View pullRepos={this.pullRepos} pullIssues={this.pullIssues} {...this.state} />
    }
};

RepositorySearch.defaultProps = {
    maxReposLength: 5
}

RepositorySearch.propTypes = {
    maxReposLength: PropTypes.number
}

export default RepositorySearch;
