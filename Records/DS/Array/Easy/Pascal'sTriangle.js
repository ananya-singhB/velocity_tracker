// Given an integer numRows, return the first numRows of Pascal's triangle.

// Examples:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Input: numRows = 1
// Output: [[1]]

// Constraints:
// 1 <= numRows <= 30

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const triangle = []

    for(let r = 0; r < numRows; r++){
        let currentRow = new Array(r+1).fill(1);

        for(let c = 1; c < r; c++){
            currentRow[c] = triangle[r-1][c-1] + triangle[r-1][c]
        }

        triangle.push(currentRow)
    }
    return triangle
};
