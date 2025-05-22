// Given an array arr[]. The task is to find the largest element and return it.

// Examples:
// Input: arr = [1, 8, 7, 56, 90]
// Output: 90
// Explanation: The largest element of the given array is 90.

// Input: arr = [5, 5, 5, 5]
// Output: 5
// Explanation: The largest element of the given array is 5.

// Constraints:
// 1 <= arr.size()<= 106
// 0 <= arr[i] <= 106

class Solution {
    /**
    * @param number[] arr

    * @returns number
    */
    largest(arr) {
        let max = Number.MIN_SAFE_INTEGER;
        
        arr.forEach((elt) => {
            if(elt > max){
                max = elt
            }
        })
        
        return max;
    }
}
