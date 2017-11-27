import axios from "axios";

function getRepositories(query, amount){
    let url = `https://api.github.com/search/repositories?` +
                `q=${query}&` +
                `per_page=${amount}&` +
                `client_id=085153c53d393d9f0d9c`;

    return axios.get(url)
    .then(checkStatus)
    .then(extractRequired)
    .catch((err)=>{
        throw new Error('0');
    });
}

function checkStatus(response){
    if(response.statusText !== "OK" || response.status !== 200){
        throw new Error('0');
    }
    return response;
}

function extractRequired(response){
    return new Promise((resolve)=>{
        let repos = response.data.items;
        let items = [];
        for(let repo of repos){
            items.push({
                name: repo.full_name,
                avatarUrl: repo.owner.avatar_url,
                issuesCount: repo.open_issues,
                starsCount: repo.stargazers_count
            });
        }
        setTimeout(()=>{
            resolve(items);
        }, 500);
    });
}

export default getRepositories;
export {checkStatus};
