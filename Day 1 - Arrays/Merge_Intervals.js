//IMPORTANT - CAN BE CONFUSING AND IS TRICKIER THAN IT LOOKS
// Brute Force 
// first sort the arr
// iterate the arr, with an extra arr that keeps
// track of the intervals, in every iteration we check if
// the subarr is merging with any of the subarr in our other arr
// this takes nlogn for sorting, and n^2 sor iterating and checking in 
// our other array

//BEST APPROACH
// time = O(n), space = O(n)
const mergeIntervalsBest = (arr) => {
    // first if the intervals are not sorted we
    // need to sort them.
    arr.sort((a,b)=>a[0]-b[0])
    // So here we will have a variable curr to store the current
    // merged interval, As we iterate throught the array we first check
    // if the subarr we are at lies merges with curr, if it does then we 
    // merge it with curr and continue, we only push curr when the subarr
    // we are at does not merge with curr. After pushing curr we make the 
    // current subarr our curr.
    let curr = arr[0];
    let result = [];
    for(let i=1;i<arr.length;i++){
        let subarr = arr[i];
        if(subarr[0]>=curr[0] && subarr[0]<=curr[1]){
            curr = [curr[0],subarr[1]>curr[1]?subarr[1]:curr[1]]
        }else{
            result.push(curr);
            curr = subarr;
        }
    }
    // IMPORTANT
    // if we notice, when the loop ends the last curr was
    // not added to the result, so after the loop we need to
    // push the last curr in the result array
    result.push(curr);
    return result;
}
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))