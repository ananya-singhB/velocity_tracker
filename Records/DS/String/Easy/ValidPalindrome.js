// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Examples:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let f = 0, l = s.length - 1;
    while(f < l){
        if(/[a-zA-Z0-9]/.test(s[f]) && /[a-zA-Z0-9]/.test(s[l])){
            if(s[f].toLowerCase() !== s[l].toLowerCase()){
                return false;
            }
            f++;
            l--;
        }else if(!/[a-zA-Z0-9]/.test(s[f])){
            f++;
        }else {
            l--;
        }
        
    }
    return true;
};
