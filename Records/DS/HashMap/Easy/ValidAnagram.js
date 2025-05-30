// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
  
// Examples:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    let mapsToT = new Map();

    for(let i = 0; i < s.length; i++) {
        mapsToT.set(s[i], (mapsToT.get(s[i]) || 0) + 1);
    }

    for(let i = 0; i < t.length; i++){
        let count = mapsToT.get(t[i])
        if (count) {
            if(count === 1) {
                mapsToT.delete(t[i]);
            } else {
                mapsToT.set(t[i], count - 1);
            }
        } else {
            return false;
        }
    }

    return mapsToT.size === 0;
};

// Time complexity: O(n)
// Space complexity: O(n)
