/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let lcp = strs[0] ? strs[0] : '';
    for (let i = 0; i < strs.length - 1; i++) {
        lcp = getLongest(lcp, strs[i + 1], Math.min(lcp.length, strs[i].length));
    }
    return lcp;
};

var getLongest = function (str1, str2, n) {
    let resp = '';
    for (let i = 0; i < n; i++) {
        if (str1[i] != str2[i])
            break;
        resp += str1[i]
    }
    return resp;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["geeksforgeeks", "geeks", "geek"]))
console.log(longestCommonPrefix(["a", "b"]));
console.log(longestCommonPrefix(["aca", "cba"]));



