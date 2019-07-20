/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var swapPairs = function (head) {
    let newHead = new ListNode(null);
    newHead.next = head;

    let ptr1 = newHead;
    while (true) {
        if(!ptr1) break;
        let ptr2 = ptr1.next;
        if(!ptr2) break;
        let temp = ptr2.next;
        if(!temp) break;

        ptr2.next = temp.next;
        temp.next = ptr2;
        ptr1.next = temp;
        ptr1 = ptr2;

    }

    return newHead.next;
};

function print(node) {
    while (node) {
        console.log(node.val);
        node = node.next;
    }
}

let head = new ListNode(1)
let p2 = new ListNode(2)
let p3 = new ListNode(3)
let p4 = new ListNode(4)
head.next = p2;
p2.next = p3;
p3.next = p4;
p4.next = null;
print(swapPairs(head));