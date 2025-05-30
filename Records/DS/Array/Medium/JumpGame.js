// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

// Examples:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
  
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxJump = 0;
    let i = 0;

    while(i < nums.length){
        if(i > maxJump){
            return false;
        }
      
        maxJump = Math.max(maxJump, i + nums[i])
        if(maxJump >= nums.length - 1){
            return true;
        }
        i++;
    }
};

// Time Complexity: O(n)
// Space Complexity: O(1)
