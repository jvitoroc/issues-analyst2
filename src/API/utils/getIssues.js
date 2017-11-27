import axios from "axios";
import {checkStatus} from "./getRepos";

export default function getIssues(repoName){
    let query = `https://api.github.com/repos/${repoName}/issues?state=all&per_page=100`;

    return axios.get(query)
        .then(checkStatus)
        .then(extractRequired)
        .catch((err)=>{
            throw new Error('0');
        });
}

function extractRequired(response){
    return new Promise((resolve, reject)=>{
        if(response.data.length === 0)
            resolve([]);
        let issues = [];
        for(let issue of response.data){
            issues.push({title: issue.title, body: issue.body});
        }
        resolve(issues);
    });
}
