var swap = function (nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let i, n = nums.length;
    for (i = n - 1; i > 0; i--)
        if (nums[i] > nums[i - 1])
            break;

    if (i == 0) {
        nums.reverse();
        // console.log(nums);
        return;
    }

    let min = i, x = nums[i - 1];
    for (let j = i + 1; j < n; j++) {
        if (nums[j] > x && nums[j] < nums[min])
            min = j;
    }
    swap(nums, i - 1, min);

    nums.slice(i, n).sort((a, b) => b - a).concat(nums.slice(0, i));
    console.log(nums);
};

nextPermutation([1,3,2])