/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    let min = -Math.pow(2, 31);
    let max = Math.pow(2, 31) - 1;
    let reversed = 0;
    let sign = x >= 0 ? 1 : -1;
    
    x = Math.abs(x);
    while (x > 0) {
        let rem = x % 10;
        reversed = reversed * 10 + rem;
        x = parseInt(x / 10);
    }
    return reversed < min || reversed > max ? 0 : parseInt(reversed * sign);
};