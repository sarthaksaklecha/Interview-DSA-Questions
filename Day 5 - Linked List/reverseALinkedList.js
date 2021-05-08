// https://leetcode.com/problems/reverse-linked-list

// Brute Force
// O(n^2) time and extra space for new list
// using 2 while loops
// first while loop places the pointer in the end of the list 
// then we put that pointers value in the start of our ReversedLinkedList
// then the first loop goes till the end-1, then end-2 and so on

var reverseListBruteForce = function(head){
    if(head === null) return head
    let reversedList = new ListNode();
    let node = reversedList;
    let ptr = head;
    let prev = null;
    while(prev !== head){
        ptr = head;
        while(ptr.next !== prev){
            ptr = ptr.next
        }
        node.val = ptr.val;
        prev = ptr;   
        if(prev!==head) node.next = new ListNode(null);
        node = node.next;
    }
    return reversedList
}

// Best
// store the next node in a variable 
// set the current node's next to the previous node
// the previous node then becomes the current node
// and the ptr shifts to the next node (the one we store in the starting before changing the next of our current node)
// and we repeat the whole process  for the new current node

var reverseList = function(head) {
    if(head === null) return head
    let ptr = head;
    let previous = null;
    while(ptr!==null){
        let nextNode = ptr.next;
        ptr.next = previous;
        previous = ptr;
        ptr = nextNode
    }
    return previous
};
