// VERY VERY IMPORTANT 
// KEEP PRACTICING THIS ONE
// needs good understanding of the working of a linked list

const reverseKGroup = (head,k) => {
    if(k<=1 || !head || !head.next) return head;
    
    // a function to calculate the end node of the group
    // we'll need this because we need to know till which node
    // we have to reverse 
    const calculateEnd = start => {
        let ptr = start;
        let counter = 1;
        while(ptr && counter!==k){
            ptr = ptr.next;
            counter++;
        };
        // if the end goes out of bound we return the start
        // as we we don't reverse the groups which are not complete
        return ptr ? ptr : start
    }
    let start = head;
    let end = calculateEnd(start)
    // stroing the head of our final list
    let headOfReversed = end;
    while(end && start && start!==end){
        // this is the most important line of code in this fucntion
        // the previous will be the next of our first node of the group which
        // we are reversing, so the previous should point at the end of the next group
        // as the end of the next group will become the first node after reversing
        let previous = calculateEnd(end.next);
        let next,ptr=start;
        while(previous!==end){
            next = ptr.next;
            ptr.next = previous;
            previous = ptr;
            ptr = next;
        };
        start = ptr;
        end = calculateEnd(start);
    }
    return headOfReversed
}
