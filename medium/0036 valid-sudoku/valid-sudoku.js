/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let sudokuSet = new Set();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                let val = board[i][j];
                if (sudokuSet.has(val + " in row " + i) ||
                    sudokuSet.has(val + " in column " + j) ||
                    sudokuSet.has(val + " in block " + parseInt(i / 3) + "-" + parseInt(j / 3))) {
                    return false;
                } else {
                    sudokuSet.add(val + " in row " + i);
                    sudokuSet.add(val + " in column " + j);
                    sudokuSet.add(val + " in block " + parseInt(i / 3) + "-" + parseInt(j / 3));
                }
            }
        }
    }
    return true;
};

console.log(isValidSudoku(
    [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]
));