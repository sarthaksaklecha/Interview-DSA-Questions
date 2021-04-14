// Brute Force
// just merge the arrays and use any sorting technique 

const MergeSortedArrays = (arr1, arr2) => {
    return [...arr1,...arr2].sort((a,b)=>a-b)
}

console.log(MergeSortedArrays([1,2,3,4,5],[2,5,6,7,9]))

// Better Approach
// using an extra array
