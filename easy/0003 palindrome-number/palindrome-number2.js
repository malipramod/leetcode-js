/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let xReversed = 0;

    let xCopy = Math.abs(x);
    let sign = Math.sign(x);

    while (xCopy > 0) {
        xReversed = (xReversed * 10) + (xCopy % 10);
        xCopy = parseInt(xCopy / 10);
    }
    if (x * sign == xReversed * sign)
        return true;
    else
        return false;
};

console.log(isPalindrome(1221))
