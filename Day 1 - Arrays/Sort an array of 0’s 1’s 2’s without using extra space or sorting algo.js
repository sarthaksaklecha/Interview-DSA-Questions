// Brute Force approach
// we will sprt the array using any of the sorting algorithm
// the complexity of this solution will be O(nlogn)
// the space complexity will be O(1)

const sortColorsBruteForce = (arr) => {
    return arr.sort((a,b)=>a-b)
}

// Better Approch
// we iterate the array once and keep the count of
// 0's, 1's and 2's in a hash map
// then we interate again and place the zeroes in the start
// according to their count, then we do the same with 1's and 2's
// the time complexity of this solution will be O(2n) => O(n);
// the space complexity will be O(n) as well to store the values in 
// the hash map

const sortColorsBetter = (arr) => {
    
}

// Optimal Solution
// We will use three pointers to solve this question, namely low, mid and high
// In the end we want all the zeroes to the left of low, all the ones between 
// low and mid and all the 2's after the high. 
// the complexity will be O(n)

const sortColors = (arr) => {
    let low=0,mid=0,high=arr.length-1;
    // Initially we keep the low and mid pointer in the beginning of the array

}
