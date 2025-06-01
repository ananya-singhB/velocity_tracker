// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Examples:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:
// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 1){
        return 1;
    }

    let f = 1, s = 1;
    for(let i = 2; i <= n; i++){
        let curr = f + s;
        f = s;
        s = curr;
    }
    return s;
};

// Solution: Total number of ways to reach step n:
// ways(n) = ways(n - 1) + ways(n - 2)
// This is exactly how the Fibonacci sequence works.

// Example: n = 5
// Let’s calculate manually:
// Step 0: 1 way (starting point)
// Step 1: 1 way (1)
// Step 2: 2 ways (1+1, 2)
// Step 3: 3 ways (1+1+1, 1+2, 2+1)
// Step 4: 5 ways
// Step 5: 8 ways
// So: ways(5) = ways(4) + ways(3) = 5 + 3 = 8

// Time: O(n) → One loop through all steps
// Space: O(1) → Only 3 variables used regardless of n
