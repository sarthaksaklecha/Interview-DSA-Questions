// https://leetcode.com/problems/rotate-list/submissions/

// brute force
// moving the last node in the front (before the head)
// will rotate the list by 1 place
// so we do this k times
// O(k*n)
class Solution {
    public ListNode rotateRight(ListNode head, int k) {

    }
}

// best
// instead of moving doing one rotation at a time
// we do it in one time, Here's how -
// if we observe the rotated list we will
// see that the kth node from the end is just shifted in the front
// after k rotations, so we find the kth node from the end and put it in the front
// here k can be greater than the length, if it is then we k will be   k % length
// because we know that if we rotate the list by k places wheere k is equal to the length
// then the list won't change, so we need the remainder left after we divide k by the length
// i.e   k % length
class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        if(head==null) return head;
        int length = 1;
        ListNode ptr = head;
        // calculating the length
        while(ptr.next!=null){
            length++;
            ptr = ptr.next;
        };
        // if k>length we compute the effective k
        if(k>=length) k=k%length;
        if(k==0) return head;
        // also we know that no matter what k, the last node will point to the head
        // so when calculating the length our pointer was on the last nodee;
        ptr.next = head;
        // this has created a cycle but we will take care of that
        int counter = 1;
        ptr = head;
        // we stop at the k+1th place from the end. as we need to break the bond with the kth node;
        while(ptr.next!=null && counter!=length-k){
            counter++;
            ptr = ptr.next;
        };
        // now ptr points to one node before the kth node which will become the new head
        ListNode newHead = ptr.next;
        // breaking the bond hence breaking the cycle and noe we just return the head
        ptr.next = null;
        return newHead;
    }
}