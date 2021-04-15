// https://leetcode.com/problems/find-the-duplicate-number/

// Brute Force
// sort the array and then iterate 
// and see if prev === current
const findDuplicateNumberBrute = (arr) =>{
    arr.sort((a,b)=>a-b);
    let prev;
    for(let num of arr){
       if(num===prev) return num
       prev = num 
    }
}

// Better 
// iterate while storing the count of
// numbers in an object
// return whenever count goes 2 for an element
const findDuplicateNumberBetter = (arr) => {
    let counter = {};
    for(let num of arr){
        if(num in counter) return num; // if already in counter then repeating
        counter[num] = 1
    }
}

// Best
// This method is O(n) time and O(1) space
// this uses the principle of cycle in a linked 
// list, we use a slow pointer and a fast pointer
// (tortoise and hare problem) 
// for the first time the fast pointer will move at twice the speed of
// slow pointer, after the first collision we place the fast 
// pointer at the start and the slow poinnter stays at the same place
// they move at the same speed now, The next collision is 
// where the duplicate number resides
const findDuplicateNumber = (arr) => {
    if(arr.length===2) return arr[0]
    // we are using the array as a linked list
    // IMPORTANT
    // we cannot start slow and fast from zero
    // as the first while loop wont run
    // therefore we move them by one iteration
    let slow = arr[0];
    let fast = arr[arr[0]];
    // slow is the pointer and not the element \
    // always remember that, so is fast
    while(arr[slow]!==arr[fast]){
        slow = arr[slow];
        fast = arr[arr[fast]];
    }
    // now slow represents the index of the first collision
    // and so does fast

    // time to move fast back to the start
    fast = 0;
    while(arr[slow]!==arr[fast]){
        slow = arr[slow];
        fast = arr[fast];
    };
    // slow and fast now represent the index of the 
    // 2nd collision, we return the elemet at that index
    return arr[slow]
}

console.log(findDuplicateNumberBrute([1,3,2,4,5,3])) //3
console.log(findDuplicateNumberBetter([3,3,4,2,1])) //3
console.log(findDuplicateNumber([5,3,4,2,1,6,4])) //4