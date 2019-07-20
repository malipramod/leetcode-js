/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if(lists.length == 0)
        return null;

    let n = lists.length - 1;
    while (n != 0) {
        let i = 0, j = n;
        while (i < j) {
            lists[i] = mergeTwoLists(lists[i], lists[j]);
            i++;
            j--;
            if (i >= j)
                n = j;
        }
    }

    return lists[0];
};

var mergeTwoLists = function (l1, l2) {
    let resp = new ListNode(null);
    if (l1 == null) return l2;
    else if (l2 == null) return l1;

    if (l1.val <= l2.val) {
        resp = l1;
        resp.next = mergeTwoLists(l1.next, l2);
    } else {
        resp = l2;
        resp.next = mergeTwoLists(l1, l2.next);
    }
    return resp;
};

function print(node) {
    while (node) {
        console.log(node.val);
        node = node.next;
    }
}

// let l11 = new ListNode(1)
// let l12 = new ListNode(4)
// let l13 = new ListNode(5)
// l11.next = l12;
// l12.next = l13;
// l13.next = null;

// let l21 = new ListNode(1)
// let l22 = new ListNode(3)
// let l23 = new ListNode(4)
// l21.next = l22;
// l22.next = l23;
// l23.next = null;

// let l31 = new ListNode(2)
// let l32 = new ListNode(6)
// l31.next = l32;
// l32.next = null;

// print(mergeKLists([l11, l21,l31]));

// [[2],[],[-1]]
// let l11 = new ListNode(2);
// l11.next = null;
// let l21 = new ListNode(null)
// let l31 = new ListNode(-1)
// l31.next = null;
// print(mergeKLists([l11,l21,l31]));



print(mergeKLists([]));