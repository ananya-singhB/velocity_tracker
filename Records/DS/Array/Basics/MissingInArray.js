// You are given an array arr[] of size n - 1 that contains distinct integers in the range from 1 to n (inclusive). This array represents a permutation of the integers from 1 to n with one element missing. Your task is to identify and return the missing element.

// Examples:

// Input: arr[] = [1, 2, 3, 5]
// Output: 4
// Explanation: All the numbers from 1 to 5 are present except 4.

// Input: arr[] = [8, 2, 4, 5, 3, 7, 1]
// Output: 6
// Explanation: All the numbers from 1 to 8 are present except 6.

// Solution
// Calculate the sum of first n natural numbers
// Calculate the sum of elements in the given array
// The missing element will be the difference between the two sums


/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    missingNum(arr) {
        const n = arr.length + 1;
        const totalSum = (n * (n + 1)) / 2;
        const arrSum = arr.reduce((acc, num) => acc + num, 0);
        const missingElement = totalSum - arrSum;
        return missingElement;
    }
}
