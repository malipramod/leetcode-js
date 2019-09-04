/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    if (k < 0 || nums.length > 1000) return false;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
                return true;
            }
        }
    }

    return false;
};

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0))
console.log(containsNearbyAlmostDuplicate([2, 1], 1, 1))
console.log(containsNearbyAlmostDuplicate([-1, -1], 1, -1))

console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2))
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3))