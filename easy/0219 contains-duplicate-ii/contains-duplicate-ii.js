/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let i = 0;
    let myMap = {};
    while (i < nums.length) {
        if (myMap[nums[i]] >= 0 && i - myMap[nums[i]] <= k)
            return true;

        myMap[nums[i]] = i;
        i++;
    }
    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))
console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,0,1,1], 1))
console.log(containsNearbyDuplicate([1,1,1,1], 2))
console.log(containsNearbyDuplicate([99,99], 2))

