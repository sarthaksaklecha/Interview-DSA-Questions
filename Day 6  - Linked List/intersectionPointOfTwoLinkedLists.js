// https://leetcode.com/problems/intersection-of-two-linked-lists

// Brute force 
// O(n^2)
// check each and every node 
// 2 while loops 

const intersection = (headA,headB) => {
    let ptr1 = headA;
    let ptr2 = headB;
    while(ptr1){
        ptr2 = headB;
        while(ptr2){
            if(ptr1 === ptr2) return ptr1
            ptr2 = ptr2.next;
        }
        ptr1 = ptr1.next;
    }
    return null
}

// Better
// Hashing
// this approach is not the best because we cannot 
// store a node's address in the memo
// also we just store the value as the key and that node as the value
// if that same value number occurs again in the LL, then it will be overwritten by 
// the new value
// so we need to keep an array to store the nodes for a particular value
// and to when checking we match all the values in the array and return if 
// one of them matches

const getIntersectionNode = (headA,headB) => {
    let memo = {};
    let ptr = headA;
    while(ptr){
        (ptr.val) in memo ? memo[(ptr.val)].push(ptr) : memo[(ptr.val)]=[ptr];
        ptr = ptr.next;
    }
    ptr = headB;
    while(ptr){
        if((ptr.val) in memo){
            for(let i=0;i<memo[ptr.val].length;i++){
                if(memo[ptr.val][i]===ptr) return ptr
            }
        };
        ptr = ptr.next;
    }

}

// Best
// so both the lists have some nodes before the node that is intersecting
// one lists can have more nodes and the other can have less or vice versa
// so we start pointers from the head of each linked lists till one of them reaches the end
// the one with less nodes will reach first logically,
// so whichever reaches the end first, we assign that pointer 
// to the head of the other linked list(larger one);
// we keep moving the pointers, the other pointer when reaches the
// end will be placed at the start of the other list(shorter one), 
// the pointers when collide next will be the intersection
// LOGIC : the one which reached the end first started at the head
// of the shorter list, the one reaching the end 2nd will be placed at
// the head of the shorter list, so the gap between the pointers is compensated
// they will collide at the intersection.
var getIntersectionNode = function(headA, headB) {
    let ptr1 = headA;
    let ptr2 = headB;
    while(ptr1!==ptr2){
        if(ptr1===null){
            ptr1 = headB;
            continue
        }if(ptr2===null){
            ptr2 = headA;
            continue
        }
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    return ptr1===ptr2 ? ptr1 : null
}