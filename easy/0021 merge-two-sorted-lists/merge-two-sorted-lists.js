/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let resp = new ListNode(0);
    let pointer = resp;
    while (true) {
        if (!l1) {
            pointer.next = l2;
            break;
        }
        if (!l2) {
            pointer.next = l1;
            break;
        }

        if (l1.val <= l2.val) {
            pointer.next = l1;
            l1 = l1.next;
        } else {
            pointer.next = l2;
            l2 = l2.next;
        }
        pointer = pointer.next;
    }
    return resp.next;
};

function print(node){
    while(node){
        console.log(node.val);
        node = node.next;
    }
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let list1 = new ListNode(1);
let list12 = new ListNode(2);
let list13 = new ListNode(4);
list1.next = list12;
list12.next = list13;
list13.next = null;

let list2 = new ListNode(1);
let list22 = new ListNode(3);
let list23 = new ListNode(4);
list2.next = list22;
list22.next = list23;
list23.next = null;

print(mergeTwoLists(list1, list2));