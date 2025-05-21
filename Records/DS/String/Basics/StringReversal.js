// Given a string, say S, print it in reverse manner eliminating the repeated characters and spaces.

// Example 1:

// Input: S = "GEEKS FOR GEEKS"
// Output: "SKEGROF"

// Example 2:

// Input: S = "I AM AWESOME"
// Output: "EMOSWAI"

/**
 * @param {string} s
 * @return {string}
 */

class Solution {
    reverseString(s) {
        let reverse = '', i = s.length - 1;
        do{
            if((
                (s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z')) && 
                !reverse.includes(s[i])
            ){
                reverse += s[i];
            }
            i--;
        }while(i >= 0)
        
        return reverse;
    }
}
