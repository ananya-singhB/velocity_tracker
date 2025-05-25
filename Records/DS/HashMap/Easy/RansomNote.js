// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Examples:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:
// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const mapMagazine = new Map();
    
    for (let char of magazine) {
        mapMagazine.set(char, (mapMagazine.get(char) || 0) + 1);
    }

    for (let char of ransomNote) {
        if (!mapMagazine.has(char) || mapMagazine.get(char) === 0) {
            return false;
        }
        mapMagazine.set(char, mapMagazine.get(char) - 1);
    }

    return true;
};

// Time complexity: O(n + m), where n is the length of the ransomNote and m is the length of the magazine.
// Space complexity: O(k) where k is the number of unique characters in the magazine.
