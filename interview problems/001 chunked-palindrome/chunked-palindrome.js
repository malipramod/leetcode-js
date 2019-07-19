/**
 * 
 * @param {string} str 
 * @returns {number}
 */
const chunkedPalidrome = function (str) {
    let count = 0, i = 0, j = 1;
    let y = str.length, x = str.length - 1;

    while (i <= x) {
        if (i == x) {
            count++;
            break;
        }

        let substr1 = str.substring(i, j);
        let substr2 = str.substring(x, y);
        if (substr1 == substr2) {
            count+=2;
            i = j;
            j++;
            y = x;
            x--;
        }else{
            j++;
            x--;
        }
    }
    return count;
}

console.log(chunkedPalidrome("a"))
console.log(chunkedPalidrome("voabcvo"))
console.log(chunkedPalidrome("vovo"))
console.log(chunkedPalidrome("volvolvo"))
console.log(chunkedPalidrome("aaaaaa"))
console.log(chunkedPalidrome("abcbad"))
console.log(chunkedPalidrome("volvol"))