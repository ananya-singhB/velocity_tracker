// Given two binary strings a and b, return their sum as a binary string.

// Examples:
// Input: a = "11", b = "1"
// Output: "100"

// Input: a = "1010", b = "1011"
// Output: "10101"
 
// Constraints:
// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = ''
    let carry = 0
    let i = a.length - 1;
    let j = b.length - 1;

    while(i >= 0 || j >= 0 || carry){
        const bitA = i >= 0 ? a[i] - '0' : 0
        const bitB = j >= 0 ? b[j] - '0' : 0

        let sum = bitA + bitB + carry
        res = (sum % 2) + res
        carry = Math.floor(sum / 2)

        i--
        j--
    }

    return res
};
// Time Complexity: O(max(n,m))
// Space Complexity: O(max(n,m))
