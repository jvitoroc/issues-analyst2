import React from 'react';
import PropTypes from "prop-types";

function Repository(props){
    return(
        <li onClick={() => props.onClick(props.name)} className="repository container">
            <div className="row">
                <div className="avatar col-12 col-sm-3 col-md-2 d-flex align-items-center justify-content-center"><img className="img-fluid" src={props.avatarUrl} alt={props.name}/></div>
                <div className="desc col-12 col-sm-9 col-m-10">
                    <h3 className="title">{props.name}</h3>
                    <div className="info">
                        <span className="stars"><span className="hightlight">Stars:</span> {props.starsCount}</span><br/>
                        <span className="issues"><span className="hightlight">Issues:</span> {props.issuesCount}</span>
                    </div>
                </div>
            </div>
        </li>
    );
}

Repository.propTypes = {
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    starsCount: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    issuesCount: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onClick: PropTypes.func.isRequired
};


export default Repository;
