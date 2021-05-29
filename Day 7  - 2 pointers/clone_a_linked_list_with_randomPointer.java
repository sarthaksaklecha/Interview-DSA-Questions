// https://leetcode.com/problems/copy-list-with-random-pointer;
// Important 

class Solution {
    // Brute Force 
    // 1) hash all the nodes in the list with value as the index
    // 2) traverse the list and set next of all the nodes in the copylist alongside
    // 3) traverse the list again and get the index of the random node from the hashSet 
    // 4) Go to that index in the copy list and set it to random of the current pointer
    public Node copyRandomListBrute(Node head) {
        HashMap<Node,Integer> hashMap = new HashMap<Node,Integer>();
        Node copiedHead = new Node(0);
        Node ptr = head;
        int index = 0;
        
        // hashing the nodes with their index;
        while(ptr!=null){
            hashMap.put(ptr,index);
            index++;
            ptr = ptr.next;
        };

        ptr = head;
        Node copyPtr = copiedHead;
        
        // setting the next of the copy nodes
        while(ptr!=null){
            copyPtr.next = new Node(ptr.val);
            copyPtr = copyPtr.next;
            ptr = ptr.next;
        };
        ptr = head;
        copyPtr = copiedHead.next;
        
        // setting the random of the copy nodes
        while(ptr!=null){
            // important to check if the random is null or not
            if(hashMap.containsKey(ptr.random)){
                index = hashMap.get(ptr.random);
                Node randomPtr = copiedHead.next;
                int i =0;
                // traverse to the index where random is in the main list
                // as the lists are same the random node will be at the same place in the 
                // copy list as well
                while(i!=index){
                    randomPtr = randomPtr.next;
                    i++;
                };
                copyPtr.random = randomPtr;
            }else{
                copyPtr.random = null;
            }
            ptr = ptr.next;
            copyPtr = copyPtr.next;
        }
        return copiedHead.next;
    }
    
    // Better Approach
    // Using hashing efficiently
    // we hash the nodes as key and the value will be the copy of that node
    // We will iterate again, and this time we will assign the next of the copy nodes
    // to the next of the original nodes next's value pair
    // we do the same with the random part
    public Node copyRandomListOptimized(Node head){
        HashMap<Node,Node> hashMap = new HashMap<Node,Node>();
        Node ptr = head;
        while(ptr!=null){
            hashMap.put(ptr,new Node(ptr.val));
            ptr = ptr.next;
        };
        ptr = head;
        while(ptr!=null){
            hashMap.get(ptr).next = hashMap.get(ptr.next);
            hashMap.get(ptr).random = hashMap.get(ptr.random);
            ptr = ptr.next;
        };
        return hashMap.get(head);
    }
    
    // Best
    // No extra space Linear Time
    // 1) make the list in such a way that copy nodes are in the next of the original nodes
    // e.g =>
    // 1 -> copy1 -> 2 -> copy2 -> 3 -> copy3 ....
    // here the copy nodes next will be the next of the original node
    // 2) now we traverse this list again
    // 3) we will assign the random of the copy node(original node's next) to the original nodes's random's next (i.e copy of that node);
    // 4) after 3) we will have all the random pointing correctly
    // 5) Now we just separate the copy and orignal list
    public Node copyRandomList(Node head){
        if(head==null) return null;
        Node ptr = head;
        Node copyNode;
        // placing the copy nodes in the next of the original nodes
        // i,e copy nodes are all the alternate nodes in the list
        while(ptr!=null){
            Node next = ptr.next;
            copyNode = new Node(ptr.val);
            ptr.next = copyNode;
            copyNode.next = next;
            ptr = next;
        }
        ptr = head;
        // assigning the random of the copy nodes
        while(ptr!=null){
            ptr.next.random = ptr.random!=null ? ptr.random.next : null;
            ptr = ptr.next.next;
        }
        ptr = head;
        Node copyList = ptr.next;
        // correcting the list 
        // i,e separating copy and original list
        while(ptr!=null){
            copyNode = ptr.next;
            Node originalNext = ptr.next.next;
            ptr.next = originalNext;
            copyNode.next = originalNext!=null ? originalNext.next : null;
            ptr = ptr.next;
        }
        return copyList;
    }
}