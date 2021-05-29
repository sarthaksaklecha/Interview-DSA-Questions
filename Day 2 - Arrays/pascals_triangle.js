// https://leetcode.com/problems/pascals-triangle/
// the "best" solution is good for practicing
// the brute is good enough if the question is to 
// print the whole triangle
// but if you only have to print a particular row
// then go for the "best"

// Brute Force (very intuitive and easy to understand)
// print rows one by one
// use the last computed row to calculate
// the elements in the next row using pasccal's triangle's
// property that a certain element at index i of row r will be equal to 
// prev[i-1]+prev[i], where prev is the r-1 row,
// see a pascal triangle for more
const pascalsTriangleBruteForce = (numRows) => {
    let result = [];
    let rowsDone = 0;
    let prev;
    while(rowsDone !== numRows){
        let currentRow = [];
        for(let i=0;i<=rowsDone;i++){
            if(i===0 || i===rowsDone){ 
                currentRow.push(1)
            }else{
                currentRow.push(prev[i-1]+prev[i]);
            }
        }
        result.push(currentRow);
        prev = currentRow;
        rowsDone+=1;
    };
    return result;
}

// Better Approach
// using the below formula to compute a particular element
// An element can be calculated by it's row and column number
// using -
//  row-1
//       C
//         column-1

const pascalsTriangleBetter = (numRows) => {
    function combination(n,r){
        if(n===0 || r===0) return 1;
        if(n===r) return 1;
        let result = 1;
        while(r!==0){
            result= result*n;
            result=result/r;
            n--;
            r--;
        }
        return result;
    }

    let traingle = [];
    while(traingle.length!==numRows){
        let currentRow = [];
        for(let i=0;i<=traingle.length;i++){
            currentRow.push(combination(traingle.length,i))
        }
        traingle.push(currentRow);
    }
    return triangle
}


// Best
// optimizing the better approach by removing the extra combination
// calculation

const pascalsTriangleBest = (numRows) => {
    let result = [];
    while(result.length!==numRows){
        let currentRow = [];
        let up = result.length;
        let down = 1;
        let previous = 1
        for(let i=0;i<=result.length;i++){
            if(i===0) currentRow.push(1);
            else{
                let requiredNumber = previous*(up/down);
                currentRow.push(requiredNumber);
                up--;
                down++
                previous = requiredNumber;
            }
        }
        result.push(currentRow)
    }
    return result
}