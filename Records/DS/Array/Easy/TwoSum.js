/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    for(let i = 0; i < nums.length; i++){
        const first = nums[i]
        const second = target - nums[i];
        if(map.has(second)){
            return[i, map.get(second)]
        }
        map.set(first, i);
    }
    return []
};

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Solution: We need to find two numbers in the array that sum up to a given target. Instead of using a brute-force approach that checks all pairs (which would be too slow), 
// we can leverage a hash table (dictionary) to store numbers we’ve seen so far and quickly check if their complement exists.
// Complexities:
// Time complexity: O(n)
// Space complexity: O(n)

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
