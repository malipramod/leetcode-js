/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits.length) return [];

    let results = [''];
    const digitLetterMap = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

    for (let i = 0; i < digits.length; i++) {
        let str = digitLetterMap[digits[i]];
        let tmpResult = [];
        for (let j = 0; j < results.length; j++) {
            let temp = results[j];
            for (let k = 0; k < str.length; k++) {
                tmpResult.push(temp + str[k]);
            }
        }
        results = tmpResult;
    }
    return results;
};

console.log(letterCombinations('23'));