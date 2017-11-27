import stringSimilarity from "string-similarity";

function getWords(issues){
    let string = ""
    let regex = /\b([A-Za-z']+){3}\b/g;
    for(let issue of issues){
        string += issue.title + " " + issue.body + " ";
    }
    return string.match(regex);
}

let getAnalyzedData = (rawData)=>{
    if(rawData.length === 0)
        return true;
    let wordRank = rankWordOccurrences(getOccurrences(getWords(rawData)));
    let mostCommonIssue = getTheMostCommonIssueTitle(extractTitles(rawData));
    return ({
        wordRank,
        mostCommonIssue
    });
}

function getOccurrences(words){
    let dict = {};
    for(let word of words){
        if(Object.prototype.hasOwnProperty.call(dict, word))
            dict[word] += 1;
        else
            dict[word] = 1;
    }

    return dict;
}

function rankWordOccurrences(dict){
    let rank = [];
    for(let i = 0; i < 10;i++){
        let word = Object.keys(dict).reduce(function(a, b){ return dict[a] > dict[b] ? a : b });
        rank.push({word, occurrences: dict[word]});
        delete dict[word];
    }

    return rank
}

function getTheMostCommonIssueTitle(titles){
    let best = {title: "", totalRating: 0};
    for(let title of titles){
        let totalRating = sumSimilarityRatings(stringSimilarity.findBestMatch(title, titles).ratings);
        if(totalRating > best.totalRating){
            best.title = title;
            best.totalRating = totalRating;
        }
    }
    return best;
}

function sumSimilarityRatings(ratings){
    let sum = 0;
    for(let rating of ratings){
        sum += rating.rating;
    }
    return sum;
}

function extractTitles(issues){
    let titles = [];
    for(let issue of issues){
        titles.push(issue.title);
    }

    return titles;
}

export default getAnalyzedData;
