/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    let first = 0, second = 0, third = 1;
    let result = 0;
    n = n+1;
    if (n == 0) return first;
    if (n == 1) return second;
    if (n == 2) return third;

    while (n > 2) {
        result = first + second + third;
        first = second;
        second = third;
        third = result;
        n--;
    }
    return result;
};

console.log(tribonacci(3))