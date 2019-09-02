/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
    for (let i = 0; i < A.length; i++) {
        if (Array.isArray(A[i])) {
            A[i] = A[i].reverse();
            for (let j = 0; j < A[i].length; j++) {
                A[i][j] = 1 - A[i][j];
            }
        }
    }
    return A;
    // for (let i = 0; i < A.length; i++) {
    //     A[i] = A[i].map(v => 1-v).reverse()
    // }
    // return A

    //Single line solution
    // return A.map(i => i.reverse().map(j => 1 - j))   
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]))
console.log(flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]));
console.log(flipAndInvertImage([12]))