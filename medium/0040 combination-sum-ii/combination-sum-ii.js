/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);

    let result = [];
    let tempResult = [];
    search(0, target);
    return result;

    function search(current, leftoverTarget) {
        if (leftoverTarget === 0 && current === candidates.length)
            return result.push(tempResult.slice());

        if (leftoverTarget < 0 || current === candidates.length) return;

        tempResult.push(candidates[current]);

        search(current + 1, leftoverTarget - candidates[current]);
        tempResult.pop();
        if (tempResult[tempResult.length - 1] !== candidates[current])
            search(current + 1, leftoverTarget);
    }
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
console.log(combinationSum2([2, 5, 2, 1, 2], 5))
