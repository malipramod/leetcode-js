/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    let arr = [];
    for (let i = 0; i < numRows; i++) {
        arr[i] = [];
    }
    let counter = 0, strLen = s.length;

    while (counter < strLen) {
        for (let i = 0; i < arr.length && counter < strLen; i++) {
            arr[i].push(s[counter++]);
        }
        for (let j = numRows - 2; j >= 1 && counter < strLen; j--) { 
            arr[j].push(s[counter++]);
        }
    }
    return arr.map(arr => arr.join('')).join('');
};