/**
 * @param {number[]} arr
 * @param {number} x
 * @return {number}
 */
class Solution {
    search(arr, x) {
        const idx = arr.findIndex((item) => item === x)
        return idx >= 0 ? idx : -1
    }
}

// Example
// Input: arr[] = [1, 2, 3, 4], x = 3
// Output: 2
// Explanation: There is one test case with array as [1, 2, 3 4] and element to be searched as 3. Since 3 is present at index 2, the output is 2.
