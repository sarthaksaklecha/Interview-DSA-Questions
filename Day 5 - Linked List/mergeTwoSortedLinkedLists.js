// https://leetcode.com/problems/merge-two-sorted-lists/

// Brute Force (extra space)
// extra space and 2 pointers at the start of each linked lists
// the one with the smaller value goes into our sorted linked list

const mergeTwoListsBruteForce = (l1,l2) => {
    let mergedListHead = new ListNode(null,null);
    let mergedListPointer = mergedListHead;
    let p1 = l1;
    let p2 = l2;
    while(p1!==null && p2!==null){
        if(p1.val<p2.val){
            mergedListPointer.next = new ListNode(p1.val,null);
            // keeping the pointer at the end of the sorted list
            // so that we can add nodes to it
            mergedListPointer = mergedListPointer.next;
            p1=p1.next;
        }else{
            mergedListPointer.next = new ListNode(p2.val,null)
            mergedListPointer = mergedListPointer.next;
            p2 = p2.next;
        }
    }
    // filling the sorted array with the remaining values
    while(p1!==null){
        mergedListPointer.next = new ListNode(p1.val,null);
        mergedListPointer = mergedListPointer.next;
        p1=p1.next;
    };
    while(p2!==null){
        mergedListPointer.next = new ListNode(p2.val,null)
        mergedListPointer = mergedListPointer.next;
        p2 = p2.next;
    }
    return mergedListHead.next
}

// better
// using merge two sorted array method 
// smaller value in the first list and
// larger in the second, then merge l1 and l2
// not good as we are not taking advantage of it being a linked list
// we can cross join the nodes from both the lists which could
// not happen in an array


// best (no extra space)
// connect the nodes so that they become sorted lol
// we use a pointer to keep track of the last node of the sorted linked list
// and w euse l1 and l2 for traversing the other lists
const mergeTwoLists = (l1,l2) => {
    if(!l1) return l2
    if(!l2) return l1
    // set the sortedList pointer and head at the right place
    // we need to return the head in the end so we store it in a variable
    let sortedListHead = l1.val>l2.val ? l2 : l1;
    let sortedListPointer = sortedListHead;
    while(l1.val !== Infinity || l2.val!==Infinity){
        // the node with the smaller value goes in the next of the 
        // sorted list pointer we have, we move the sorted list pointer to the next
        // node then 
        // we also store the next value of l1 and l2 incase 
        // the sorted list pointer is in the same place as l1 or l2
        // and we will be attaching the next node to that pointer
        // and we might lose our list in that process
        // take example of the first iteration when l1 and l2 are in the start of the list 
        // and sortedListPointer is either l1 or l2,
        // we change the sortedlistPointer.next and as sortedListPointer is either l1 or l2
        // we lose l1.next or l2.next
        if(l1.val > l2.val){
            let nextl2 = l2.next;
            sortedListPointer.next = l2;
            sortedListPointer = l2;
            l2 = nextl2
        }else{
            let nextl1 = l1.next;
            sortedListPointer.next = l1;
            sortedListPointer = l1;
            l1 = nextl1
        }
        // In the end one of the list will reach the end so we assign it a node with
        // value infinity to add the remaining nodes in the other list
        // In the end both will reach the end and we will stop the loop when both l1 and l2
        // have value infinity, that means both reached null at a point and have been traveresed 
        // completely
        if(l1 === null) l1 = {val : Infinity}
        if(l2 === null) l2 = {val : Infinity}
    }
    return sortedListHead
}
