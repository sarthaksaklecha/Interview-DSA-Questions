// https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/

//Brute Force
// we take another temp of size n and fill it with 0's
// we loop through the first array 
// and increment the value at the index of the value we are
// currently at. 
// so the number that comes twice will have value 2
// and the missing number will have value 0

const repeatAndMissingNumberBruteForce = (arr) => {
    let temp = new Array(arr.length+1).fill(0);
    for(let num of arr){
        temp[num]++
    }
    let repeat,missing;
    let index=-1;
    for(num of temp){
        index+=1;
        if(num===2){
            repeat = index;
        }else if(num===0){
            missing = index;
        }
    }
    return [missing,repeat]
}

console.log(repeatAndMissingNumberBruteForce([1,3,5,6,4,2,6]))
// [6,7]

// Best Solution
// using summation of n numbers formula
// s = n(n+1)/2
// s^2 = n(n+1)(2n+1)/6

// example :-
// [1,2,4,4]
// s = 1+2+3+4
// s' = 1+2+4+4
// s-s' = 3-4 (missing-repeating)
// s-s' = missing-repeating   ------- 1
// s^2 = 1^2 +2^2 + 3^2 + 4^2;
// s'^2 = 1^2+ 2^2 + 4^2 + 4^2;
// s^2 - s'^2 = 3^2 - 4^2 (missing^2 - repeating^2)
// s^2 - s'^2 = (missing-repeating)(missing+repeating)
// replacing using 1
// (s^2 - s'^2)/(s-s') = missing+repeating ----- 2
// solve 1 and 2

const repeatAndMissingNumberBest = (arr) => {
    let currSum = 0, currSumSquared = 0;
    let actualSum = 0, actualSumSquared = 0;
    for(let num of arr){
        currSum+=num;
        currSumSquared+=num*num;
    }
    let n = arr.length;
    actualSum = n*(n+1)/2;
    actualSumSquared = n*(2*n+1)*(n+1)/6;
    let eq1 = actualSum-currSum;
    let eq2 = (actualSumSquared-currSumSquared)/(eq1);
    // missing , repeating
    return [(eq1+eq2)/2 , (eq2-eq1)/2]
}

console.log(repeatAndMissingNumberBest([1,3,5,6,4,2,6]))

