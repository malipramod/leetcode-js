/**
 * Brute force
 * @param {number[]} height
 * @return {number}
 */
var trapBF = function (height) {
    let result = 0;
    for (let i = 1; i < height.length - 1; i++) {
        let leftMax = 0, rightMax = 0;
        for (let j = i; j >= 0; j--)
            leftMax = Math.max(leftMax, height[j]);

        for (let j = i; j < height.length; j++)
            rightMax = Math.max(rightMax, height[j])

        result += Math.min(leftMax, rightMax) - height[i];
    }
    return result;
};

/**
 * Dynamic Programming
 * @param {number[]} height
 * @return {number}
 */
var trapDP = function (height) {
    let result = 0;
    let n = height.length;
    let leftMax = [], rightMax =[];

    leftMax[0] = height[0];
    rightMax[n - 1] = height[n - 1];

    for (let i = 1; i < n - 1; i++) {
        leftMax[i] = Math.max(leftMax[i-1], height[i]);
    }

    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    for (let i = 1; i < n - 1; i++) {
        result += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return result;
}

/**
 * Two Pointer
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = 0, right = height.length - 1;
    let leftMax=0,rightMax=0;
    let result = 0;

    while (left < right) {
        if (height[left] < height[right]) { 
            height[left] >= leftMax ? (leftMax = height[left]) : result += (leftMax - height[left]);
            left++;
        }else{
            height[right] >= rightMax ? (rightMax = height[right]) : result += (rightMax - height[right]);
            right--;
        }
    }
    return result;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]))