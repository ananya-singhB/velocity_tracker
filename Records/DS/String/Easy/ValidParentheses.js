// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Examples:
// Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false

// Input: s = "([])"
// Output: true

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    let stack = [];

    for(let char of s){
        if(map[char]){
            stack.push(char)
        }else if(stack.length === 0 || map[stack.pop()] !== char){
            return false;
        }
    }
    return stack.length === 0;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
