/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let outputString = '';
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ' || i === 0) {
            let j = i === 0 ? i : i + 1;
            let word = '';
            while (s[j] !== ' ' && s[j] !== undefined) {
                word += s[j];
                j++;
            }
            outputString = (word.split('').reverse().join('') + ((i === s.length-1) ? "" : " "))+outputString;
        }
    }
    return outputString;
};

console.log(reverseWords("Let's take LeetCode contest"));