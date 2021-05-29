// https://leetcode.com/problems/sort-colors/

// Brute Force approach
// we will sprt the array using any of the sorting algorithm
// the complexity of this solution will be O(nlogn)
// the space complexity will be O(1)

const sortColorsBruteForce = (arr) => {
    return arr.sort((a,b)=>a-b)
}

console.log(sortColorsBruteForce([0,0,2,2,0,1,1,1]))

// Better Approch
// we iterate the array once and keep the count of
// 0's, 1's and 2's in a hash map
// then we interate again and place the zeroes in the start
// according to their count, then we do the same with 1's and 2's
// the time complexity of this solution will be O(2n) => O(n);
// the space complexity will be O(n) as well to store the values in 
// the hash map

const sortColorsBetter = (arr) => {
    let Hash = new Map();
    //setting all values to zero initially
    Hash.set(0,0);
    Hash.set(1,0);
    Hash.set(2,0);
    for(let num of arr){
        Hash.set(num,Hash.get(num)+1)
    }
    
    for(num in arr){
        if(Hash.get(0)!==0){
            arr[num] = 0;
            // decreasing the respective value by 1 
            // in the Map
            Hash.set(0,Hash.get(0)-1);
        }else if(Hash.get(1)!==0){
            arr[num] = 1;
            Hash.set(1,Hash.get(1)-1);
        }else{
            arr[num] = 2
        }
    }
    
    return arr
}

console.log(sortColorsBetter([0,0,2,2,0,1,1,1]))


// Optimal Solution
// We will use three pointers to solve this question, namely low, mid and high
// In the end we want all the zeroes to be in the left of low, all the ones between 
// low and mid and all the 2's after the high. 
// the complexity will be O(n) and Space O(1)

const sortColorsBest = (arr) => {
    let low=0,mid=0,high=arr.length-1;
    // Initially we keep the low and mid pointer in the beginning of the array
    // we will stop the loop once the mid pointer crosses the high pointer
    // mid will be our iterating pointer as well
    while(high>=mid){
        if(arr[mid]===0){
            [arr[low],arr[mid]] = [arr[mid],arr[low]];
            // we increase low as we want the 0's to be in the left of low
            low++;
            // IMPORTANT
            // we have to increase mid here 
            // if there is a 0 in the start of the array
            // mid won't increase 
            // take example of [0,0,2,2,0,1,1] to understand
            mid++;
        }else if(arr[mid]===1){
            // we increase the mid only when we land on a 1
            // as we want the 1's to reside between the low and the mid
            mid++;
        }else{
            [arr[high],arr[mid]] = [arr[mid],arr[high]];
            high--;
            // we decrease the high because we  want the 2's 
            // to be in the right of high
        }
    }
    return arr
}

console.log(sortColorsBest([0,0,2,2,0,1,1,1]))