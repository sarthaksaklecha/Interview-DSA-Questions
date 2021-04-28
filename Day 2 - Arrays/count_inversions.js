// VERY IMPORTANT
// practice multiple times
// https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1

// Brute Force
// 2 for loops 
// check inversions for every element one by one
// T = O(n^2)
const inversionCountBruteForce = (arr) => {
    let count = 0
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                count++;
            }
        }
    }
    return count
}

// Best 
// using merge sort concept
// In merge sort we divide the array into smaller subarrays
// until they become a single element array and then
// we start merging them back taking advantage of the fact that
// single element arrays are already sorted and merging two sorted  arrays
// is comparitively easy. 
// To count the inversions while doing this, when merging
// we will check the condition and then increase the count accordingly
// we will be saving time as the arrays are sorted and if we one element makes a pair
// all the elements ahead will automatically make a pair
function inversionCount(arr){
    let temp = new Array(arr.length);
    let inv_count = 0;
    function merge(low,mid,high){
        //merge two sorted arrays in place
        let p1 = low; // start of first half
        let p2 = mid+1; // start of second half
        let p3 = low; // for the temporary array
        // console.log(low,mid,high)
        while(p1<=mid && p2<=high){
            if(arr[p1]>=arr[p2]){
                // everything ahead of p1 will also make a
                // pair as it they are greater than arr[p1]
                inv_count += mid-p1+1;
                temp[p3++] = arr[p2++];
            }else{
                temp[p3++] = arr[p1++];
            }
        }
        while(p1<=mid){
            temp[p3++] = arr[p1++]
        }
        while(p2<=high){
            temp[p3++] = arr[p2++]
        }
        for(p3=low;p3<=high;p3++){
            arr[p3] = temp[p3];
        }
    }

    function sort(low=0,high=arr.length-1){
        if(low===high) return
        let mid = Math.floor((high+low)/2);
        sort(low,mid);
        sort(mid+1,high);
        merge(low,mid,high);
    }
    sort();
    return inv_count;
}

console.log(inversionCount([9,5,3,5,6,2,7,8,9]))
console.log(inversionCountBruteForce([9,5,3,5,6,2,7,8,9]))

