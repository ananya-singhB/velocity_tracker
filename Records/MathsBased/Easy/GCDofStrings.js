// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Examples:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const lenGCD = gcd(str1.length, str2.length);

    return str1.slice(0, lenGCD);
};

// Time Complexity: O(m+n)
// Space Complexity: O(m+n)
