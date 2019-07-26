/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let low = 0, high = nums.length - 1;
    return searchItem(nums, low, high, target);
};

let searchItem = function (nums, l, h, target) {
    if (l > h) return -1;

    let minddle = Math.floor((l + h) / 2);
    if (nums[minddle] == target) return minddle;

    if (nums[l] <= nums[minddle]) {
        if (target >= nums[l] && target <= nums[minddle])
            return searchItem(nums, l, minddle - 1, target);

        return searchItem(nums, minddle + 1, h, target);
    }

    if (target >= nums[minddle] && target <= nums[h])
        return searchItem(nums, minddle + 1, h, target);

    return searchItem(nums, l, minddle - 1, target);
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 1));