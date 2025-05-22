// Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

// Note: The second largest element should not be equal to the largest element.

// Examples:

// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.

// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.

// Input: arr[] = [10, 10, 10]
// Output: -1
// Explanation: The largest element of the array is 10 and the second largest element does not exist.

// Naive Approach
class Solution {
    getSecondLargest(arr) {
        let fMax, sMax;
        
        for(let i = 0; i < arr.length; i++){
            if(fMax === undefined || arr[i] > fMax){
                sMax = fMax
                fMax = arr[i]
            }else if(fMax > arr[i] && (sMax === undefined || arr[i] > sMax)){
                sMax = arr[i]
            }
        }
        
        if(sMax && sMax < fMax){
            return sMax;
        }
        return  -1;
    }
}
