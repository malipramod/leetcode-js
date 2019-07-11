/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    if (x == 0) return true;
    let xReversed = 0, xCopy = x;
    while (xCopy > 0) {
        xReversed = (xReversed * 10) + (xCopy % 10);
        xCopy = parseInt(xCopy / 10);
    }
    return x == xReversed ? true : false;
};

console.log(isPalindrome(1221))
