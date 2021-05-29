// VERY IMPORTANT
// Notice the difference between this problem and inversion count
// the approach is same but there are important changes that we 
// need to consider

// https://leetcode.com/problems/reverse-pairs/

// BRUTE
// 2 for loops 
// iterate every element and check for pairs in 
// the remaining array for that element
const reversePairsBruteForce = (arr) => {
    let count = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>2*arr[j]) count++;
        }
    }
    return count;
}

// BEST
// merge sort approach

function reversePairs(arr){
    let temp = new Array(arr.length);
    let count = 0;
    function merge(low,mid,high){
        let p1=low;
        let p2=mid+1;
        // here we have to check the pairs before merging
        // we can't do both the things together like we did in 
        // inversion count because the condition here is 
        // if arr[p1] > 2*arr[p2], if we try to do them together
        // we miss out some pairs, take an example and run it in
        // countInversions problem and you will see for yourself

        // simple logic to count the pairs
        while(p1<=mid && p2<=high){
            if(arr[p1]>2*arr[p2]){
                // all the elements ahead will also make a pair as they are 
                // greater than the current element
                count += mid-p1+1;
                p2++;
            }else{
                p1++;
            }
        }
        // merging two sorted arrays using extra space
        // we can do it in no space but the time complexity 
        // will increase, so we have to sacrifice one or the other
        p1=low;
        p2=mid+1;
        let p3=low;
        while(p1<=mid && p2<=high){
            if(arr[p1]>=arr[p2]){
                temp[p3++] = arr[p2++];
            }else{
                temp[p3++] = arr[p1++];
            }
        }
        while(p1<=mid){
            temp[p3++] = arr[p1++];
        }
        while(p2<=high){
            temp[p3++] = arr[p2++];
        }
        for(let p3=low;p3<=high;p3++){
            arr[p3] = temp[p3];
        }
    }

    // merge sort function
    function sort(low=0,high=arr.length-1){
        if(low===high) return
        let mid = Math.floor((low+high)/2);
        sort(low,mid);
        sort(mid+1,high);
        merge(low,mid,high);
    }
    sort();
    return count;
}