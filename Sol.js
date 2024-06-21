class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummyHead = new ListNode();
    let current = dummyHead;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = l1 || l2;
    
    return dummyHead.next;
}

function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;
    
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    
    slow.next = slow.next.next;
    
    return dummy.next;
}

function createLinkedList(values) {
    let head = null;
    let current = null;
    
    for (let val of values) {
        if (!head) {
            head = new ListNode(val);
            current = head;
        } else {
            current.next = new ListNode(val);
            current = current.next;
        }
    }
    
    return head;
}

function printLinkedList(head) {
    let current = head;
    let result = [];
    
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    
    console.log(result.join(' -> '));
}

let l1 = createLinkedList([1, 3, 5]);
let l2 = createLinkedList([2, 4, 6]);
let mergedList = mergeTwoLists(l1, l2);
console.log("Merged List:");
printLinkedList(mergedList);

let head = createLinkedList([1, 2, 3, 4, 5]);
let n = 2;
let modifiedList = removeNthFromEnd(head, n);
console.log(`After removing ${n}-th node from end:`);
printLinkedList(modifiedList);
