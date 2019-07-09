function kth(arr1, s1, n1, arr2, s2, n2, k) {
    if (k < 1 || k > n1 + n2) return -1;

    if (n1 > n2) {
        return kth(arr2, s2, n2, arr1, s1, n1, k);
    }

    if (n1 === 0) {
        return arr2[s2 + k - 1];
    }

    if (k === 1) {
        return arr1[s1] < arr2[s2] ? arr1[s1] : arr2[s2];
    }

    var newK = k >> 1;

    if (n1 < newK) {
        newK = n1;
    }

    if (arr1[s1 + newK - 1] < arr2[s2 + newK - 1]) {
        return kth(arr1, s1 + newK, n1 - newK, arr2, s2, n2, k - newK);
    } else {
        return kth(arr1, s1, n1, arr2, s2 + newK, n2 - newK, k - newK);
    }

}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

    var n1 = nums1.length;
    var n2 = nums2.length;

    var mid = Math.floor((n1 + n2) / 2);
    if ((n1 + n2) % 2 === 0) {
        return (kth(nums1, 0, n1, nums2, 0, n2, mid) + kth(nums1, 0, n1, nums2, 0, n2, mid + 1)) / 2;
    } else {
        return kth(nums1, 0, n1, nums2, 0, n2, mid + 1);
    }
};