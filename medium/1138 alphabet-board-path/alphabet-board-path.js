/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function (target) {
    let result = '';
    let x = 0, y = 0;
    for (let c = 0; c < target.length; c++) {
        let i = Math.floor((target.charCodeAt(c) - 97) / 5)
        let j = Math.floor((target.charCodeAt(c) - 97) % 5);
        if (i > x) {
            while (x != i) {
                if (x == 4 && y > 0)
                    break;
                result += "D";
                x++;
            }
        } else {
            while (x != i) {
                result += "U";
                x--;
            }
        }
        if (j > y) {
            while (y != j) {
                result += "R";
                y++;
            }
        } else {
            while (y != j) {
                result += "L";
                y--;
            }
        }
        if (x != i) {
            result += "D";
            x++;
        }
        result += "!";
    }
    return result;
}


console.log(alphabetBoardPath('code'))
