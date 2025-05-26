// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Examples:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 
// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

// SOlution: Use Divide and conquer

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    const commonPrefix = (str1, str2) => {
        let i = 0;
        while (i < str1.length && i < str2.length && str1[i] === str2[i]) {
            i++;
        }
        return str1.substring(0, i);
    };

    let helper = (left, right) => {
        if (left === right) return strs[left];
        let mid = Math.floor((left + right) / 2);
        let leftPrefix = helper(left, mid);
        let rightPrefix = helper(mid + 1, right);
        return commonPrefix(leftPrefix, rightPrefix);
    };

    return helper(0, strs.length - 1);
};

// Time Complexity: O(N * M).
// N is the number of strings in the input array. M is the length of the longest string.
// Space Complexity: O(log N), due to the recursion stack.
