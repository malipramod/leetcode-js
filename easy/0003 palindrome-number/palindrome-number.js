/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();

    let start = 0, end = x.length - 1;
    while(start<=end){
        if (x[start] != x[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};
