/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let range = [-1, -1];
    let left = extremeInsertionIndex(nums, target, true);
    if(left == nums.length || nums[left] != target){
        return range;
    }
    range[0] = left;
    range[1] = extremeInsertionIndex(nums, target, false) - 1;
    return range;
};

const extremeInsertionIndex = function (nums, target, left) {
    let low = 0, high = nums.length;
    while (low < high) {
        let middle = Math.floor((low + high) / 2);
        if (nums[middle] > target || (left && target == nums[middle])) {
            high = middle;
        } else {
            low = middle + 1;
        }
    }
    return low;
}

console.log(searchRange([5,7,7,8,8,10],5))