// https://leetcode.com/problems/set-matrix-zeroes/

// BRUTE FORCE
// using 2 arrays
// one array represents row and other column
// traverse the matrix and if you find a zero
// set the respect element in row and column index as 0
// traverse again and change value to zero if rowArr[i] || colArr[j] is 0;
// time complexity = O(m*n);
// space = O(m+n)

const setZeroes = (mat) => {
    let rowArr = new Array(mat.length);
    let colArr = new Array(mat[0].length);
    let row=0,col=0;
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            if(mat[i][j]===0){
                rowArr[i] = true;
                colArr[j] = true;
            }
        }
    }

    for(i=0;i<mat.length;i++){
        for(j=0;j<mat[0].length;j++){
            if(rowArr[i] || colArr[j]){ 
                mat[i][j] = 0
            }
        }
    }
    return [mat,rowArr,colArr]
}

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))

// BEST
// use the first row and first column as an indicator which will
// tell if the respective row or col is to be set zero
// but fort the first row and col we use separate variables 
// to indicate if the row or col is to be set 0;
// time = O(m*n);
// space = constant 

/** STEPS
* 1. Declare 2 variables which will store whether the first row or col is zero
* 2. Traverse the matrix skipping the 0th row and 0th column and set the values in the first row and columns for elements with value 0
* 3. Now traverse the matrix backwards and set 0 at places where the first row/col has zeroes SKIPPING THE FIRST ROW AND COL
* 4. set forst row and col using the flags initialized in the start.
*/

var setZeroes = function(matrix) {
    let isRowZero = false;
    let isColZero = false;
    for(let i in matrix) {
        if(matrix[i][0] ===0) isColZero = true;
    }
    for(let j in matrix[0]) {
        if(matrix[0][j] ===0) isRowZero = true;
    }
    for(let i in matrix){
        for (let j in matrix[0]){
                if (matrix[i][j] === 0 && i!==0 && j!==0){
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            
            }
        }
    }
    
    for (let i=matrix.length-1;i>=1;i--) {
        for (let j= matrix[0].length-1;j>=1;j--) {
            if(matrix[i][0] ===0 || matrix[0][j] ===0) 
                matrix[i][j] = 0
        }
    }
 for (let i in matrix) {
        if(isColZero) matrix[i][0] =0
    }
for (let j in matrix[0]) {
        if(isRowZero) matrix[0][j] = 0
    }
    
};
