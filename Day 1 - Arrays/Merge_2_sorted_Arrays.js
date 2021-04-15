// Brute Force
// just merge the arrays and use any sorting technique 

const MergeSortedArraysBruteForce = (arr1, arr2) => {
    return [...arr1,...arr2].sort((a,b)=>a-b)
}

console.log(MergeSortedArraysBruteForce([1,2,3,4,5],[2,5,6,7,9]))

// Better Approach
// using an extra array
// we will use 2 pointers to compare the values
// and insert the lesser one
// Time = O(n) space= O(n)

const MergeSortedArraysBetter = (arr1,arr2) => {
    let sortedArray = new Array();
    let p1 = 0;
    let p2 = 0;
    while(p1<arr1.length && p2<arr2.length){
        if(arr1[p1]>arr2[p2]){
            sortedArray.push(arr2[p2]);
            p2++;
        }else{
            sortedArray.push(arr1[p1]);
            p1++;
        }
    }
    function fillRemainingArray(pointer,array){
        while(pointer<array.length){
            sortedArray.push(array[pointer]);
            pointer++;
        }
        return sortedArray
    }
    return p1<arr1.length ? fillRemainingArray(p1,arr1) : (p2<arr2.length ? fillRemainingArray(p2,arr2) : sortedArray)
}

console.log(MergeSortedArraysBetter([1,2,3,4,5],[2,5,6,7,9]))

// Better 2
// This algo will not use any extra space
// The algorithm wants all the small numbers to be in the 
// first array and all the large numbers to be in the second array
// In the end we will simply return the concat of both arrays
// we will use insertion sort in the process

const MergeSortedArraysBetter2 = (arr1,arr2) => {
    // we will only need 1 pointer
    // we will fill small values in arr1
    // and large in arr2
    let p1 = 0;
    while(p1<arr1.length){
        if(arr1[p1]>arr2[0]){
            [arr1[p1],arr2[0]] = [arr2[0],arr1[p1]];
            // sorting arr2 using insertion sort
            // as we only have to put the first element
            // in the right place, rest of the array is already
            // sorted
            let sortingElement = arr2[0]
            let p2 = arr2.length-1;
            // finding the right place for the new element i.e arr2[0]
            while(p2>0 && arr2[p2]>arr2[0]){
                p2--;
            }
            // Implementing Insertion sort by shifting elements to 
            // make place for the element to be inserted
            let prev = arr2[p2];
            let temp
            for(let i=p2-1;i>=0;i--){
                temp = arr2[i] ;
                arr2[i] = prev;
                prev = temp;
            }
            // successfully made space at p2
            arr2[p2] = sortingElement;
        }else{
            p1++;
        }
    }
    return arr1.concat(arr2)
}
console.log(MergeSortedArraysBetter2([1,2,3,4,5],[2,5,6,7,9]))

// Best Solution
// GAP method also known as shell sort
// fixed algo,don't bother about the logic

const MergeSortedArraysBest = (arr1,arr2) => {
    let GAP = Math.ceil((arr1.length + arr2.length)/2);
    // The gap is halfed after each iteration
    // we stop the loop after GAP = 1
    while(true){
        for(let i=0;i+GAP<(arr1.length+arr2.length);i++){
            // console.log('i: ',i,' GAP: ',GAP); 
            // As we don't have to use extra space we need to convert the 
            // index when it crosses the first array
            let ind1 = i>=arr1.length ? i-arr1.length : i ;
            let ind2 = i+GAP>=arr1.length ? i+GAP-arr1.length : i+GAP;
            // Below there are three cases
            // CASE 1 : both the indices are in arr1,
            // CASE 2 : ind1 is in arr1 but ind2 is in arr2
            // CASE 3 : Both are in arr2
            if(ind1===i && ind2===i+GAP){
                if(arr1[ind1]>arr1[ind2]){
                    // we swap if the element at the smaller index
                    // is greater than the element at the index+GAP i.e ind2 
                    [arr1[ind1],arr1[ind2]] = [arr1[ind2],arr1[ind1]];
                }
            }else if(ind1===i && ind2<i+GAP){
                if(arr1[ind1]>arr2[ind2]){
                    [arr1[ind1],arr2[ind2]] = [arr2[ind2],arr1[ind1]];
                }
            }else{
                if(arr2[ind1]>arr2[ind2]){
                    [arr2[ind1],arr2[ind2]] = [arr2[ind2],arr2[ind1]];
                }
            }
        }
    // we need to run the loop once when GAP===1
    // after that we have completed the sorting
    if(GAP===1) return [...arr1,...arr2]   
    GAP = Math.ceil(GAP/2)
    }
}
console.log(MergeSortedArraysBest([1,2,3,4,5],[2,5,6,7,9]))

