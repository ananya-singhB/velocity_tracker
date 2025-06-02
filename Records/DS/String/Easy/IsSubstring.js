// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// Examples:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Input: s = "axc", t = "ahbgdc"
// Output: false

// Constraints:
// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    while (j < s.length && i < t.length) {
        if (s[j] === t[i]) {
            j++;
        }
        i++;
    }
    
    return j === s.length;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
