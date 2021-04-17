// https://leetcode.com/problems/unique-paths/

// Brute Force
// recursive solution
// no of unique paths = 
// no. of unique paths from the element below 
//                 +
// no of unique paths from the element on the right 
// m and n are the rows and colums respectively

const uniquePathsBruteforce = (m,n) => {
    if(m===1 || n===1) return 1;
    return uniquePathsBruteforce(m-1,n) + uniquePathsBruteforce(m,n-1)
}

// Better 
// hashing the recursive solution

const uniquePathsBetter = (m,n,memo={})=>{
    if(`${m},${n}` in memo) return memo[`${m},${n}`];
    if(m===1 || n===1) return 1;
    return memo[`${m},${n}`] = uniquePathsBetter(m-1,n,memo) + uniquePathsBetter(m,n-1,memo)
}

// Best Solution
// Using combination
// From observation, it can be seen that for a matrix
// of m rows and n columns, to reach the end we 
// have to go down a total of numberOfRows-1 times
// and go right a total of numberOfColumns-1 times
// so our total moves will be 
// number of times we go down + number of times we go right;
// total moves = (numberOfRows-1) + (numberOfColumns-1);
// total moves = numberOfRows + numberOfColumns -2;
// so number of unique paths will be -
// all possible combinations for down moves from total moves
// or all combinations fro right moves from total moves 
// numberOfRows+numberOfColumns-2                      numberOfRows+numberOfColumns-2
//                               C                 OR                                C
//                                 numberOfRows-1                                     numberOfColumns-1

const uniquePathsBest = (m,n) => {
    // to reduce time we take the smaller out of m and n
    // in the next comment you will see why
    let smallerOutOfRowAndCol = m>n?n-1:m-1;
    let total = m+n-2;
    // shortcut to calculate nCr 
    // number of multiplications in the numerator will be the
    // number of multiplications in the factorial of denominator
    // 5C2 = 5*4/2*1
    // 6c3 = 6*5*4/3*2*1
    let answer;
    while(smallerOutOfRowAndCol!==0){
        answer*=total--;
        answer/=smallerOutOfRowAndCol--;
    }
    return answer
}