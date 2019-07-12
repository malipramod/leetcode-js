/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let i = 0, j = height.length - 1, maxArea = 0;
    while (i < j) {
        maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i));
        height[i] > height[j] ? j-- : i++;
    }
    return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));