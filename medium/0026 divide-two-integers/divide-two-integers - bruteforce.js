/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);
    const sign = (divisor ^ dividend) < 0 ? -1 : 1;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let count = 0;
    while (dividend >= divisor) {
        dividend -= divisor;
        count++;
    }
    return count * sign > INT_MAX ? INT_MAX * sign : count *sign < INT_MIN ? INT_MIN * sign : count * sign;
};
console.log(divide(2147483647,-3));
