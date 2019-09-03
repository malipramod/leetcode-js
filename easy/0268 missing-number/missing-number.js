/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    nums.sort((a, b) => a - b);

    if (nums.length !== nums[nums.length - 1])
        return nums.length;
    if (nums[0] !== 0) return 0;

    for (let i = 1; i < nums.length; i++) {
        let expectedNumber = nums[i - 1] + 1;
        if (nums[i] != expectedNumber)
            return expectedNumber;
    }
    return -1;
};

//Hashing
var missingNumber1 = function (nums) {
    let numbsMap = new Set();
    nums.map(num => numbsMap.add(num));

    let n = nums.length + 1;
    for(let i=0;i<n;i++){
        if(!numbsMap.has(i)) return i;
    }
    return -1
}

//Bit Manipulation
var missingNumber3 = function (nums) {
    let missing = nums.length;
    for (let i = 0; i < nums.length; i++) { 
        missing ^= i^nums[i];
    }
    return missing;
}

console.log(missingNumber3([3, 0, 1]))
console.log(missingNumber3([9, 6, 4, 2, 3, 5, 7, 0, 1]))
