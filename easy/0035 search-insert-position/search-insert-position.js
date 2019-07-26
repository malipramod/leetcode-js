/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] >= target)
            break;
        i++
    }
    return i;
};

var searchInsert = function (nums, target) {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (target > nums[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}

var searchInsert = function (nums, target) {
    let low = 0;
    let high = nums.length;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] >= target) high = mid;
        else low = mid + 1;
    }
    return low;
};

console.log(searchInsert([1, 3, 5, 6], 2))