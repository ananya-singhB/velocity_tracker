// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

// Examples:
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  abc
// word2:    pqr
// merged: apbqcr

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const n = Math.min(word1.length, word2.length)
    const result = [];

    for (let i = 0; i < n; i++) {
        result.push(word1[i], word2[i]);
    }

    if (word1.length > n) {
        result.push(word1.slice(n));
    } else if (word2.length > n) {
        result.push(word2.slice(n));
    }

    return result.join('');
};

// Why array.join??

// Method -> Operation	-> Time Complexity
// str += 'x'	-> Reallocate + copy ->	O(n²) total
// arr.push('x') + arr.join('') ->	No reallocation in loop ->	O(n) total
// Space Complexity: O(m + n)
