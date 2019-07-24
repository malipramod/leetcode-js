/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    if (!words || words.length === 0) return [];
    
    let uniqueWordsMap = {};
    let n = words.length, m = words[0].length;
    let len = n * m;
    let resp = [];
    for (word of words) uniqueWordsMap[word] = ~~uniqueWordsMap[word] + 1;
    for (let i = 0; i < s.length - len + 1; i++) {
        let temp = Object.assign({}, uniqueWordsMap);
        for (let j = i; j < i + len; j += m) {
            const str = s.substr(j, m);
            if (!(str in temp)) break;
            if (--temp[str] === 0) delete temp[str];
        }
        if (Object.keys(temp).length === 0) resp.push(i);
    }
    return resp;
};

console.log(findSubstring("", []))