// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Examples:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0

// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
 
// Constraints:
// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === "") {
        return 0;
    }
    for(let i = 0; i <= haystack.length - needle.length; i++){
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;
};
// Time Complexity: O(n * m)
// Space Complexity: O(1)
