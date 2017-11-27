import axios from "axios";

test("Response returns status 200 if request is alright", ()=>{
    let url = `https://api.github.com/search/repositories?` +
                `q=node&` +
                `per_page=5&` +
                `client_id=085153c53d393d9f0d9c`;

    axios.get(url)
    .then((response)=>{
        expect(reponse.status).toBe(200);
    });

});

test("Response returns statusText 'OK' if request is alright", ()=>{
    let url = `https://api.github.com/search/repositories?` +
                `q=node&` +
                `per_page=5&` +
                `client_id=085153c53d393d9f0d9c`;

    axios.get(url)
    .then((response)=>{
        expect(reponse.statusText).toBe('OK');
    });

});

test("Response returns status 422 if request has a typo", ()=>{
    let url = `https://api.github.com/search/repositories?` +
                `Sq=node&` +
                `per_page=5&` +
                `client_id=085153c53d393d9f0d9c`;

    axios.get(url)
    .then((response)=>{
        expect(reponse.status).toBe(422);
    });

});

test("Response returns a callback with the Error object as the argument if request has a typo", ()=>{
    let url = `https://api.github.com/search/repositories?` +
                `Sq=node&` +
                `per_page=5&` +
                `client_id=085153c53d393d9f0d9c`;

    axios.get(url)
    .then((response)=>{

    }, (err)=>{
        expect(err).toBe(Error);
    });

});
