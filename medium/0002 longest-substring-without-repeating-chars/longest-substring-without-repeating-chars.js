/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0)
        return 0;

    let strMap = new Map();
    let max = 0;
    for (let i = 0, j = 0; i < s.length; i++) {
        if (strMap.get(s[i]) >= 0) {
            j = Math.max(j, (strMap.get(s[i])) + 1);
        }
        strMap.set(s[i], i);
        max = Math.max(max, i - j + 1);
    }
    return max;
};