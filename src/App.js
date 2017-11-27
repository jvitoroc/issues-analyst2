import React from "react";
import API from "./API";
import Header from "./Header";
import './css/bootstrap.min.css';
import './css/index.css';

export default function App(){
    return (
        <div className="app">
            <Header />
            <API maxReposLength={10} />
        </div>
    );
}
