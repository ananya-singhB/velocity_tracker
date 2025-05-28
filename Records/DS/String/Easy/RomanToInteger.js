/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let res = 0;
    for(let i = 0; i < s.length; i++){
        if(i < s.length - 1 && romanNumerals[s[i]] < romanNumerals[s[i + 1]]){
            res -= romanNumerals[s[i]];
        }else {
            res += romanNumerals[s[i]];
        }
    }
    return res;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
