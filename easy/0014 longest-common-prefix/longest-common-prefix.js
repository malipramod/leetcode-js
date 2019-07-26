/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let [minLength,minIndex] = findMinLength(strs);
    let currentChar = '';
    let minLengthString = strs[minIndex];
    if(!minLengthString) return '';
    let i = 0;
    for (; i < minLength; i++) {
        currentChar = strs[0][i];
        let same = true;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] != currentChar) {
                same = false;
                break;
            }
        }
        if (!same) break;
    }
    return minLengthString.substr(0, i);
}

var findMinLength = function (arr) {
    let min = arr[0] ? arr[0].length : 0;
    let minIndex = arr[0] ? 0 : -1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < min) {
            minIndex = i;
            min = arr[i].length;
        }
    }
    return [min, minIndex];
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["geeksforgeeks", "geeks", "geek"]))
console.log(longestCommonPrefix(["a", "b"]));
console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix(["aca", "cba"]));