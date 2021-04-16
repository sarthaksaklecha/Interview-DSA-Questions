// 2 forms of the question
// https://leetcode.com/problems/search-a-2d-matrix/
// https://www.geeksforgeeks.org/search-in-row-wise-and-column-wise-sorted-matrix/

// Brute force
// linear search every row of the matrix
//n*n time complexity
const search2DmatrixBruteForce = (matrix,searchElement) => {
    for(let row of matrix){
        for(let num of row){
            if(num===searchElement) return true
        }
    }
    return false
}

// Better 
// binary search in all rows
// n*logn

[1,2,3,4,5,6]
const search2DmatrixBetter = (matrix,searchElement) => {
    for(let row of matrix){
        // binary search
        let start = 0;
        let end = row.length-1;
        let mid 
        while(start<=end){
            mid = Math.floor((start+end)/2);
            if(searchElement === row[mid]){
                return true;
            }else if(searchElement > row[mid]){
                start = mid+1;         
            }else if(searchElement < row[mid]){
                end = mid-1;
            }
        }
    }
    return false;
};
console.log(search2DmatrixBetter([[1,3,5,7],[10,11,16,20],[23,30,34,60]],13));
console.log(search2DmatrixBetter([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3));


// best solution GFG 
// There are two forms of the question
// each have separate best solutions
// for the gfg one (link at top)
// the following will be optimal

const search2DmatrixBestGFG = (matrix,searchElement) => {
    // we will start from top right of the matrix
    // we will go down if our searchElement is larger than
    // the current element, if smaller we go in the left
    // see matrix in question for better understanding

    // top right
    let row = 0;
    let col = matrix[0].length-1
    while(row>=0 && row<matrix.length && col>=0 && col<matrix[0].length){
        if(matrix[row][col]===searchElement){
            return true;
        }else if(matrix[row][col] > searchElement){
            col--;
        }else{
            // searchElement is less than current element
            row--;
        }
    }
    return false
}
console.log(search2DmatrixBestGFG([[1,3,5,7],[10,11,16,20],[23,30,34,60]],13));
console.log(search2DmatrixBestGFG([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3));

// Best solution Leetcode
// as the whole matrix is sorted;
// we can do a binary search on the whole matrix
// but we need to do this without using an extra array
// to tackle that we convert the matrix's index (row and col) into
// a single digit like an arrays index, that way we can use the 2D matrix
// as a 1D matrix
// [      0 1 2 3
//     0 [1,3,5,7],
//        0 1 2 3
//     1 [10,11,16,20],
//        4  5  6  7
//     2 [23,30,34,60]
//        8  9  10 11
// ]
const search2DmatrixBestLeetcode = (matrix,searchElement) => {
    // IMPORTANT
    // To get the row and column number from the 
    // index (written below the elements)
    // for eg : getting (1,2) from index 6
    // for row-index = index/(no.of elements in a row i.e no.of columns)
    // for col-index = index%(no.of elements in a row i.e no.of columns) 
    // binary search
    let length = matrix.length*matrix[0].length;
    let NumberOfElementsInRow = matrix[0].length;
    let start = 0;
    let end = length-1;
    let mid;
    while(start<=end){
        mid = Math.floor((start+end)/2);
        let row = Math.floor(mid/NumberOfElementsInRow);
        let col = mid%NumberOfElementsInRow;
        // console.log(matrix[row][col])
        if(searchElement === matrix[row][col]){
            return true;
        }else if(searchElement > matrix[row][col]){
            start = mid+1;         
        }else if(searchElement < matrix[row][col]){
            end = mid-1;
        }
    }
    return false
}

console.log(search2DmatrixBestLeetcode([[1,3,5,7],[10,11,16,20],[23,30,34,60]],13));
console.log(search2DmatrixBestLeetcode([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3));