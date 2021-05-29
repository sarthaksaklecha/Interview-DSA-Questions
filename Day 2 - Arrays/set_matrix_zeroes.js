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


const setZeroes = (mat) => {
    let isRow = false;
    let isCol = false;
    let i,j;
    //check first row and column
    for(i of mat[0]){
        if(element===0) isRow=true;
    }
    for(j of mat){
        if(j[0]===0) isCol=true;
    }
    // traverse and mark in the first row or col
    for(i=0;i<mat.length;i++){
        for(j=0;j<mat[0].length;j++){
            if(mat[i][j]===0){
                mat[0][j] = 0;
                mat[i][0] = 0;
            }
        }
    }
    // traverse again to set zero
    // IMP : skip first row and col
    for(i=1;i<mat.length;i++){
        for(j=1;j<mat[0].length;j++){
            if(mat[i][0]===0 || mat[0][j]===0) mat[i][j] = 0;
        }
    }
    
    // set first row and col
    if(isRow){
        for(i=0;i<mat[0].length;i++){
            mat[0][i] = 0
        }  
    }
    if(isCol){
        for(i=0;i<mat.length;i++){
            mat[i][0] = 0
        }  
    }
}