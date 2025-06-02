// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
  
// Examples:
// Input: s = "IceCreAm"
// Output: "AceCreIm"
// Explanation:
// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Constraints:
// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set('aeiouAEIOU');
    const chars = s.split('');
    let left = 0, right = chars.length - 1;

    while (left < right) {
        while (left < right && !vowels.has(chars[left])) left++;
        while (left < right && !vowels.has(chars[right])) right--;

        [chars[left], chars[right]] = [chars[right], chars[left]];
        left++;
        right--;
    }

    return chars.join('');
};

// Time Complexity: O(n)
// Space Complexity: O(n)
