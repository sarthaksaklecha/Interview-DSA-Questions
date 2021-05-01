// merge sort without using extra space

function mergeSort(arr){
    function merge(low,mid,high){
        //merge two sorted arrays in place
        let p1 = low; //start of first half
        let p2 = mid+1; //start of second half
        while(p1<=mid){
            if(arr[p1]<=arr[p2]){
                p1++;
            }else{
                // swap 
                [arr[p1],arr[p2]] = [arr[p2],arr[p1]];
                // insertion sort the swapped element in the second half
                let positionFinder = p2+1; // A pointer to find the correct insertion place
                let curr = arr[p2];
                while(arr[positionFinder] <= arr[p2] && positionFinder<=high){
                    arr[positionFinder-1] = arr[positionFinder];
                    positionFinder++;
                };
                arr[positionFinder-1] = curr;
            }
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
    return arr;
}