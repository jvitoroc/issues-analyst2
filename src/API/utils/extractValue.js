export default function extractValue(data){
    let regex = new RegExp("^((https?://)?(www.)?github.com/)?(.*)");
    let match = regex.exec(data);
    return match[4];
}
