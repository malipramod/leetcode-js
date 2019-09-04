/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate1 = function (nums) {
    let myMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (myMap[nums[i]] !== undefined)
            return true;

        myMap[nums[i]] = i;
    }
    return false;
};

var containsDuplicate = function (nums) {
    return (nums.length !== new Set(nums).size)
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
