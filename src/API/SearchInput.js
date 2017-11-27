import React from "react";
import PropTypes from "prop-types";
import extractValue from "./utils/extractValue";
import "./SearchInput.css"

class SearchInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        this.props.onSearch(extractValue(this.state.value));
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    render(){
        return (
            <form onSubmit={this.onSubmit} className="search-input">
                <div className="container">
                    <div className="form-row">
                        <div className="col-8 col-sm-10">
                            <input onChange={this.handleChange} className="form-control" type="text" name="query"/>
                        </div>
                        <div className="col-4 col-sm-2">
                            <input type="submit" value="Search" className="btn btn-primary form-control"/>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
};

SearchInput.propTypes = {
    onSearch: PropTypes.func.isRequired
};

export default SearchInput;
