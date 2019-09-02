/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    // s.reverse();  //inbuild function
    if(!s.length) return;
    reverse(s, 0, s.length - 1);    //Recursion
};

var reverse = function (s, i, j) {
    if (i >= j) return;
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++; j--;
    return reverse(s, i, j);
}
reverseString(["H", "a", "n", "n", "a", "h"])